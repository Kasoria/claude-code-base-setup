import { NextRequest, NextResponse } from "next/server";

// ============================================================
// CONTACT FORM API ROUTE
//
// Option A (default): SMTP via Nodemailer
//   → works with Gmail, Zoho, any SMTP provider
//   → set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO in .env.local
//
// Option B: Resend
//   → uncomment the Resend block below, comment out the SMTP block
//   → set RESEND_API_KEY and CONTACT_TO in .env.local
//   → run: npm install resend
// ============================================================

// ── Option A: SMTP (Nodemailer) ──────────────────────────────
import nodemailer from "nodemailer";

async function sendViaSMTP(name: string, email: string, message: string) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px;">
        <h2 style="color: #1e293b;">New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
        <p style="white-space: pre-wrap; color: #475569;">${message}</p>
      </div>
    `,
  });
}

// ── Option B: Resend ─────────────────────────────────────────
// import { Resend } from "resend";
//
// async function sendViaResend(name: string, email: string, message: string) {
//   const resend = new Resend(process.env.RESEND_API_KEY);
//   await resend.emails.send({
//     from: "Website Contact Form <onboarding@resend.dev>",
//     to: process.env.CONTACT_TO!,
//     reply_to: email,
//     subject: `New message from ${name}`,
//     html: `
//       <div style="font-family: sans-serif; max-width: 600px;">
//         <h2>New contact form submission</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <hr />
//         <p style="white-space: pre-wrap;">${message}</p>
//       </div>
//     `,
//   });
// }

// ── Route handler ─────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // ── Send via chosen method ──
    await sendViaSMTP(name.trim(), email.trim(), message.trim());
    // await sendViaResend(name.trim(), email.trim(), message.trim()); // Option B

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[contact route] Error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
