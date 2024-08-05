import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { animatePageIn } from "../animation";
import Footer from "./Footer";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "9dba0289-efa5-433b-aa80-4554f714138e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setLoading(false);
      toast.success("Message sent successfully!", {
        position: "bottom-right",
      });
    } else {
      console.log("Error", res);
      setLoading(false);
      toast.error("Uh, oh! Something went wrong. Please try again later.", {
        position: "bottom-right",
      });
    }
  };

  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div className="relative z-0 bg-black w-full h-full mt-10">
      <div
        className="text-white contact overflow-x-hidden overflow-y-hidden pt-12 mt-8 "
        id="contact"
      >
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl"
        >
          <motion.p className="font-light ">REACH OUT TO ME</motion.p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500">
            Contact.
          </h2>
          <form onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className=" font-medium mb-4">email</span>
              <input
                type="email"
                name="email"
                placeholder="Ex:abc@gmail.com"
                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="font-medium mb-4">Message</span>
              <textarea
                rows={7}
                name="message"
                placeholder="Do you have anything to say?"
                className="py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900"
                required
              />
            </label>

            <button
              type="submit"
              className="pt-4 px-8 py-4 rounded-xl outline-none w-fit font-bold shadow-md bg-gray-900"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
