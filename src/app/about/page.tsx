import React, { Suspense } from "react";
import * as aboutComputer from "../../assets/animations/aboutcomputer.json";
import * as aboutSquare from "../../assets/animations/aboutsquare.json";
import Loading from "../loading";
import Animator from "@/components/Animator";

const About = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col items-center space-y-8 p-8">
        <h1 className="text-4xl">About Us</h1>
        <div className="flex flex-col w-full h-full space-y-12">
          <div className="flex w-full h-full">
            <div className="flex flex-col items-center space-y-4 w-2/3">
              <p>
                Step into the world of IELTS WIzardz, where our expertise lies
                in comprehending prominent English language proficiency exams
                like IELTS, PTE, TOEFL, and more. Embark on a transformative
                journey that will make your dream of studying in your desired
                overseas university a reality. Regardless of whether you're a
                novice or someone seeking to improve their scores, we provide an
                extensive array of resources and support to aid you in attaining
                the target score on your chosen exam. Join us as we embark
                together on the path to success, and together, we shall
                accomplish your aspirations.
              </p>
              <h1 className="flex text-3xl text-primaryColor">Who we are</h1>
              <p>
                Discover IELTS Wizardz, an innovative virtual platform that
                serves as your starting point towards achieving exceptional
                results in the IELTS, PTE, TOEFL, and SAT tests. With a wide
                array of course structures to suit your preferences, our team of
                skilled mentors is wholeheartedly dedicated to helping you
                attain your desired scores. We provide unwavering support and a
                rich assortment of resources meticulously tailored to meet your
                specific requirements. Our overarching mission revolves around
                assisting you in reaching your dream destination.
              </p>
              <p>
                Embark on an enriching journey with our admission wizards, who
                will accompany you in exploring and handpicking the most
                suitable courses and universities that align seamlessly with
                your profile. Our unwavering commitment is to ensure you receive
                nothing less than the best. Join our vibrant community of
                ambitious learners today and take the crucial first step towards
                realizing your academic or professional aspirations.
              </p>
            </div>
            <div className="flex w-full h-full">
              <Animator animationData={aboutSquare} height="100%" width="80%" />
            </div>
          </div>
          <div className="flex w-full items-center justify-center h-full">
            <div className="flex w-full h-full">
              <Animator
                animationData={aboutComputer}
                height="100%"
                width="80%"
              />
            </div>
            <div className="flex flex-col space-y-4 items-center w-2/3">
              <h1 className="flex text-3xl text-primaryColor">More about us</h1>
              <p>
                Our team of language wizards comprises highly trained language
                experts who have curated a comprehensive range of study
                resources to assist you in conquering the upcoming test on your
                very first attempt. We understand the importance of your study
                abroad dream, and thus we offer a variety of tailored resources,
                helpful tips, and strategies that cater to your specific needs.
              </p>
              <p>
                Our support and resources aim to identify areas for improvement
                and enable you to track your progress over time. Throughout your
                language learning journey, we provide a diverse array of tools,
                including study guides, grammar and vocabulary exercises,
                speaking and writing practice materials, as well as valuable
                tips and strategies.
              </p>
              <p>
                With our customized support and resources, you will gain
                insights into your areas of development and monitor your growth
                as you continue on your language learning path.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default About;
