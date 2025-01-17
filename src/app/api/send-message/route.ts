import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const authHeader = request.headers.get('Authorization');
        const token = authHeader?.split(' ')[1]; // "Bearer <token>"

        if (token !== process.env.API_SECRET) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: Number(process.env.EMAIL_PORT),
            secure: false,
            auth: {
                user: process.env.DEV_EMAIL,
                pass: process.env.DEV_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.DEV_EMAIL, // dev email
            to: process.env.PERSONAL_EMAIL, // personal email
            subject: `${name} sent you a message`,
            text: `Name: ${name} \n\n Email: ${email} \n\n Message:\n\n ${message}`,
        });

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
