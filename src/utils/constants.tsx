import {
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
} from "react-icons/bi";

export const HeaderOptions = [
  { title: "About", route: "/about" },
  { title: "Services", route: "/services" },
  // { title: "Pricing", route: "/pricing" },
  { title: "Blog", route: "/blog" },
  { title: "Contact Us", route: "/contact" },
  //   Features
  //   Solutions
  //   Resources
];

export const Socials = [
  {
    title: "Instagram",
    route: "https://www.instagram.com/ieltswizardz/",
    logo: <BiLogoInstagram />,
  },
  {
    title: "Facebook",
    route: "https://www.facebook.com/ieltswizardz/",
    logo: <BiLogoFacebook />,
  },
  {
    title: "Whatsapp",
    route: "https://wa.me/+919310888164",
    logo: <BiLogoWhatsapp />,
  },
  { title: "LinkedIn", route: "/contact", logo: <BiLogoLinkedin /> },
];
