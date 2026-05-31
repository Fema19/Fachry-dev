import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'fachrinurulakbar19@gmail.com',
      subject: `Portfolio Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `,
    });

    return Response.json(
      { success: true },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      { success: false },
      { status: 500 }
    );
  }
}