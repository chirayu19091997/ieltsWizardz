"use client";
import React, { useState } from "react";
import ServiceItem from "./components/ServiceItem";

const ServiceNew = () => {
  const serviceSections = [
    {
      tab: "IELTS One Skill",
      title: "IELTS One Skill Preparation",
      data: [
        {
          title: "IELTS One Skill Self Paced",
          subtitle: "For those who need training for just one skill",
          keyFeatures: "Key Features",
          features: [
            "Recorded Sessions by professionals",
            "24/7 Availability",
            "Personal Mentor Support",
          ],
        },
        {
          title: "IELTS One Skill Live",
          subtitle:
            "For those who need training for just one skill with mentor support live",
          keyFeatures: "Everything in IELTS One Skill Self Paced, plus",
          features: ["Live Classes"],
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCardsData, setActiveCardsData] = useState(
    serviceSections[0].data
  );

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <h1 className="text-4xl">Our Services</h1>
      <div className="flex flex-col w-full h-full space-y-4 px-8">
        <div className="flex flex-wrap justify-center items-center w-full">
          {serviceSections.map((item: any, index: number) => (
            <p
              key={`tab-${index}`}
              className={`p-2 m-1 px-4 rounded-full cursor-pointer ${
                activeIndex === index ? "bg-tertiaryColor" : "bg-slate-100"
              } ${
                activeIndex === index
                  ? "text-secondaryTextColor"
                  : "text-primaryTextColor"
              }`}
              onClick={() => {
                setActiveIndex(index);
                setActiveCardsData(item.data);
              }}
            >
              {item.tab}
            </p>
          ))}
        </div>
        <div className="flex lg:flex-row max-md:flex-col flex-wrap h-full w-full lg:space-x-4 max-md:space-y-4 p-4">
          {activeCardsData.map((cardData, cardIndex) => (
            <ServiceItem cardData={cardData} key={`card-${cardIndex}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceNew;
