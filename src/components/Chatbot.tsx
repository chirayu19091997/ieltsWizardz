"use client";
import React, { useState } from "react";
import { TbMessage2Up, TbMessage2X } from "react-icons/tb";
import { AiOutlineSend } from "react-icons/ai";

const Chatbot = () => {
  const [isChatExpanded, setIsChatExpanded] = useState(false);
  const [enableInput, setEnableInput] = useState(false);
  const [message, setMessage] = useState("");
  const [astep, setAstep] = useState(1);
  const [chat, setChat] = useState([
    {
      message:
        "Hi!,I am martha your personal assistant. In order to assist you better. What are you looking for?",
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
    { message: "Sure! Lets get started with your name", field: "name" },
    {
      message: `Hey there! now please let me know your email we won't spam you`,
      field: "email",
    },
    {
      message:
        "Noted! now please let me know your phone number we won't spam you",
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
          message: "Our team will reach out to you soon !",
          options: [],
          from: "system",
        };

        setChat([...chat, payload, systemMessage]);
        setEnableInput(!enableInput);
        setTimeout(() => setIsChatExpanded(!isChatExpanded), 2000);
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

  const selectOption = (option: string) => {
    if (astep <= 1) {
      const payload = {
        message: option,
        options: [],
        from: "user",
      };
      setAstep(astep + 1);
      const systemMessage = {
        message: steps[astep].message,
        options: [],
        from: "system",
      };
      setChat([...chat, payload, systemMessage]);
      setEnableInput(!enableInput);
      setUserDataExtracted({
        ...userDataExtracted,
        [steps[astep].field]: option,
      });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col space-y-2 lg:max-w-[40vw] max-w-[80vw] max-h-[80vh] items-end justify-end">
      {isChatExpanded && (
        <div className="flex flex-col p-2 justify-between h-[80vh] w-full rounded-xl bg-red-500">
          <div className="flex w-full h-[10%] p-2 rounded-xl bg-white">
            <img
              className="flex-shrink-0 object-cover rounded-full w-7 h-7 mr-2"
              src="/martha.png"
              alt=""
            />
            Martha
          </div>
          <div className="flex flex-col justify-end my-2 space-y-4 w-full h-[90%] max-h-[80%] overflow-y-auto noScroll">
            {chat.map((item, index) => {
              return (
                <div
                  key={`${item.from}-${index}`}
                  className="flex flex-col"
                  style={{
                    alignSelf:
                      item.from === "system" ? "flex-start" : "flex-end",
                  }}
                >
                  <div className="flex items-center mx-2 my-2 max-w-[80%] bg-blue-200 p-2 rounded-full">
                    {item.from === "system" && (
                      <img
                        className="flex-shrink-0 object-cover rounded-full w-7 h-7 mr-2"
                        src="/martha.png"
                        alt=""
                      />
                    )}
                    <p>{item.message}</p>
                  </div>
                  <div className="flex max-w-[80%] flex-wrap ml-6">
                    {item.options?.map((subItem, subIndex) => {
                      return (
                        <p
                          key={`${subItem}-${subIndex}`}
                          className="bg-blue-200 p-2 rounded-full m-1 cursor-pointer"
                          onClick={() => {
                            selectOption(subItem);
                          }}
                        >
                          {subItem}
                        </p>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          {enableInput && (
            <div className="flex items-center rounded-lg p-2 space-x-4 w-full h-[10%] bg-white">
              <input
                type="text"
                maxLength={30}
                placeholder="Please Type your answer Here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
              />
              <button
                className="border-l border-black p-2"
                onClick={sendMessage}
              >
                <AiOutlineSend />
              </button>
            </div>
          )}
        </div>
      )}
      <button
        className="flex items-center justify-center w-14 h-14 rounded-xl p-4 bg-yellow-300"
        onClick={() => setIsChatExpanded(!isChatExpanded)}
      >
        {!isChatExpanded ? (
          <TbMessage2Up size={32} />
        ) : (
          <TbMessage2X size={32} />
        )}
      </button>
    </div>
  );
};

export default Chatbot;
