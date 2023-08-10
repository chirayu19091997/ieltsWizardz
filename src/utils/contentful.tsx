import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACEID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY || "",
});

export const fetchData = async (type: string) => {
  const res = await client.getEntries({ content_type: type });
  return res.items;
};
