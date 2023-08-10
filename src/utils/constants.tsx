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
  <div className="flex h-14 flex-shrink-0">
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
];

export const Socials = [
  {
    title: "LinkedIn",
    route: "https://www.linkedin.com/company/ieltswizardz/",
    logo: <IconBrandLinkedin size={20} />,
  },
  {
    title: "Instagram",
    route: "https://www.instagram.com/ieltswizardz/",
    logo: <IconBrandInstagram size={20} />,
  },
  {
    title: "Facebook",
    route: "https://www.facebook.com/ieltswizardz/",
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
    title: "Test preparation",
    subtitle:
      "Our Professionals can help you with IELTS One Skill,IELTS Complete,TOEFL,PTE,SAT",
    logo: (
      <svg
        className="mx-auto"
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
          stroke="#161616"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z"
          fill="#D4D4D8"
          stroke="#161616"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z"
          fill="#D4D4D8"
          stroke="#161616"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Document Drafting",
    subtitle: "We can help you with SOPs,LORs,Admission Essays",
    logo: (
      <svg
        className="mx-auto"
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27 27H19V45H27V27Z"
          stroke="#161616"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 37H1V45H9V37Z"
          fill="#D4D4D8"
          stroke="#161616"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45 17H37V45H45V17Z"
          fill="#D4D4D8"
          stroke="#161616"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 17L15 7L23 15L37 1"
          stroke="#161616"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 1H37V10"
          stroke="#161616"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Admission Assistance",
    subtitle:
      "We can help you with University Selection,Application Processing,Visa",
    logo: (
      <svg
        className="mx-auto"
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M41 1H1V41H41V1Z"
          stroke="#161616"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 7H7V20H18V7Z"
          stroke="#161616"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 26H7V35H18V26Z"
          stroke="#161616"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 7H24V35H35V7Z"
          fill="#D4D4D8"
          stroke="#161616"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
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
  "/universities/image1.png",
  "/universities/image2.png",
  "/universities/image3.png",
  "/universities/image4.png",
  "/universities/image5.png",
  "/universities/image6.png",
  "/universities/image7.png",
  "/universities/image8.png",
  "/universities/image9.png",
  "/universities/image10.png",
  "/universities/image11.png",
  "/universities/image12.png",
  "/universities/image13.png",
  "/universities/image14.png",
  "/universities/image15.png",
  "/universities/image16.png",
  "/universities/image17.png",
  "/universities/image18.png",
  "/universities/image19.png",
  "/universities/image20.png",
  "/universities/image21.png",
  "/universities/image22.png",
  "/universities/image23.png",
  "/universities/image24.png",
];

export const serviceSections = [
  {
    tab: "Test Preparation",
    subTabs: [
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
    ],
  },
  {
    tab: "Document Preparations",
    subTabs: [
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
    ],
  },
  {
    tab: "Admission Assistance",
    subTabs: [
      {
        tab: "Admission Assistance",
        title: "Admission Assistance",
        data: [
          {
            title: "Admission Assistance",
            subtitle: "For those who need assistance with admission",
            keyFeatures: "Key Features",
            features: [
              "University Selection",
              "Application Processing",
              "Visa",
            ],
          },
        ],
      },
    ],
  },
];

export const CountriesData = [
  { title: "United States", image: "/us.svg" },
  { title: "Canada", image: "/canada.svg" },
  { title: "Australia", image: "/australia.svg" },
  { title: "New Zealand", image: "/newzeland.svg" },
];
