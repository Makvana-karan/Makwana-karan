import React, { useEffect } from "react";
import "../App.css";
import ButtonLink from "./ButtonLink";
import { motion } from "framer-motion";
import { animatePageIn } from "../animation";
import css from "./svg/css.svg";
import html from "./svg/html.svg";
import javascript from "./svg/js.svg";
import react from "./svg/react.svg";
import nodejs from "./svg/nodejs.svg";
import mongodb from "./svg/mongodb.svg";
import nextjs from "./svg/next-js-svgrepo-com.svg";
import express from "./svg/icons8-express-js.svg";
import tailwindcss from "./svg/icons8-tailwind-css.svg";
import bootstrap from "./svg/icons8-bootstrap.svg";
import typescript from "./svg/icons8-typescript.svg";
import docker from "./svg/icons8-docker.svg";
import mysql from "./svg/mysql.svg";
import redux from "./svg/redux-svgrepo-com.svg";
import graphql from "./svg/graphql-svgrepo-com.svg";
import aws from "./svg/icons8-aws.svg";
import firebase from "./svg/firebase-svgrepo-com.svg";
import Footer from "./Footer";

const About = () => {
  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden"
        id="about"
      >
        <div className="flex flex-col justify-around">
          <div className="sm:px-16 px-2">
            <motion.h2
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-4xl sm:text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500"
            >
              Introduction
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 2 }}
              className="mt-3 mb-6 text-[19px] max-w-3xl leading-[30px]"
            >
              👨‍💻 Hi, I'm Makwana Karan, a 2024 graduate🎓 with a passion for
              crafting robust full-stack systems and captivating mobile
              applications. As a seasoned{" "}
              <a
                className="text-green-300 font-bold hover:text-green-500 duration-200 hover:border-b-2"
                href="https://www.linkedin.com/in/makvana-karan-169825263/"
                target="_blank"
                rel="noreferrer"
              >
                Software Developer,
              </a>{" "}
              I specialize in the{" "}
              <span className="text-2xl font-semibold text-green-500">
                MERN STACK.
              </span>
              🚀.
              <br />
              I'm also into photography📸. It's not just a hobby; I see it as a
              way to capture moments🌟📷, tell stories.
            </motion.p>

            <ButtonLink
              url="https://drive.google.com/file/d/1TnMSfjYRJJlu6SrakuXtvokBesA0Lbli/view?usp=drive_link"
              text="View Resume →"
              padding={`p-3`}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 1 }}
            stagger={{ delay: 1, duration: 1 }}
            className="mt-20 flex flex-wrap gap-7 justify-start relative flex-col sm:flex-wrap"
          >
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              stagger={{ delay: 2, duration: 1 }}
              className="flex absolute text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500 left-[65px]"
            >
              Skills
            </motion.h2>
            <div className="sm:w-[250px] w-full relative mt-16">
              <div
                className="container text-center rounded-[20px] py-5 px-12 mx-16 min-h-[280px] flex flex-row w-[340px] md:w-[750px] sm:w-[750px] "
                style={{ background: "#151030" }}
              >
                <div className="flex flex-col flex-wrap">
                  <div className="flex gap-6 flex-wrap justify-center">
                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={html} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={css} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={javascript} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={typescript} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={bootstrap} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={tailwindcss} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={react} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={redux} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={nextjs} alt="img" />
                    </li>
                  </div>

                  <div className="flex gap-6 mt-3 flex-wrap">
                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={nodejs} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={express} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={mongodb} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={mysql} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={firebase} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={docker} alt="img" />
                    </li>

                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={graphql} alt="img" />
                    </li>
                    <li className="list-none mt-2 transition ease-in-out duration-300 hover:scale-110 cursor-pointer hover:-translate-y-1">
                      <img src={aws} alt="img" />
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default About;
