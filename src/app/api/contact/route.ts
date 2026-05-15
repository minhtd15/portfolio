import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#e4e4e7;padding:32px;border-radius:12px;border:1px solid #27272a;">
          <h2 style="margin:0 0 24px;font-size:20px;color:#ffffff;">New message from your portfolio</h2>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;color:#71717a;font-size:13px;width:80px;">Name</td>
              <td style="padding:10px 0;color:#ffffff;font-size:14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#71717a;font-size:13px;">Email</td>
              <td style="padding:10px 0;font-size:14px;">
                <a href="mailto:${email}" style="color:#3b82f6;text-decoration:none;">${email}</a>
              </td>
            </tr>
          </table>

          <hr style="border:none;border-top:1px solid #27272a;margin:20px 0;" />

          <p style="color:#71717a;font-size:13px;margin:0 0 8px;">Message</p>
          <p style="color:#e4e4e7;font-size:14px;line-height:1.7;white-space:pre-wrap;margin:0;">${message}</p>

          <hr style="border:none;border-top:1px solid #27272a;margin:24px 0;" />

          <p style="color:#52525b;font-size:12px;margin:0;">
            Hit reply to respond directly to ${name} — this message was sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] send failed:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
