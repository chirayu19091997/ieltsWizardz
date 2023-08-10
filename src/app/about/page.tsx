import React, { Suspense } from "react";
import aboutComputer from "../../assets/animations/aboutcomputer.json";
import aboutSquare from "../../assets/animations/aboutsquare.json";
import Loading from "../loading";
import Animator from "@/components/Animator";

const About = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col items-center space-y-8 p-8">
        <div className="flex flex-col w-full h-full space-y-12">
          <div className="flex flex-col space-y-4 items-center justify-center w-full">
            <h1 className="flex text-3xl text-primaryColor">Who we are</h1>
            <p>
              IELTS Wizardz, your one stop destination for all your study abroad
              needs, your virtual friend that supports and guides you on three
              major aspects of studying abroad and brings you closer towards
              realising your dreams. We are a team of highly qualified English
              language experts with a passion for teaching, reading, writing and
              counselling students to choose the best career path. We are
              committed to not only providing the best of our services but also
              to be affordable so as to cater to as many study abroad aspirants
              as possible in their endeavour to achieve their dreams.
            </p>
            <h1 className="flex text-3xl text-primaryColor">What we do</h1>
            <p>
              IELTS Wizardz starts with the first step of providing expert
              training on various international tests like the IELTS, PTE, TOEFL
              iBT and the Digital SAT with a variety of course structures to
              choose from. Our highly qualified and experienced test-prep
              wizards are committed to helping students achieve their desired
              scores by providing training, guidance and support through a wide
              range of resources tailored to their specific needs. Our mission
              is to assist as many students as possible to help them take a step
              closer to their goal. The test capsules developed by our founder
              for each module/skill helps candidates achieve their target scores
              with ease.
            </p>
            <p>
              Our writing wizards are an amalgamation of analytical minds and
              creative skills. They build up strong and compelling narratives
              for your college applications. Storytelling is an art, and so is
              creating personalised essays. They dig into the students&apos;
              profiles, extract the right information and weave them into strong
              stories that best suit the needs of the universities. Our
              expertise and experience greatly lies in guiding students on Ivy
              League application essays for both, bachelors and masters
              programmes.
            </p>
            <p>
              As overseas admission wizards, we take each student on a journey
              of exploring and selecting various courses and universities that
              best fits their profile and ensure they get into their dream
              university. With over 700 universities in our bucket and 20000+
              courses to choose from, our counselling wizards are certified
              country counsellors and have exceptional expertise in guiding
              students on course and country selections, admission processes,
              scholarships, visa processing etc to all major destinations
              globally. We hand-hold them till they spread their wings and fly.
            </p>
          </div>
          <div className="flex flex-col space-y-4 items-center justify-center w-full">
            <h1 className="flex text-3xl text-primaryColor">For Businesses</h1>
            <p>
              We provide extensive services to test preparatory academies,
              overseas admission consultancies, and publishing houses in
              developing original and authentic test-prep practice and
              full-length tests papers for various Indian and international
              language proficiency and scholastic tests as per the latest
              pattern and syllabus. If required, companies can also seek its
              copyrights. We have had the proud privilege of working for some
              renowned players in this domain.
            </p>
            <p>
              We also extend our services to study abroad consultants in
              preparing drafts for college essays, admission essays, SOPs,
              Personal Statements, and LORs for their client students. If
              required, we also offer 1-on-1 online sessions with the student
              clients for gaining deeper insights into their profiles. All our
              esteemed clientele from India, USA, Canada, UK and Australia avail
              our services through the online mode.
            </p>
            <h1 className="flex text-3xl text-primaryColor">
              About Our Founder
            </h1>
            <p>
              Amita Garg, a Trinity London certified international English
              Language trainer, a university gold-medalist, a British Council
              trained IELTS Coach, an ETS certified TOEFL trainer, a university
              teacher, a published writer, and a study abroad counsellor, has no
              dearth of expertise and knowledge to share it with her students
              and clients alike. With 25+ years of experience in the field of
              English language teaching, international test-prep materials
              development, academic writing, educational counselling and
              international student recruitment, she has gained deeper insights
              into the processes and sharpened her axe further to be able to
              give it back to the society for its betterment.
            </p>
            <p>
              IELTS Wizardz has been her dream project. As the chief wizard, she
              personally mentors each student and guides them for training and
              admissions. Under her able guidance and mentorship, many aspiring
              candidates have successfully culminated their pursuit of studying
              abroad. As the founder, she ensures that every student/client gets
              the best experience of her services in a hassle-free and
              uncomplicated manner and that they are able to realise their
              dreams.
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default About;
