import { mailOptions, transporter } from "@/utils/mailConfig";
import { NextResponse } from "next/server";

const generateEmailContent = (data: any) => {
  const html = `<table style="text-align:center;border:1px solid black" style="width:100%">
        <tr>
          <th style="text-align:center;border:1px solid black">Name</th>
          <th style="text-align:center;border:1px solid black">Email</th>
          <th style="text-align:center;border:1px solid black">Phone</th>
          <th style="text-align:center;border:1px solid black">Message</th>
        </tr>
        <tr>
          <td style="text-align:center;border:1px solid black">${data.name}</td>
          <td style="text-align:center;border:1px solid black">${
            data.email
          }</td>
          <td style="text-align:center;border:1px solid black">${
            data.phone
          }</td>
          <td style="text-align:center;border:1px solid black">${
            data.message || ""
          }</td>
        </tr>
      </table>`;
  return html;
};
export async function POST(request: Request) {
  const req = await request.json();
  if (!req.name || !req.email || !req.phone) {
    return NextResponse.json({ message: "Bad Request" });
  }
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `New Lead ${req.name}`,
      text: `${req.name} has Posted a Query`,
      html: generateEmailContent(req),
    });
    return NextResponse.json({ message: "Mail sent Successfully" });
  } catch (err: any) {
    return NextResponse.json({ message: err.message });
  }
}
