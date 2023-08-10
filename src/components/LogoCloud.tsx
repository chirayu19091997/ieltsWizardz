import React from "react";

const LogoCloud = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-backgroundColor">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="xl:flex xl:items-center xl:justify-between">
          <h2 className="text-xl font-bold text-center text-gray-500 xl:text-left font-pj">
            {/* 1000+ Big brands trust us */}
            Partnersips and Certifications
          </h2>

          <div className="grid items-center grid-cols-1 mt-10 gap-y-6 xl:mt-0 sm:grid-cols-2 sm:gap-y-8 lg:grid-cols-4 lg:gap-x-8">
            <img
              className="object-contain w-auto mx-auto h-9"
              src="/bc.png"
              alt=""
            />
            <img
              className="object-contain w-auto mx-auto h-9"
              src="/tesol.png"
              alt=""
            />
            <img
              className="object-contain w-auto mx-auto h-9"
              src="/idp.svg"
              alt=""
            />
            <img
              className="object-contain w-auto mx-auto h-9"
              src="/ets.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
