export const sendContactForm = async (data: any) => {
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });
};

export const sendSubscriptionData = async (data: any) => {
  fetch("/api/subscription", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });
};
