import {
  IconPhoneCall,
  IconAt,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconAward,
  IconFileStack,
  Icon24Hours,
  IconBrandVisa,
} from "@tabler/icons-react";

export const Logo = (
  <div className="flex h-12 flex-shrink-0">
    <img
      className="w-auto object-contain h-12"
      src="/titledlogo.png"
      alt=""
      height={132}
      width={382}
    />
  </div>
);

export const clientData = {
  email: "ieltswizardz@gmail.com",
  phone: "+91-9310888164",
};

export const HeaderOptions = [
  { title: "About", route: "/about" },
  { title: "Services", route: "/services" },
  { title: "For Businesses", route: "/b2bservices" },
  { title: "Blog", route: "/blog" },
  { title: "Contact Us", route: "/contact" },
  // { title: "Pricing", route: "/pricing" },
  //   Features
  //   Solutions
  //   Resources
];

export const Socials = [
  {
    title: "LinkedIn",
    route: "https://www.linkedin.com/company/ieltswizardz/",
    logo: <IconBrandLinkedin size={16} />,
  },
  {
    title: "Instagram",
    route: "https://www.instagram.com/ieltswizardz/",
    logo: <IconBrandInstagram size={16} />,
  },
  {
    title: "Facebook",
    route: "https://www.facebook.com/ieltswizardz/",
    logo: <IconBrandFacebook size={16} />,
  },
  {
    title: "Whatsapp",
    route: `https://wa.me/${clientData.phone}`,
    logo: <IconBrandWhatsapp size={16} />,
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
    logo: <Icon24Hours size={48} />,
  },
  {
    title: "Test preparation",
    subtitle:
      "Our Professionals can help you with IELTS One Skill,IELTS Complete,TOEFL,PTE,SAT",
    logo: <IconAward size={48} />,
  },
  {
    title: "Document Drafting",
    subtitle: "We can help you with SOPs,LORs,Admission Essays",
    logo: <IconFileStack size={48} />,
  },
  {
    title: "Admission Assistance",
    subtitle:
      "We can help you with University Selection,Application Processing,Visa",
    logo: <IconBrandVisa size={48} />,
  },
];

{
  /* <SVGFlag country='tr' flagWidth='2560' /> */
}

export const statsData = [
  {
    title: "Years of experience",
    subTitle: "Creating the successful path",
    stats: 20,
  },
  {
    title: "Students trained",
    subTitle: "In last 6 years",
    stats: 5000,
  },
  {
    title: "Universities",
    subTitle: "Working for your success",
    stats: 700,
  },
];

export const logoSlides = [
  [
    "/universities/image1.png",
    "/universities/image2.png",
    "/universities/image3.png",
    "/universities/image4.png",
  ],
  [
    "/universities/image5.png",
    "/universities/image6.png",
    "/universities/image7.png",
    "/universities/image8.png",
  ],
  [
    "/universities/image9.png",
    "/universities/image10.png",
    "/universities/image11.png",
    "/universities/image12.png",
  ],
  [
    "/universities/image13.png",
    "/universities/image14.png",
    "/universities/image15.png",
    "/universities/image16.png",
  ],
  [
    "/universities/image17.png",
    "/universities/image18.png",
    "/universities/image19.png",
    "/universities/image20.png",
  ],
  [
    "/universities/image21.png",
    "/universities/image22.png",
    "/universities/image23.png",
    "/universities/image24.png",
  ],
];
