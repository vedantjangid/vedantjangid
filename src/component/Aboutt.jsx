import { Link } from "react-router-dom";
import { vedant } from "../assets";
import { myTechStack } from "../data/db";
import ScrollAnimation from "./ScrollAnimation";

const Aboutt = () => {
  return (
    <section
      id="about"
      className="w-full min-h-[100vh] py-20  mx-auto bg-lightBeige overflow-y-visible flex justify-center items-center z-[5] sticky"
    >
      <div
        className={`flex flex-col justify-center w-full h-full gap-20 lg:gap-10 max-w-[1550px] lg:flex-row xl:px-6 xxl:px-0`}
      >
        <div className="w-full lg:w-[45%] flex flex-col justify-center items-center left-0 h-full lg:sticky top-20 relative">
          <ScrollAnimation>
            <div className="w-full h-full">
              <img
                src={vedant}
                className="w-full h-full object-cover"
                loading="lazy"
                alt="vedant jangid's picture"
              />
            </div>
          </ScrollAnimation>

          <div className="w-full mt-3 ">
            <ScrollAnimation>
              <h1 className="font-Source lg:text-2xl text-lg sm:text-xl tracking-tight whitespace-normal lg:text-left xl:text-3xl text-center hidden lg:flex">
                Vedant Jangid
              </h1>
            </ScrollAnimation>
          </div>
        </div>
        <div className="w-full h-full lg:w-[55%] flex justify-center items-center self-center">
          <div className="flex flex-col justify-center w-full max-w-[450px] xxl:max-w-[600px] xl:max-w-[530px] px-6 lg:px-0 md:max-w-[600px] xl:gap-4 ">
            <div className="xl:text-7xl xxl:text-8xl text-5xl ss:text-5xl sm:text-6xl font-semibold lg:sticky lg:top-20 lg:h-24 bg-lightBeige opacity-100">
              <ScrollAnimation>
                <h1 className="bg-lightBeige lg:h-24 z-50 mt-2">ABOUT ME</h1>
              </ScrollAnimation>
            </div>

            <div className="flex flex-col gap-6 justify-center items-center text-black xl:text-lg md:text-base  md:leading-6 xl:leading-7 font-light lg:mt-8 z-[-1] mt-4">
              <ScrollAnimation>
                <p className="w-full  whitespace-normal font-Source tracking-tight">
                  Hello, my name is Vedant Jangid, and I am based in Pune,
                  Maharashtra, India. I am a passionate and versatile Full Stack
                  Developer with expertise in React, React Native, Next.js,
                  HTML, CSS, JavaScript, Express, Node, and MongoDB. I enjoy
                  crafting web and mobile applications that provide intuitive
                  solutions to real-world problems.
                </p>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="w-full  whitespace-normal font-Source tracking-tight">
                  My journey into software development began with a strong
                  interest in technology and problem-solving. Over the past few
                  years, I have honed my skills through hands-on projects,
                  online courses, and continuous learning. My dedication to
                  mastering various programming languages and tools has allowed
                  me to excel in both frontend and backend development.
                </p>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="w-full  whitespace-normal font-Source tracking-tight">
                  One project that I'm particularly proud of is{" "}
                  <Link
                    to="https://urbangrove.vercel.app/"
                    target="_blank"
                    className="hover:underline cursor-pointer font-bold"
                  >
                    Urbangrove Ecommerce Store
                  </Link>
                  , an ecommerce platform designed to provide a seamless
                  shopping experience. Through this project, I've gained
                  valuable experience in frontend development using React and
                  backend management with MongoDB.
                </p>
              </ScrollAnimation>
              <ScrollAnimation>
                <p className="w-full whitespace-normal font-Source tracking-tight">
                  Looking ahead, I am committed to specializing in creating
                  scalable web applications that address real-world challenges.
                  I am eager to collaborate with talented professionals and
                  contribute to impactful projects that leverage technology to
                  improve people's lives.
                </p>
              </ScrollAnimation>

              <ScrollAnimation>
                <div className="w-full whitespace-normal font-Source tracking-tight font-medium">
                  Here are a few technologies I’ve been working with recently:
                  <ul className="grid xl:grid-cols-4 grid-cols-3 mt-4 gap-2 font-light">
                    {myTechStack.map((stack, index) => (
                      <li
                        key={index}
                        className="text-sm xl:text-base flex flex-row items-center"
                      >
                        <span className="w-1 h-1 bg-black rounded-full mr-2"></span>
                        {stack}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutt;
