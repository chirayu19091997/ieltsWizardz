import {
  BiSolidPhoneCall,
  BiMailSend,
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
} from "react-icons/bi";

import { PiExamFill } from "react-icons/pi";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FcServices } from "react-icons/fc";
import { GiGraduateCap } from "react-icons/gi";

export const Logo = (
  <img
    className="w-auto h-8"
    src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
    alt=""
  />
);

export const HeaderOptions = [
  { title: "About", route: "/about" },
  { title: "Services", route: "/services" },
  { title: "Blog", route: "/blog" },
  { title: "Contact Us", route: "/contact" },
  // { title: "Pricing", route: "/pricing" },
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
  // { title: "LinkedIn", route: "/contact", logo: <BiLogoLinkedin /> },
];

export const DirectContacts = [
  {
    title: "Phone",
    route: "tel:9310888164",
    logo: <BiSolidPhoneCall />,
  },
  {
    title: "Email",
    route: "mailto:ieltswizardz@gmail.com",
    logo: <BiMailSend />,
  },
];

export const testimonialData = [
  {
    name: "Ishita",
    imageUrl:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    pursuing: "MBA in Canada",
    review: `I really liked the learning techniques and methods. I'm really grateful to the teachers for helping me to understand in the best possible way. Teachers are very friendly, they give proper one on one attention to every student  . Keep growing and shining the same #ieltswizardz ✨`,
  },
  {
    name: "Hitansh Agrawal",
    imageUrl:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
    pursuing: "BSc in Singapore",
    review: `I have enjoyed learning with IELTS Wizardz. I received 7.5 bands in 2 weeks of preparation, this became possible only because of them and their supporting staff.`,
  },
  {
    name: "Jenny Wilson",
    imageUrl:
      "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    pursuing: "Graphic Designer",
    review: `I cannot believe that I have got a brand new landing
    page after getting Omega. It was super easy to edit and
    publish.`,
  },
];

export const serviceSections = [
  {
    tab: "IELTS One Skill",
    title: "IELTS One Skill Preparation",
    data: [
      {
        title: "IELTS One Skill Live",
        subtitle:
          "For those who need training for just one skill with mentor support live",
        keyFeatures: "Key Features",
        features: ["Personal Mentor Support", "Live Classes"],
      },
      {
        title: "Writing Evaulation Service",
        subtitle: "For those who wants evaluation for their preparation",
        keyFeatures: "Key Features",
        features: [
          "Personalised insights on their preparation",
          "Detailed information on improvement areas",
        ],
      },
    ],
  },
  {
    tab: "IELTS Complete",
    title: "IELTS Complete Preparation",
    data: [
      {
        title: "IELTS Plus Self Paced",
        subtitle: "For those who need complete IELTS training",
        keyFeatures: "Key Features",
        features: [
          "Recorded Sessions by professionals",
          "24/7 Availability",
          "Personal Mentor Support",
        ],
      },
      {
        title: "IELTS Plus Live",
        subtitle:
          "For those who need complete IELTS training with mentor support live",
        keyFeatures: "Everything in IELTS Plus Self Paced, plus",
        features: ["Live Classes"],
      },
    ],
  },
  {
    tab: "TOEFL",
    title: "TOEFL Complete Preparation",
    data: [
      {
        title: "TOEFL Self Paced",
        subtitle: "For those who need complete TOEFL training",
        keyFeatures: "Key Features",
        features: [
          "Recorded Sessions by professionals",
          "24/7 Availability",
          "Personal Mentor Support",
        ],
      },
      {
        title: "TOEFL Live",
        subtitle:
          "For those who need complete TOEFL training with mentor support live",
        keyFeatures: "Everything in TOEFL Self Paced, plus",
        features: ["Live Classes"],
      },
    ],
  },
  {
    tab: "PTE",
    title: "PTE Complete Preparation",
    data: [
      {
        title: "PTE Self Paced",
        subtitle: "For those who need complete PTE training",
        keyFeatures: "Key Features",
        features: [
          "Recorded Sessions by professionals",
          "24/7 Availability",
          "Personal Mentor Support",
        ],
      },
      {
        title: "PTE Live",
        subtitle:
          "For those who need complete PTE training with mentor support live",
        keyFeatures: "Everything in PTE Self Paced, plus",
        features: ["Live Classes"],
      },
    ],
  },
  {
    tab: "SAT",
    title: "SAT Complete Preparation",
    data: [
      {
        title: "SAT Self Paced",
        subtitle: "For those who need complete SAT training",
        keyFeatures: "Key Features",
        features: [
          "Recorded Sessions by professionals",
          "24/7 Availability",
          "Personal Mentor Support",
        ],
      },
      {
        title: "SAT Live",
        subtitle:
          "For those who need complete SAT training with mentor support live",
        keyFeatures: "Everything in SAT Self Paced, plus",
        features: ["Live Classes"],
      },
    ],
  },
  {
    tab: "Document Drafting",
    title: "Document Drafting",
    data: [
      {
        title: "Document Drafting",
        subtitle: "For those who need assistance with document preparation",
        keyFeatures: "Key Features",
        features: ["SOPs", "LORs", "Admission Essays"],
      },
    ],
  },
  {
    tab: "Admission Assistance",
    title: "Admission Assistance",
    data: [
      {
        title: "Admission Assistance",
        subtitle: "For those who need assistance with admission",
        keyFeatures: "Key Features",
        features: ["University Selection", "Application Processing", "Visa"],
      },
    ],
  },
];

export const homeServiceSections = [
  {
    title: "How can we help you?",
    subtitle: "Click here to have a look at our services",
    logo: <FcServices size={48} />,
  },
  {
    title: "Test preparation",
    subtitle:
      "Our Professionals can help you with IELTS One Skill,IELTS Complete,TOEFL,PTE,SAT",
    logo: <PiExamFill size={48} />,
  },
  {
    title: "Document Drafting",
    subtitle: "We can help you with SOPs,LORs,Admission Essays",
    logo: <MdOutlineDocumentScanner size={48} />,
  },
  {
    title: "Admission Assistance",
    subtitle:
      "We can help you with University Selection,Application Processing,Visa",
    logo: <GiGraduateCap size={48} />,
  },
];
