"use client";
import React, { useState } from "react";
import { IconCircleArrowRight } from "@tabler/icons-react";
import contactAnimation from "../../assets/animations/contact.json";
import Input from "@/components/Input";
import TextAreaInput from "@/components/TextAreaInput";
import { useSearchParams } from "next/navigation";
import Animator from "@/components/Animator";
import { sendContactForm } from "@/utils/api";
import { emailRegex } from "@/utils/constants";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import "./styles/styles.css";

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
              <div className="flex max-md:flex-col w-full max-md:space-y-4 lg:space-x-4">
                <Input
                  label="Name"
                  otherProps={{ minLength: 3 }}
                  value={data.name}
                  onChange={(i: any) => setData({ ...data, name: i })}
                />
                <div className="w-full">
                  <PhoneInput
                    country={"in"}
                    value={data.phone}
                    onChange={(phone) => {
                      setData({ ...data, phone });
                    }}
                    containerClass="h-[85%]"
                    inputClass="h-full"
                    dropdownClass="noScroll"
                  />
                </div>
              </div>
              <div className="w-full">
                <Input
                  type="email"
                  label="Email"
                  value={data.email}
                  onChange={(i: any) => setData({ ...data, email: i })}
                />
              </div>
              <TextAreaInput
                label="Message"
                value={data.message}
                onChange={(i: any) => setData({ ...data, message: i })}
              />
            </div>
            <div className="flex flex-col items-center w-full space-y-4">
              <p className="text-base lg:mt-8 sm:text-xl">
                We will get back to you soon.
              </p>
              <button
                disabled={
                  !(
                    data.name.length > 3 &&
                    data.email.length > 1 &&
                    !!data.email.match(emailRegex) &&
                    data.phone.length > 4
                  )
                }
                onClick={() => sendContactForm(data)}
                className="disabled:opacity-30 inline-flex items-center px-6 py-4 font-semibold  transition-all duration-200 bg-primaryColor text-secondaryTextColor rounded-full hover:ring-2 hover:ring-offset-2 hover:ring-primaryColor focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor"
              >
                Submit
                <IconCircleArrowRight size={18} className="ml-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
