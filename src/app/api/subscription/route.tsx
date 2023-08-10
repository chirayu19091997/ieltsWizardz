import { mailOptions, transporter } from "@/utils/mailConfig";
import { NextResponse } from "next/server";

const generateEmailContent = (data: any) => {
  const html = `<table style="text-align:center;border:1px solid black" style="width:100%">
        <tr>
          <th style="text-align:center;border:1px solid black">Email</th>
        </tr>
        <tr>
          <td style="text-align:center;border:1px solid black">${data.email}</td>
        </tr>
      </table>`;
  return html;
};
export async function POST(request: Request) {
  const req = await request.json();
  if (!req.email) {
    return NextResponse.json({ message: "Bad Request" });
  }
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `Subscription`,
      text: `${req.email} has Subscribed`,
      html: generateEmailContent(req),
    });
    return NextResponse.json({ message: "Mail sent Successfully" });
  } catch (err: any) {
    return NextResponse.json({ message: err.message });
  }
}
