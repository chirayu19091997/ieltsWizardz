"use client";
import Link from "next/link";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import * as contactAnimation from "../../assets/animations/contact.json";
import Lottie from "react-lottie";
import Input from "@/components/Input";

const Contact = () => {
  return (
    <section className="bg-[#FCF8F1] bg-opacity-30 py-2 sm:py-2 lg:pb-2">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: contactAnimation,
              }}
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
              Leave us a message
            </p>
            <div>
              <Input />
            </div>
            <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
              We will get back to you soon.
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
