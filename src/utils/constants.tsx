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
    <p className="text-xl font-bold">IELTS Wizardz</p>
  </div>
);

export const clientData = {
  email: "ieltswizardz@gmail.com",
  phone: "+91-9310888164",
};

export const HeaderOptions = [
  { title: "About", route: "/about" },
  { title: "Services", route: "/services" },
  { title: "For Partners", route: "/b2bservices" },
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
      <div className="flex items-center justify-center w-14 h-14 flex-shrink-0">
        <img
          className="h-14 w-14 object-contain"
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
      <div className="flex items-center justify-center h-14 w-14 flex-shrink-0">
        <img
          className="h-14 w-14 object-contain"
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
      <div className="flex items-center justify-center h-14 w-14 flex-shrink-0">
        <img
          className="h-14 w-14 object-contain"
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
        tab: "IELTS Academic",
        title: "IELTS Complete Preparation",
        data: [
          {
            title: "IELTS Plus",
            subtitle:
              "For those who need complete live training with online support",
            keyFeatures: "Key Features",
            features: [
              "4 weeks live online classes",
              "Video recordings of each class",
              "Up-to-date study materials",
              "Cambridge certified trainers",
              "2 full length mock tests with evaluation",
              "Grammar and vocabulary sessions",
            ],
          },
          {
            title: "IELTS Premium",
            subtitle:
              "For those who need complete live training with access to our exclusive ONLINE Portal treasures",
            keyFeatures: "Key Features",
            features: [
              "6 weeks live online classes",
              "Video recordings of each class",
              "24x7 access to our ONLINE Portal for 6 months",
              "10 timed Mock Tests with evaluation",
              "40 Sectional tests for practice with evaluation",
              "Weekend sessions on grammar and vocabulary",
              "300+ videos on grammar, vocabulary and tips",
              "100+ videos on trending topics, idioms and spellings",
              "200+ Practice Exercises and Quizzes",
              "Regular Doubt Solving Sessions",
            ],
          },
          {
            title: "IELTS Self-paced",
            subtitle:
              "For those who wish to prepare and practice at their own pace",
            keyFeatures: "Key Features",
            features: [
              "24x7 access to our ONLINE Portal for 3 months",
              "10 full-length timed Mock Tests with evaluation",
              "40 Sectional tests for practice with evaluation",
              "300+ self-paced lessons on grammar and vocabulary",
              "100+ videos on trending topics, idioms and spellings",
              "200+ Practice Exercises and Quizzes",
              "Free English assessment and IELTS Diagnostic Test",
            ],
          },
        ],
      },
      {
        tab: "IELTS One-Skill",
        title: "IELTS One Skill Preparation",
        data: [
          {
            title: "One-skill Booster",
            subtitle:
              "For those who wish to boost their scores in any one section of the IELTS test",
            keyFeatures: "Key Features",
            features: [
              "10 hrs. of live training-cum-practice",
              "Evaluation and feedback by experts",
              "Personal mentoring and support",
            ],
          },
          {
            title: "Writing Tasks Evaluation",
            subtitle:
              "For those who are worried about your IELTS Academic writing skills and want to get their essays evaluated",
            keyFeatures: "Key Features",
            features: [
              "Combo: Task 1 + Task 2 (pack of 5/10/15 writeups)",
              "Task 2: Pack of 5/10/15 writeups",
              "Real time evaluation based on band descriptions",
              "Predictive band scores",
              "Feedback within 24-48 hrs",
            ],
          },
        ],
      },
      {
        tab: "TOEFL iBT",
        title: "TOEFL Complete Preparation",
        data: [
          {
            title: "TOEFL Plus",
            subtitle:
              "For those who need complete live training on TOEFL test with online support",
            keyFeatures: "Key Features",
            features: [
              "3 weeks of online classes",
              "Video recordings of each class",
              "Up-to-date study materials",
              "1 full length mock test with evaluation",
              "Grammar and vocabulary sessions",
            ],
          },
          {
            title: "TOEFL Premium",
            subtitle:
              "For those who need complete live training with access to our exclusive ONLINE Portal treasures",
            keyFeatures: "Key Features",
            features: [
              "6 weeks of live online classes",
              "Video recordings of each class",
              "24x7 access to our ONLINE Portal for 6 months",
              "14 timed Mock Tests with evaluation",
              "300+ videos on grammar, vocabulary and tips",
              "Weekend doubt solving sessions",
              "Free English assessment Test",
            ],
          },
          {
            title: "TOEFL Self-paced",
            subtitle:
              "For those who wish to prepare and practice at their own pace.",
            keyFeatures: "Key Features",
            features: [
              "24x7 access to our ONLINE Portal for 6 months",
              "14 timed Mock Tests with evaluation",
              "300+ videos on grammar, vocabulary and tips",
              "Free English assessment Test",
            ],
          },
        ],
      },
      {
        tab: "PTE",
        title: "PTE Complete Preparation",
        data: [
          {
            title: "PTE Plus",
            subtitle:
              "For those who need complete live training on PTE test with online support",
            keyFeatures: "Key Features",
            features: [
              "3 weeks of live online classes",
              "Video recordings of each class",
              "Up-to-date study materials",
              "1 full length mock test with evaluation",
              "Grammar and vocabulary sessions",
            ],
          },
          {
            title: "PTE Premium",
            subtitle:
              "For those who need complete live training with access to our exclusive ONLINE Portal treasure",
            keyFeatures: "Key Features",
            features: [
              "6 weeks of live online classes ",
              "Video recordings of each class",
              "24x7 access to our ONLINE Portal for 6 months",
              "14 timed Mock Tests with evaluation",
              "300+ videos on grammar, vocabulary and tips",
              "Weekend doubt solving sessions",
              "Free English assessment Test",
            ],
          },
          {
            title: "PTE Self-paced",
            subtitle:
              "For those who wish to prepare and practice at their own pace",
            keyFeatures: "Key Features",
            features: [
              "24x7 access to our ONLINE Portal for 6 months",
              "14 timed Mock Test with evaluation",
              "300+ videos on grammar, vocabulary and tips",
              "Free English assessment Test",
            ],
          },
        ],
      },
      {
        tab: "SAT Digital",
        title: "SAT Digital",
        data: [
          {
            title: "SAT Plus",
            subtitle:
              "For those who need complete live training on the new Digital SAT with online support",
            keyFeatures: "Key Features",
            features: [
              "6 weeks of live online classes",
              "Video recordings of each class",
              "Up-to-date study materials",
              "7 full length mock test with evaluation",
              "Personalized mentoring and support",
            ],
          },
          {
            title: "SAT Premium",
            subtitle:
              "For those who need complete live training with access to our exclusive ONLINE Portal treasures ",
            keyFeatures: "Key Features",
            features: [
              "12 weeks of live online classes",
              "Video recordings of each class",
              "24x7 access to our ONLINE Portal for 6 months",
              "10 timed Mock Tests with evaluation",
              "45 sectional tests with evaluation",
              "300+ videos on grammar, vocabulary and tips",
              "Weekend Verbal and Math doubt solving sessions",
              "Free English assessment Test",
            ],
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
            title: "Document drafting",
            subtitle:
              "For those who need assistance in drafting or editing their university application essays",
            keyFeatures: "Key Features",
            features: [
              "Common app essays & Uni. specific essays",
              "Statement of Purpose / Personal Statement ",
              "Letter of Intent",
              "LORs",
              "Turnaround time 48 to 72 hours",
              "Drafting by internationally recognized English language experts",
            ],
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
            title: "CORE Services",
            subtitle:
              "For those who seek help in navigating through realizing their study abroad dream",
            keyFeatures: "Key Features",
            features: [
              "Admissions Counseling",
              "Profile Evaluation",
              "Country and Course Selection",
              "University Selection",
              "Application processing",
              "Visa Consulting",
            ],
          },
          {
            title: "ALLIED Services",
            subtitle:
              "We assist you in easing out your journey to studying abroad",
            keyFeatures: "Key Features",
            features: [
              "Scholarships",
              "Education Loans",
              "GIC Accounts",
              "Air Ticketing",
              "Accommodation",
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
