"use client";
import React, { useEffect, useState } from "react";
import { getAndRefreshToken, googleSignIn } from "@/utils/firebase";
import Link from "next/link";

const AdminSection = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    getAndRefreshToken().then((res) => {
      return setToken(res || "");
    });
  }, []);

  const loginHandler = () => {
    googleSignIn();
    getAndRefreshToken().then((res) => {
      return setToken(res || "");
    });
  };

  return (
    <div>
      {token === "" ? (
        <button className="p-4 border-2 rounded" onClick={() => loginHandler()}>
          SignIn to Continue
        </button>
      ) : (
        <div>
          <Link href={"/admin/managereview"} className="p-4 border-2 rounded">
            Manage Review
          </Link>
          <Link href={"/admin/publishblog"} className="p-4 border-2 rounded">
            Publish Blog
          </Link>
        </div>
      )}
    </div>
  );
};

export default AdminSection;
