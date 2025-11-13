// /app/api/send/route.js
import { Resend } from "resend";

const resend = new Resend("re_NDcjotRW_Dtcn3EA13qoo4MWBPS8bvekM");

type ReqFormData = {
  name: string;
  email: string;
  number: number;
  message: string;
};

export async function POST(req: Request) {
  const { email, message, name, number }: ReqFormData = await req.json();

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "prepecomsolution@gmail.com",
      subject: "Client From Website",
      text: `
        From: ${name}.
        Number: ${number}.
        Email: ${email}.
        Message: ${message}.
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error(err);
    return Response.json({ success: false }, { status: 500 });
  }
}
