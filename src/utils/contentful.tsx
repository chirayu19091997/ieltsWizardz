import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACEID || "",
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY || "",
});

export const fetchData = async (
  type: string,
  otherParams?: object,
  module?: string
) => {
  const res = await client.getEntries({ content_type: type, ...otherParams });
  if (module === "blog") {
    return res.items[0];
  }
  return res.items;
};

export const getTags = async () => {
  const tags = await client.getTags();
  return tags.items;
};
