import Link from "next/link";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:pb-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              A social media for learners
            </p>
            <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">
              Connect & learn from the experts
            </h1>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              Grow your career fast with right mentor.
            </p>

            <Link
              href="/contact"
              title=""
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
              role="button"
            >
              Book a Demo
              <FiArrowRightCircle size={18} className="ml-8" />
            </Link>
          </div>

          <div>
            <img
              className="w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
