import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import FaqItem from "./FaqItem";
import Link from "next/link";
import Image from "next/image";
import curvy from "@/assets/curves/wavesOpacity.svg";
const Faq = () => {
  const onFAQClick = () => {};
  return (
    <section className="py-12 sm:py-16 lg:py-24 gradientss relative">
      {/* <Image
        src={curvy}
        className="absolute h-36 rotate-180 opacity-50 bottom-0 w-full"
        alt="curvy"
      />
      <Image
        src={curvy}
        className="absolute h-36  opacity-50 top-0 w-full"
        alt="curvy"
      /> */}
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <FaqItem
            title="How to create an account?"
            description={
              <p>
                Amet minim mollit non deserunt ullamco est sit
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline"
                >
                  aliqua dolor
                </a>
                do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            }
          />
          <FaqItem
            title="How can I make payment using Paypal?"
            description={
              <p>
                Amet minim mollit non deserunt ullamco est sit
                <a
                  href="#"
                  title=""
                  className="text-blue-600 transition-all duration-200 hover:underline"
                >
                  aliqua dolor
                </a>
                do amet sint. Velit officia consequat duis enim velit mollit.
              </p>
            }
          />
        </div>

        <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you are looking for?
          <Link
            href="/contact"
            className="ml-2 font-medium text-blue-600 transition-all cursor-pointer duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Contact our support
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Faq;
