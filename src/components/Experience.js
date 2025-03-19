import React, { useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '../constants';
import { animatePageIn } from '../animation';
import { motion } from 'framer-motion';
import Footer from './Footer';

const Experience = () => {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div className="h-64">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="experience bg-black text-white pt-16 mt-3  h-[80%]"
        style={{ height: '100%' }}
        id="experience"
      >
        <div className="pt-12 sm:px-16" style={{ height: '100%' }}>
          <p className="font-light">MY JOURNEY SO FAR.</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500">
            Work Experience.
          </h2>
        </div>
        <VerticalTimeline className="mt-9">
          {experiences.map((experience) => (
            <VerticalTimelineElement
              className="relative vertical-timeline-element--work"
              contentStyle={{ background: '#1d1836', color: '#fff' }}
              scale={{ delay: 3, duration: 5 }}
              contentArrowStyle={{ borderRight: '7px solid  #232631' }}
              date={experience.duration}
              iconStyle={{ background: '#fff' }}
              icon={
                <motion.a
                  className="flex justify-center items-center w-full h-full"
                  href={experience.url}
                  target="_blank"
                >
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className="w-[60%] h-[60%] object-contain"
                  />
                </motion.a>
              }
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">{experience.role}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
                  {experience.company}
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                  <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        <Footer />
      </motion.div>
    </div>
  );
};

export default Experience;
