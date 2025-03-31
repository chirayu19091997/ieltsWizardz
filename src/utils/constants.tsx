/* eslint-disable @next/next/no-img-element */
import Animator from "@/components/Animator";
import {
  IconPhoneCall,
  IconAt,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export const emailRegex = RegExp(
  "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);

export const Logo = (
  <div className="flex h-14 space-x-2 items-center flex-shrink-0">
    <img
      className="w-auto object-contain h-14"
      src="/logo.png"
      alt=""
      height={230}
      width={230}
    />
    <p className="text-xl font-bold">Global Vista Exports</p>
  </div>
);

export const clientData = {
  email: "globalvistaexports@gmail.com",
  phone: "+91-9310888164",
};

export const HeaderOptions = [
  { title: "About", route: "/about" },
  // { title: "Services", route: "/services" },
  // { title: "For Partners", route: "/b2bservices" },
  // { title: "Blog", route: "/blog" },
  { title: "Contact Us", route: "/contact" },
];

export const Socials = [
  {
    title: "LinkedIn",
    route: "https://www.linkedin.com/company/globalvistaexports/",
    logo: <IconBrandLinkedin size={20} />,
  },
  {
    title: "Instagram",
    route: "https://www.instagram.com/globalvistaexports/",
    logo: <IconBrandInstagram size={20} />,
  },
  {
    title: "Facebook",
    route: "https://www.facebook.com/globalvistaexports/",
    logo: <IconBrandFacebook size={20} />,
  },
  {
    title: "Whatsapp",
    route: `https://wa.me/${clientData.phone}`,
    logo: <IconBrandWhatsapp size={20} />,
  },
];

export const DirectContacts = [
  {
    title: "Phone",
    route: `tel:${clientData.phone}`,
    logo: <IconPhoneCall size={16} />,
  },
  {
    title: "Email",
    route: `mailto:${clientData.email}`,
    logo: <IconAt size={16} />,
  },
];

export const homeServiceSections = [
  {
    title: "Premium Quality",
    subtitle:
      "We have All types of fabric and colors to choose from with premium quality",
    serviceAnimationUrl:
      "https://lottie.host/3a2e2ab0-f12d-489c-b5e9-e90f3c61bf0e/VkU3rxRHou.lottie",
  },
  {
    title: "Competitive Pricing",
    subtitle:
      "We provide best price for our customers with competitive pricing to cater all budgets",
    serviceAnimationUrl:
      "https://lottie.host/e12aa21a-6b15-4610-8199-1e67a0f479a9/x9BRgUS9SR.lottie",
  },
  {
    title: "Timely Delivery",
    subtitle:
      "We Ship Directly from factories and this helps prompt delivery for our customers",
    serviceAnimationUrl:
      "https://lottie.host/549a78f2-8af1-47f3-a617-7d8933feb9b7/VSqzpZaneL.lottie",
  },
];

export const statsData = [
  {
    title: "Years of experience",
    subTitle: "Creating the successful path",
    stats: 20,
  },
  {
    title: "Customers Served",
    subTitle: "In last 6 months",
    stats: 300,
  },
  {
    title: "Yarns Delivered",
    subTitle: "In last 6 months",
    stats: 20000,
  },
];
