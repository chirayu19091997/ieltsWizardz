import React from "react";

const Message = ({ chatData }: any) => {
  return chatData.from === "system" ? (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 bg-white rounded-full">
          <img src="/logo.png" />
        </div>
      </div>
      {/* <div className="chat-header">
        IELTS Wizardz
        <time className="text-xs opacity-50">12:45</time>
      </div> */}
      <div className="chat-bubble">{chatData.message}</div>
    </div>
  ) : (
    <div className="chat chat-end">
      <div className="chat-bubble">{chatData.message}</div>
    </div>
  );
};

export default Message;
