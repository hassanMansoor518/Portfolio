import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate inputs
    if (!name || !name.trim()) {
      return NextResponse.json(
        { success: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || !email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || !message.trim()) {
      return NextResponse.json(
        { success: false, error: "Message content cannot be empty." },
        { status: 400 }
      );
    }

    const recipientEmail = "hassanmansoor518@gmail.com";
    const senderEmail = process.env.EMAIL_USER || recipientEmail;
    const senderPass = process.env.EMAIL_PASS;

    // If credentials are not configured yet, notify in response
    if (!senderPass) {
      console.warn("EMAIL_PASS is missing in .env.local! Contact message received locally:", {
        name,
        email,
        subject,
        message,
      });

      return NextResponse.json(
        {
          success: false,
          error: "Email credentials not configured. Please set EMAIL_PASS in your .env.local file.",
          isConfigError: true,
        },
        { status: 500 }
      );
    }

    // Configure Transporter
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = port === 465;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: senderEmail,
        pass: senderPass,
      },
    });

    const mailSubject = subject && subject.trim() 
      ? `Portfolio Contact: ${subject.trim()}`
      : `New Portfolio Message from ${name.trim()}`;

    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #ebe6dd; border-radius: 12px; overflow: hidden; color: #111111;">
        <div style="background-color: #111111; padding: 24px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 2px;">Portfolio Message</h2>
        </div>
        <div style="padding: 30px;">
          <div style="margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #eee;">
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;"><strong>Sender Name:</strong> ${name.trim()}</p>
            <p style="margin: 0 0 8px 0; font-size: 14px; color: #666;"><strong>Sender Email:</strong> <a href="mailto:${email.trim()}" style="color: #ff581a; text-decoration: none;">${email.trim()}</a></p>
            ${subject ? `<p style="margin: 0; font-size: 14px; color: #666;"><strong>Subject:</strong> ${subject.trim()}</p>` : ""}
          </div>
          <div>
            <h3 style="font-size: 14px; text-transform: uppercase; color: #ff581a; margin-top: 0;">Message Content:</h3>
            <div style="background-color: #f7f3ec; padding: 18px; border-radius: 8px; font-size: 15px; line-height: 1.6; color: #222222; white-space: pre-wrap;">${message.trim()}</div>
          </div>
        </div>
        <div style="background-color: #f7f3ec; padding: 16px; text-align: center; font-size: 12px; color: #888888;">
          Sent from your Portfolio Website Contact Form
        </div>
      </div>
    `;

    const textContent = `
New Portfolio Contact Message
--------------------------------
Name: ${name.trim()}
Email: ${email.trim()}
Subject: ${subject ? subject.trim() : "N/A"}

Message:
${message.trim()}
    `;

    await transporter.sendMail({
      from: `"${name.trim()}" <${senderEmail}>`,
      to: recipientEmail,
      replyTo: email.trim(),
      subject: mailSubject,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error: unknown) {
    console.error("Error sending email:", error);
    const errMessage = error instanceof Error ? error.message : "Failed to send email message.";
    return NextResponse.json(
      { success: false, error: errMessage },
      { status: 500 }
    );
  }
}
