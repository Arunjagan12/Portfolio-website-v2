import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
      I'm a second-year computer science and engineering undergrad, and I'm all about that software development life.
      I love building online apps and taking on tough challenges, and I'm pretty darn good at it too.
      Python, C++, and Java are my homies, but I also hang out with HTML, CSS, JavaScript, React, and React Native. 
      I'm currently learning Vue.js.I am a fast learner and efficient worker, capable of developing effective, scalable, and user-friendly solutions to solve real-world problems.
      I have completed several coding projects, both individually and as a part of a team, and have experience in version control tools such as Git and GitHub.
      Additionally, I am constantly exploring new technologies and platforms to expand my skill set and stay up-to-date with the latest industry trends.
      But it's not all about coding. I've got mad communication and people skills too. I work great with others, and I always bring the positive vibes.
      I have a passion for technology and a desire to make a positive impact in the world through the use of technology.
       
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");