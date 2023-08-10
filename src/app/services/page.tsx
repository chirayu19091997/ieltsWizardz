import React from "react";
import ServiceItem from "./components/ServiceItem";

const Services = () => {
  const serviceSections = [
    {
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
      data: [
        {
          title: "Document Drafting",
          subtitle: "For those who need assistance with document preparation",
          keyFeatures: "Key Features",
          features: ["SOPs", "LORs", "Admission Essays"],
        },
        {
          title: "Admission Assistance",
          subtitle: "For those who need assistance with admission",
          keyFeatures: "Key Features",
          features: ["University Selection", "Application Processing", "Visa"],
        },
      ],
    },
  ];

  const onContactClick = (service: object) => {};

  return (
    <div className="flex flex-col space-y-4 p-6">
      <h1 className="font-bold text-3xl text-center">Services</h1>
      {serviceSections.map((item: any, index: number) => (
        <ServiceItem
          services={item.data}
          isAlternate={index % 2 === 0}
          key={`serviceSection-${index}`}
        />
      ))}
    </div>
  );
};

export default Services;
