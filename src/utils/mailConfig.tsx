import { clientData } from "@/utils/constants";
import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_PASSWORD,
  },
});

export const mailOptions = {
  from: process.env.NEXT_PUBLIC_EMAIL,
  to: clientData.email,
};
