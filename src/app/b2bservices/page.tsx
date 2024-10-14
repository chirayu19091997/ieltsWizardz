import Animator from "@/components/Animator";
import React from "react";
// import forBusinessAnimation from "@/assets/animations/fb.json";
import "./b2bStyles.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Global Vista Exports",
    default: "Global Vista Exports",
  },
  keywords: [
    "overseas admission consultancies",
    "publishing houses",
    "international language proficiency and standardized tests",
    "test-prep",
    "study abroad",
    "study abroad consultants",
    "college essays",
    "admission essays",
    "SOPs",
    "Personal Statements",
    "LORs",
  ],
};

const B2BServices = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-12">
      <div className="flex max-md:flex-col items-center justify-center w-full lg:space-x-24 max-md:space-y-8">
        <div className="flex w-full">
          {/* <Animator animationData={forBusinessAnimation} /> */}
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl text-primaryColor">For Partners</h1>
          <div className="flex flex-col space-y-4">
            <p>
              We provide extensive services to test preparatory academies,
              overseas admission consultancies, and publishing houses in
              developing original and authentic full-length test-prep practice
              papers for various Indian and international language proficiency
              and standardized tests as per the latest pattern and syllabus. If
              required, companies can also seek its copyrights. We have had the
              proud privilege of working for some renowned players in this
              domain.
            </p>
            <p>
              We also extend our services to study abroad consultants in
              preparing drafts for college essays, admission essays, SOPs,
              Personal Statements, and LORs for their client students. We also
              offer 1-on-1 online sessions with the student clients for gaining
              deeper insights into their profiles. All our esteemed clientele
              from India, USA, Canada, UK and Australia avail our services
              through the online mode
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2BServices;
