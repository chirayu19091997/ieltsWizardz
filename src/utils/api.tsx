import queryString from "query-string";
import toast from "react-hot-toast";

export const sendContactForm = async (data: any) => {
  try {
    await fetch(
      `https://docs.google.com/forms/d/e/${
        process.env.NEXT_PUBLIC_LEAD_FORM_ID
      }/formResponse?${queryString.stringify(data)}`,
      {
        method: "POST",
      }
    );
    toast.success("Thank You! our team will get back to you shortly.");
  } catch (e) {
    toast.error("OOPS! Something Went Wrong Please Try again.");
  }
};

export const sendSubscriptionData = async (data: any) => {
  try {
    // await fetch("/api/subscription", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-type": "application/json",
    //     Accept: "application/json",
    //   },
    // });
    toast.success("Thank You for Subscription.");
  } catch (e) {
    toast.error("OOPS! Something Went Wrong Please Try again.");
  }
};
