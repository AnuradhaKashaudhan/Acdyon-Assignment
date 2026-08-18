import { NextResponse } from 'next/server';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Sanitize string to prevent basic injection / XSS
function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, '').toLowerCase();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const rawEmail = body?.email;

    if (!rawEmail || typeof rawEmail !== 'string') {
      return NextResponse.json(
        { message: 'Email address is required.' },
        { status: 400 }
      );
    }

    const email = sanitizeInput(rawEmail);

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address format.' },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey =
      process.env.SUPABASE_SERVICE_ROLE_KEY ||
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.warn('Supabase credentials missing in environment variables.');
    } else {
      // 1. Check if email already exists in Supabase table "waitlist"
      const checkRes = await fetch(
        `${supabaseUrl}/rest/v1/waitlist?email=eq.${encodeURIComponent(email)}&select=email`,
        {
          headers: {
            apikey: supabaseKey,
            Authorization: `Bearer ${supabaseKey}`,
          },
        }
      );

      if (checkRes.ok) {
        const existingRows = await checkRes.json();
        if (Array.isArray(existingRows) && existingRows.length > 0) {
          return NextResponse.json(
            { message: 'Already on waitlist', existing: true },
            { status: 200 }
          );
        }
      }

      // 2. Insert new email into Supabase table "waitlist"
      const insertRes = await fetch(`${supabaseUrl}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({
          email: email,
          source: 'landing_page',
        }),
      });

      if (!insertRes.ok) {
        const errorText = await insertRes.text();
        console.error('Supabase Insert Error:', errorText);
      }
    }

    // 3. Trigger Resend Email API
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const emailHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Welcome to EarningsHub</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0f172a; color: #f8fafc; padding: 40px 20px;">
            <div style="max-w: 500px; margin: 0 auto; background-color: #1e293b; padding: 32px; border-radius: 16px; border: 1px solid #334155;">
              <h1 style="color: #38bdf8; margin-top: 0;">Hey there, gig worker! 🚀</h1>
              <p style="font-size: 16px; line-height: 1.6; color: #cbd5e1;">
                Thanks for joining 10K+ others tracking their earnings smarter across all platforms.
              </p>
              <div style="margin: 32px 0; text-align: center;">
                <a href="https://earningshub.com/dashboard" style="background-color: #10b981; color: #022c22; padding: 14px 28px; font-weight: bold; border-radius: 12px; text-decoration: none; display: inline-block;">
                  Get Early Access
                </a>
              </div>
              <hr style="border: none; border-top: 1px solid #334155; margin: 32px 0;" />
              <p style="font-size: 12px; color: #64748b; text-align: center;">
                &copy; ${new Date().getFullYear()} EarningsHub. All rights reserved.
              </p>
            </div>
          </body>
        </html>
      `;

      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'EarningsHub <onboarding@resend.dev>',
          to: [email],
          subject: 'Welcome to EarningsHub 🚀',
          html: emailHtml,
        }),
      });

      if (!resendRes.ok) {
        const resendErr = await resendRes.text();
        console.error('Resend API Error:', resendErr);
      }
    } else {
      console.warn('RESEND_API_KEY missing in environment variables.');
    }

    return NextResponse.json(
      { success: true, message: 'Welcome to EarningsHub!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { message: 'Oops! Please try again.' },
      { status: 500 }
    );
  }
}
