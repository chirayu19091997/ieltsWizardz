"use client";
import React, { useState } from "react";
import { IconMessage2Up, IconMessage2X, IconSend } from "@tabler/icons-react";
import Message from "./Message";
import { sendContactForm } from "@/utils/api";

const Chatbot = () => {
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [enableInput, setEnableInput] = useState(true);
  const [message, setMessage] = useState("");
  const [astep, setAstep] = useState(1);
  const [chat, setChat] = useState([
    {
      message:
        "Hi! In order to assist you better, please let me know what you are looking for?",
      options: ["IELTS", "TOEFL", "SAT", "PTE", "OTHER"],
      from: "system",
    },
  ]);
  const [userDataExtracted, setUserDataExtracted] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });
  const steps = [
    { message: "", field: "course" },
    { message: "Great! Let's get started with your name.", field: "name" },
    {
      message: `Thanks! Now please let me know your email. We won't spam you.`,
      field: "email",
    },
    {
      message:
        "Noted! Share your contact number so that we can reach out to you at the earliest. We won't spam you at all.",
      field: "phone",
    },
  ];

  const sendMessage = () => {
    if (message) {
      if (astep >= steps.length) {
        const payload = {
          message,
          options: [],
          from: "user",
        };
        const systemMessage = {
          message: "Our team will reach out to you soon!",
          options: [],
          from: "system",
        };

        setChat([...chat, payload, systemMessage]);
        sendContactForm({
          name: userDataExtracted.name,
          email: userDataExtracted.email,
          phone: userDataExtracted.phone,
          message: userDataExtracted.course,
        });
        setEnableInput(!enableInput);
        setTimeout(() => setIsChatExpanded(!isChatExpanded), 5000);
        return;
      }
      const payload = {
        message,
        options: [],
        from: "user",
      };
      setAstep(astep + 1);
      const systemMessage = {
        message: steps[astep].message,
        options: [],
        from: "system",
      };
      setUserDataExtracted({
        ...userDataExtracted,
        [steps[astep].field]: message,
      });
      setChat([...chat, payload, systemMessage]);
      setMessage("");
    }
  };

  //   const selectOption = (option: string) => {
  //     if (astep <= 1) {
  //       const payload = {
  //         message: option,
  //         options: [],
  //         from: "user",
  //       };
  //       setAstep(astep + 1);
  //       const systemMessage = {
  //         message: steps[astep].message,
  //         options: [],
  //         from: "system",
  //       };
  //       setChat([...chat, payload, systemMessage]);
  //       setEnableInput(!enableInput);
  //       setUserDataExtracted({
  //         ...userDataExtracted,
  //         [steps[astep].field]: option,
  //       });
  //     }
  //   };

  return (
    <>
      {isChatExpanded && (
        <div className="fixed flex flex-col justify-between p-2 overflow-y-auto noScroll z-[200] h-[60vh] max-h-[60vh] w-[30vw] max-md:w-[80vw] bottom-20 right-10 rounded-xl bg-secondaryColor">
          {chat.map((item, index) => (
            <Message chatData={item} key={`message-${index}`} />
          ))}
          {enableInput && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMessage();
              }}
              className="flex mt-2 items-center border rounded-lg p-6 pr-2 space-x-4 w-full h-[10%] bg-backgroundColor"
            >
              <input
                type="text"
                maxLength={30}
                placeholder="Please Type your answer Here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="h-8 w-full border-none bg-transparent placeholder-gray-300 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <button
                type="submit"
                className="bg-gray-200 rounded-full h-8 w-8 text-center flex items-center justify-center p-2"
              >
                <IconSend size={24} color="black" />
              </button>
            </form>
          )}
        </div>
      )}

      <button
        className="flex fixed bottom-5 text-white right-10 items-center justify-center w-14 h-14 rounded-xl p-4 bg-secondaryColor"
        onClick={() => setIsChatExpanded(!isChatExpanded)}
      >
        {!isChatExpanded ? (
          <IconMessage2Up size={32} />
        ) : (
          <IconMessage2X size={32} />
        )}
      </button>
    </>
  );
};

export default Chatbot;
