import React from "react";
import Animator from "@/components/Animator";
import "./aboutStyles.css";

const About = () => {
  return (
    <div className="flex flex-col items-center px-12 w-full h-full space-y-8">
      <div className="flex max-md:flex-col items-center justify-center w-full lg:space-x-24 max-md:space-y-8">
        <div className="flex flex-col w-full space-y-4">
          <h1 className="flex text-3xl text-primaryColor">Who we are</h1>
          <p>
            IELTS Wizardz is your one stop destination for all your study abroad
            needs, your virtual friend that supports and guides you in your
            endeavour to study abroad.
          </p>
          <p>
            We are a team of highly qualified English language experts with a
            passion for teaching, reading, writing and counselling students for
            overseas admissions. We are committed to not only providing the best
            of our services but also to be affordable so as to cater to as many
            study abroad aspirants as possible in their pursuit of achieving
            their dreams
          </p>
        </div>
        <div className="flex w-full">
          {/* <Animator animationData={aboutUsWhoWeAre} /> */}
        </div>
      </div>
      <div className="flex max-md:flex-col items-center w-full lg:space-x-24 max-md:space-y-8">
        <div className="flex w-full">
          {/* <Animator animationData={aboutUsWhatWeDo} /> */}
        </div>
        <div className="flex flex-col w-full space-y-4">
          <h1 className="flex text-3xl text-primaryColor">What we do</h1>
          <p>
            IELTS Wizardz starts with the first step of providing expert
            training on various international tests like the IELTS, PTE, TOEFL
            iBT and the Digital SAT with a variety of course structures to
            choose from. Our highly qualified and experienced test-prep wizards
            are committed to helping students achieve their desired scores by
            providing training, guidance and support through a wide range of
            resources tailored to their specific needs.
          </p>
          <p>
            Our writing wizards are an amalgamation of analytical minds and
            creative language skills. They build up strong and compelling
            narratives for your college applications. Storytelling is an art,
            and so is creating personalised essays. They dig into the students
            profiles, extract the right information and weave them into strong
            stories that best suit the needs of the universities. Our expertise
            and experience greatly lies in guiding students on Ivy League
            admission essays.
          </p>
          <p>
            As overseas admissions wizards, we take each student on a journey of
            exploring and selecting various courses and universities that best
            fits their profile and ensure they get into their dream university.
            With over 700 universities in our bucket and 20000+ courses to
            choose from, our counselling wizards are certified country
            counsellors and have exceptional expertise in guiding students on
            course and country selections, admission processes, scholarships,
            visa processing etc to all major destinations globally. We hand-hold
            them till they spread their wings and fly.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col space-y-4 items-center justify-center">
        <h1 className="text-3xl text-primaryColor">For Partners</h1>
        <p>
          We develop test-preparation practice papers for companies and
          businesses in book publishing and the edtech domains. We also provide
          admissions essays drafting services to Overseas admission
          consultancies for their student clients.
        </p>
      </div>
      <div className="flex max-md:flex-col items-center w-full lg:space-x-24 max-md:space-y-8">
        <div className="flex w-full flex-col space-y-4">
          <h1 className="text-3xl text-primaryColor">About Our Founder</h1>
          <p>
            Amita Garg, a Trinity London certified international English
            Language trainer, a university gold-medalist, a British Council
            trained IELTS Coach, an ETS certified TOEFL trainer, a university
            teacher, a published writer, and a study abroad counsellor, has no
            dearth of expertise and knowledge to share it with her students and
            clients alike. With 25+ years of experience in the field of English
            language teaching, international test-prep materials development,
            academic writing, educational counselling and international student
            recruitment, she has gained deeper insights into the processes and
            sharpened her axe further to be able to give it back to the society.
          </p>
          <p>
            IELTS Wizardz has been her dream project. As the chief wizard, she
            personally mentors each student and guides them for training and
            admissions. Under her able guidance and mentorship, many aspiring
            candidates have successfully culminated their pursuit of studying
            abroad. As the founder, she ensures that every student/client gets
            the best experience of her services in a hassle-free and
            uncomplicated manner and that they are able to realise their dreams.
          </p>
        </div>
        <div className="flex w-full">
          {/* <Animator animationData={aboutUsFounderAnimation} /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
