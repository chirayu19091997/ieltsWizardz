import React from "react";

const B2BServices = () => {
  return (
    <div className="flex relative flex-col items-center space-y-8">
      <img
        src="/oooscillate.svg"
        className="absolute object-cover opacity-20 flex w-full overflow-hidden h-full"
      />
      <h1 className="text-4xl">For Businesses</h1>
      <div className="flex flex-col space-y-4 p-8">
        <p>
          We provide extensive services to test preparatory academies, overseas
          admission consultancies, and publishing houses in developing original
          and authentic full-length test-prep practice papers for various Indian
          and international language proficiency and standardized tests as per
          the latest pattern and syllabus. If required, companies can also seek
          its copyrights. We have had the proud privilege of working for some
          renowned players in this domain.
        </p>
        <p>
          We also extend our services to study abroad consultants in preparing
          drafts for college essays, admission essays, SOPs, Personal
          Statements, and LORs for their client students. We also offer 1-on-1
          online sessions with the student clients for gaining deeper insights
          into their profiles. All our esteemed clientele from India, USA,
          Canada, UK and Australia avail our services through the online mode
        </p>
      </div>
    </div>
  );
};

export default B2BServices;
