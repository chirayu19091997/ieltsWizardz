"use client";
import Link from "next/link";
import React from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import * as contactAnimation from "../../assets/animations/contact.json";
import Lottie from "react-lottie";
import Input from "@/components/Input";
import TextAreaInput from "@/components/TextAreaInput";

const Contact = () => {
  return (
    <section className="p-6 max-md:p-4">
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
          <div className="flex flex-col items-center justify-between w-full h-full p-4 px-8 shadow-xl border rounded-lg">
            <p className="text-base font-semibold tracking-wider text-tertiaryColor uppercase my-4">
              Leave us a message
            </p>
            <div className="w-full space-y-4">
              <div className="flex w-full space-x-4">
                <div className="w-full">
                  <Input
                    placeholder="Martha"
                    label="Name"
                    onChange={() => {}}
                  />
                </div>
                <div className="w-full">
                  <Input
                    placeholder="+919999999999"
                    type="number"
                    label="Phone"
                    onChange={() => {}}
                  />
                </div>
              </div>
              <div className="w-full">
                <Input
                  placeholder="ieltswizardz@gmail.com"
                  type="email"
                  label="Email"
                  onChange={() => {}}
                />
              </div>
              <div className="w-full">
                <TextAreaInput
                  placeholder="Message"
                  label="Message"
                  onChange={() => {}}
                />
              </div>
            </div>
            <div className="flex flex-col items-center w-full space-y-4 py-4">
              <p className="text-base lg:mt-8 sm:text-xl">
                We will get back to you soon.
              </p>
              <Link
                href="/contact"
                title=""
                className="inline-flex items-center px-6 py-4 font-semibold  transition-all duration-200 bg-tertiaryColor text-secondaryTextColor rounded-full hover:bg-quadraColor focus:bg-quadraColor"
                role="button"
              >
                Submit
                <FiArrowRightCircle size={18} className="ml-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
