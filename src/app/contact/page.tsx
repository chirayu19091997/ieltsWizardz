"use client";
import React, { useState } from "react";
import { FiArrowRightCircle } from "react-icons/fi";
import contactAnimation from "../../assets/animations/contact.json";
import Input from "@/components/Input";
import TextAreaInput from "@/components/TextAreaInput";
import { useSearchParams } from "next/navigation";
import Animator from "@/components/Animator";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: useSearchParams().get("message") || "",
  });

  return (
    <section className="p-6 max-md:p-4">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <Animator animationData={contactAnimation} />
          <div className="flex flex-col items-center justify-between w-full h-full p-8 space-y-4 shadow-xl border rounded-lg">
            <p className="flex text-base font-semibold tracking-wider text-primaryColor uppercase lg:my-4">
              Leave us a message
            </p>
            <div className="flex flex-col w-full h-full space-y-4">
              <div className="flex w-full space-x-4">
                <Input
                  placeholder="Martha"
                  label="Name"
                  value={data.name}
                  onChange={(i: any) => setData({ ...data, name: i })}
                  className="w-full h-full"
                />
                <Input
                  placeholder="+919999999999"
                  type="number"
                  label="Phone"
                  value={data.phone}
                  onChange={(i: any) => setData({ ...data, phone: i })}
                  className="w-full h-full"
                />
              </div>
              <div className="w-full">
                <Input
                  placeholder="ieltswizardz@gmail.com"
                  type="email"
                  label="Email"
                  value={data.email}
                  onChange={(i: any) => setData({ ...data, email: i })}
                  className="w-full"
                />
              </div>
              <TextAreaInput
                placeholder="Message"
                label="Message"
                value={data.message}
                onChange={(i: any) => setData({ ...data, message: i })}
                className="w-full h-full"
              />
            </div>
            <div className="flex flex-col items-center w-full space-y-4">
              <p className="text-base lg:mt-8 sm:text-xl">
                We will get back to you soon.
              </p>
              <button
                onClick={() => {}}
                className="inline-flex items-center px-6 py-4 font-semibold  transition-all duration-200 bg-primaryColor text-secondaryTextColor rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-primaryColor focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor"
              >
                Submit
                <FiArrowRightCircle size={18} className="ml-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
