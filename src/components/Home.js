import React from "react";
import { useState, useEffect, useRef } from "react";
import { name } from "../constants";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { skill } from "../constants";
import Footer from "./Footer";
import { animatePageIn } from "../animation";

const Home = () => {
  const ref = useRef(0);
  const [text, setText] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText(() => text + name[ref.current - 1]);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div className="area relative z-0 bg-black w-screen h-screen">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="hero relative h-[calc(100vh)] flex justify-center items-center text-white"
        id="hero"
      >
        <div className="pt-4 h-36 backdrop-blur-sm rounded-3xl">
          <h1 className="text-2xl font-extrabold mt-2 sm:text-7xl">
            Hi, I'm&nbsp;
            <span className="text-yellow-200 font-extrabold">{text}</span>
          </h1>
          <motion.h2
            initial={{ opacity: 0, x: "-100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 3 }}
            className="text-4xl sm:text-4xl font-extrabold mt-3  bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500"
          >
            <TypeAnimation
              sequence={[
                "A .NET Developer",
                1000,
                "A MERN Developer",
                1000,

                "A PHP Developer",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "1em" }}
              repeat={Infinity}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: "100vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 3 }}
            className="mt-3 text-xl"
          >
            I love to learn and build scalable and optimized systems.
          </motion.p>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Home;
