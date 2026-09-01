import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailUser = process.env.EMAIL_USER || "ayushkaran328@gmail.com";
    const emailPass = process.env.EMAIL_PASS;

    // Build styled HTML email template
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Courier New', Courier, monospace; background-color: #050508; color: #f4f4f9; padding: 20px; }
            .card { background-color: #0d0d18; border: 1px solid #1f1f33; border-radius: 12px; padding: 24px; max-width: 600px; margin: 0 auto; }
            .header { border-b: 1px solid #1f1f33; padding-bottom: 16px; margin-bottom: 20px; }
            .title { color: #8b5cf6; font-size: 18px; font-weight: bold; }
            .field-label { color: #06b6d4; font-size: 12px; text-transform: uppercase; margin-top: 16px; font-weight: bold; }
            .field-value { color: #f4f4f9; font-size: 14px; margin-top: 4px; background: #050508; padding: 10px; border-radius: 6px; border: 1px solid #1a1a2e; }
            .message-box { color: #e2e8f0; font-size: 14px; margin-top: 4px; background: #050508; padding: 14px; border-radius: 6px; border: 1px solid #1a1a2e; white-space: pre-wrap; line-height: 1.6; }
            .footer { margin-top: 24px; font-size: 11px; color: #64748b; border-t: 1px solid #1f1f33; padding-top: 12px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <div class="title">⚡ New Portfolio Message Received</div>
              <div style="color: #94a3b8; font-size: 12px; margin-top: 4px;">Sent via ayushkaran.dev interactive contact module</div>
            </div>

            <div class="field-label">Sender Name</div>
            <div class="field-value">${name}</div>

            <div class="field-label">Sender Email</div>
            <div class="field-value"><a href="mailto:${email}" style="color: #06b6d4; text-decoration: underline;">${email}</a></div>

            <div class="field-label">Message Content</div>
            <div class="message-box">${message}</div>

            <div class="footer">
              Received at: ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST
            </div>
          </div>
        </body>
      </html>
    `;

    // If SMTP credentials exist, send via Nodemailer
    if (emailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${emailUser}>`,
        replyTo: email,
        to: "ayushkaran328@gmail.com",
        subject: `⚡ Portfolio Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: htmlTemplate,
      });

      return NextResponse.json(
        { success: true, message: "Email transmitted successfully via Nodemailer!" },
        { status: 200 }
      );
    } else {
      // Fallback mode if EMAIL_PASS is not configured in .env.local yet
      console.log("----------------------------------------");
      console.log("⚡ PORTFOLIO CONTACT FORM SUBMISSION ⚡");
      console.log(`From: ${name} (${email})`);
      console.log(`Message: ${message}`);
      console.log("----------------------------------------");

      return NextResponse.json(
        {
          success: true,
          message: "Form submission logged successfully. Add EMAIL_PASS to .env.local for live Gmail SMTP delivery.",
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.error("Nodemailer transmission error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to transmit message." },
      { status: 500 }
    );
  }
}
