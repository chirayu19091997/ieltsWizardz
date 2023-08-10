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
      "Live and self-paced online training & preparation for proficiency tests like IELTS / TOEFL / PTE and scholastic tests such as the SAT.",
    logo: (
      <div className="flex items-center justify-center h-[42px] w-[42px] flex-shrink-0">
        <img
          className="w-[42px] object-contain h-[42px]"
          src="/serviceshome/image6.png"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Admission Essays",
    subtitle:
      "We brainstorm with you to develop your university specific admission essays necessary for your applications to universities abroad.",
    logo: (
      <div className="flex items-center justify-center h-[42px] w-[42px] flex-shrink-0">
        <img
          className="w-[42px] object-contain h-[42px]"
          src="/serviceshome/image7.png"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Study Abroad",
    subtitle:
      "Your all-in-one guide that assists you at every step in your journey from course, country and university selection to securing your seat and getting your visa and accommodation.",
    logo: (
      <div className="flex items-center justify-center h-[42px] w-[42px] flex-shrink-0">
        <img
          className="w-[42px] object-contain h-[42px]"
          src="/serviceshome/image8.png"
          alt=""
        />
      </div>
    ),
  },
];

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
    tab: "Admission Essays",
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
    tab: "Study Abroad",
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
  { title: "United States", image: "/countries/us.svg" },
  { title: "Canada", image: "/countries/canada.svg" },
  { title: "United Kingdom", image: "/countries/uk.svg" },
  { title: "Australia", image: "/countries/australia.svg" },
  { title: "France", image: "/countries/france.svg" },
  { title: "Ireland", image: "/countries/ireland.svg" },
  { title: "Singapore", image: "/countries/singapore.svg" },
  { title: "UAE", image: "/countries/uae.svg" },
];
