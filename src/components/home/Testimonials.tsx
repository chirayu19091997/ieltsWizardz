import React from "react";
import { fetchData } from "@/utils/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import HeadingText from "../HeadingText";

export const revalidate = 1;

const Testimonials = async () => {
  const reviewData: any = await fetchData("review");

  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <HeadingText text="Our happy students" />

          <div className="relative bg-gray-50 mt-10 md:mt-24 md:order-2">
            {/* <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div> */}

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-3">
              {reviewData.map((testimonial: any, tIndex: number) => (
                <div
                  className="flex flex-col overflow-hidden shadow-xl hover:scale-105 ease-in-out duration-500"
                  key={`testimonial-${tIndex}`}
                >
                  <div className="flex flex-col justify-between flex-1 p-6 bg-backgroundColor lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-center">
                        {Array(testimonial.fields.rating)
                          .fill(0)
                          .map((item: number, index: number) => (
                            <svg
                              key={`star-${index}`}
                              className="w-5 h-5 text-[#FDB241]"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                      </div>

                      <blockquote className="flex-1 mt-8">
                        <div className="text-lg leading-relaxed text-gray-900 font-pj">
                          {documentToReactComponents(
                            testimonial.fields.content
                          )}
                        </div>
                      </blockquote>
                    </div>

                    <div className="flex items-center mt-8">
                      <Image
                        className="flex-shrink-0 object-contain rounded-full w-11 h-11"
                        src={`https:${testimonial.fields.author.fields.avatar.fields.file.url}`}
                        alt=""
                        width={
                          testimonial.fields.author.fields.avatar.fields.file
                            .details.image.width
                        }
                        height={
                          testimonial.fields.author.fields.avatar.fields.file
                            .details.image.height
                        }
                      />
                      <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">
                          {testimonial.fields.author.fields.name}
                        </p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">
                          {testimonial.fields.author.fields.authorInfo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
