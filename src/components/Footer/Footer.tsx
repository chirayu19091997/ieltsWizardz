import {
  DirectContacts,
  HeaderOptions,
  Logo,
  Socials,
} from "@/utils/constants";
import Link from "next/link";
import React from "react";
import SubscriptionForm from "./SubscriptionForm";

const Footer = () => {
  return (
    <section className="py-10 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            {Logo}

            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              {DirectContacts.map((item) => (
                <li key={`direct-${item.title}`}>
                  <Link
                    href={item.route}
                    target="_blank"
                    title={item.title}
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-primaryColor focus:bg-primaryColor"
                  >
                    {item.logo}
                  </Link>
                </li>
              ))}
              {Socials.map((item) => (
                <li key={`socials-${item.title}`}>
                  <Link
                    href={item.route}
                    target="_blank"
                    title={item.title}
                    className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-primaryColor focus:bg-primaryColor"
                  >
                    {item.logo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              {HeaderOptions.slice(0, 3).map((item) => (
                <li key={`Fnavigation-${item.title}`}>
                  <Link
                    href={item.route}
                    title=""
                    className="flex text-base  transition-all duration-200 hover:text-primaryColor focus:text-primaryColor"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              {HeaderOptions.slice(3).map((item) => (
                <li key={`Fnavigation-${item.title}`}>
                  <Link
                    href={item.route}
                    title=""
                    className="flex text-base  transition-all duration-200 hover:text-primaryColor focus:text-primaryColor"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
              Subscribe
            </p>
            <SubscriptionForm />
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <p className="text-sm text-center text-gray-600">
          © Copyright {new Date().getFullYear()}, All Rights Reserved by IELTS
          Wizardz
        </p>
      </div>
    </section>
  );
};

export default Footer;
