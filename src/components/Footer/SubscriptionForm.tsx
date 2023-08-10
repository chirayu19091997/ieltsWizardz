"use client";
import { sendSubscriptionData } from "@/utils/api";
import React, { useState } from "react";

const SubscriptionForm = () => {
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendSubscriptionData({ email });
        setEmail("");
      }}
      className="mt-6"
    >
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-4  placeholder-gray-500 transition-all duration-200 bg-backgroundColor border border-gray-200 rounded-md focus:outline-none focus:border-secondaryColor caret-secondaryColor"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-primaryColor rounded-md"
      >
        Subscribe
      </button>
    </form>
  );
};

export default SubscriptionForm;
