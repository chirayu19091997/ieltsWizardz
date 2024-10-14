import Link from "next/link";
import React from "react";
import { IconCircleArrowRight } from "@tabler/icons-react";
import Animator from "../Animator";
import TextHover from "../TextHover";

const Hero = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-start grid-cols-1 lg:gap-12 max-md:gap-6 lg:grid-cols-2">
          <div className="py-8">
            <p className="text-base font-semibold tracking-wider text-primaryColor uppercase">
              Your partner in international trade
            </p>
            <h1 className="mt-4 text-2xl font-bold  lg:mt-8 sm:text-4xl xl:text-6xl">
              Global Connections, Local Expertise
            </h1>
            <p className="mt-4 text-base  lg:mt-8 sm:text-xl">
              With our expertise in international trade, we can help you
              navigate the complex world of international trade.
            </p>

            <Link
              href="/contact"
              className="inline-flex text-secondaryTextColor items-center px-6 py-4 mt-8 font-semibold  transition-all duration-200 bg-primaryColor rounded-full lg:mt-16 hover:ring-2 hover:ring-offset-2 hover:ring-primaryColor focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor"
              role="button"
            >
              Schedule a Consultation
              <IconCircleArrowRight size={18} className="ml-8" />
            </Link>
            {/* <p className="flex max-md:flex-col mt-5 space-x-2 text-gray-600">
              <span>Don&apos;t know what to choose?</span>
              <Link href="/contact">
                <TextHover text="Get Free 1 on 1 Consultation" />
              </Link>
            </p> */}
          </div>

          <Animator
            animationData={
              "https://lottie.host/63497833-2960-4906-b8d1-a18da26164c9/xvzoKvqCWj.lottie"
            }
            customOptions={{ className: "w-[120%] h-full" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
