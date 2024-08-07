import dashboard from "../assets/dashboard .png";
import bookstore from "../assets/bookstore.png";
import ecomm from "../assets/e-comm .png";
import pinterest from "../assets/Pinterest .png";
import weather from "../assets/weather.png";
import student from "../assets/Student.png";
import mk from "../assets/mk.png";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { animateOut, animatePageIn } from "../animation";
import Footer from "./Footer";

const ProjectCard = ({ image, title, description, git, technologies }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100vw" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 1, easeIn: [0.52, 1, 0.36, 1] }}
      className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      {title === "Admin Dashboard" && (
        <a href="#">
          <img
            className="w-full rounded-t-lg h-auto object-cover "
            src={dashboard}
            alt=""
          />
        </a>
      )}
      {title === "E-commerce Website" && (
        <a href="#">
          <img
            className="w-full rounded-t-lg h-auto object-cover "
            src={mk}
            alt=""
          />
        </a>
      )}

      {title === "Book Store" && (
        <a href="#">
          <img
            className="w-full rounded-t-lg h-auto object-cover "
            src={bookstore}
            alt=""
          />
        </a>
      )}

      {title === "Pinterest" && (
        <a href="#">
          <img
            className="w-full rounded-t-lg h-auto object-cover "
            src={pinterest}
            alt=""
          />
        </a>
      )}

      {title === "MK-store" && (
        <a href="#">
          <img
            className="w-full rounded-t-lg h-auto object-cover "
            src={ecomm}
            alt=""
          />
        </a>
      )}

      {title === "Attendance_System" && (
        <a href="#">
          <img
            className="w-full rounded-t-lg h-auto object-cover "
            src={student}
            alt=""
          />
        </a>
      )}

      <div className="p-4 sm:p-6">
        <a href="#">
          <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
            {title}
          </h5>
        </a>
        <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="m-2 sm:m-4 lg:m-6 flex justify-between">
        <div className="flex flex-wrap gap-2 pl-2">
          {technologies.map((tag, index) => (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              key={`${index}-${tag}`}
              className="text-[14px] text-blue-500"
            >
              #{tag}
            </motion.p>
          ))}
        </div>
        <motion.a
          href={git}
          className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300"
        >
          GitHub
        </motion.a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  useEffect(() => {
    animateOut();
    animatePageIn();
  }, []);
  return (
    <div className="bg-black w-full">
      <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
        {project.map((item, index) => (
          <ProjectCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            links={item.links}
            git={item.git}
            technologies={item.technologies}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export const project = [
  {
    title: "E-commerce Website",
    description:
      "Develop a robust and scalable e-commerce website using the MERN (MongoDB, Express.js, React, Node.js) stack, providing a seamless shopping experience with efficient product management, secure user authentication, and smooth payment processing..",
    image: { mk },
    git: "https://github.com/Makvana-karan/MK-STORE",
    technologies: [
      "MongoDb",
      "NextJS",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
      "StyledComponent",
    ],
  },
  {
    title: "Admin Dashboard",
    description:
      "Develop a powerful and intuitive admin dashboard for managing an e-commerce platform using the MERN (MongoDB, Express.js, React, Node.js) stack, with Next.js for server-side rendering and enhanced performance..",
    image: { dashboard },
    git: "https://github.com/Makvana-karan/E-commerce-Dashboard",
    technologies: ["React JS", "tailwind CSS", "Next JS"],
  },
  {
    title: "Book Store",
    description:
      "Develop an interactive and user-friendly online bookstore using the MERN (MongoDB, Express.js, React, Node.js) stack, providing a seamless platform for browsing, purchasing, and managing a wide range of books.",
    image: { bookstore },
    git: "https://github.com/Makvana-karan/Magic-Store",
    technologies: ["MongoDb", "ReactJS", "NodeJS", "ExpressJS", "Tailwind"],
  },
  {
    title: "Pinterest",
    description:
      "Develop a visually appealing and interactive Pinterest-like application using the MERN (MongoDB, Express.js, React, Node.js) stack, with Firebase for authentication and real-time database functionalities. The platform will allow users to discover, save, and share creative ideas and inspirations..",
    image: { pinterest },
    git: "https://github.com/Makvana-karan/pinterest_clone",
    technologies: ["React JS", "tailwind CSS", "Next JS", "Firebase"],
  },
  {
    title: "MK-store",
    description:
      "Develop a visually appealing and responsive weather application using React and Tailwind CSS, with real-time weather data fetched from a weather API. The application will provide users with current weather conditions, forecasts, and other relevant weather information for their chosen locations..",
    image: { ecomm },
    git: "https://github.com/Makvana-karan/MK-Ecommerce",
    technologies: ["MongoDb", "ReactJS", "NodeJS", "ExpressJS", "Tailwind"],
  },
  {
    title: "Attendance_System",
    description:
      "Develop a robust and user-friendly attendance management system using PHP Laravel. The system will allow administrators to manage attendance records efficiently, and users to check their attendance status in real-time..",
    image: { student },
    git: "https://github.com/Makvana-karan/Student_Attendance_System",
    technologies: ["PHP", "Laravel", "Bootstrap", "Mysql"],
  },
];

export default Projects;
