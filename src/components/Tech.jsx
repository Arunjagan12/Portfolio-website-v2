import React from "react";

import { BallCanvas1 } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
const Tech = () => {
  const icons = Object.values(technologies).map((technology) => technology.icon);
  return (
    <>
    <motion.div variants={textVariant()}>
    <h2 className={styles.sectionHeadText}>Skills.</h2>
    <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Throughout my career, I have had the opportunity to work with a variety of software development tools, which have helped me build a solid foundation in software engineering. These tools include React, Vue, Nodejs, and many others, each of which has played a critical role in my ability to develop high-quality software applications.As a result, I am well-versed in a range of software development methodologies and practices, which allows me to approach new projects with a flexible and adaptable mindset."
        </motion.p>
        </div>
  </motion.div>
  <div className='w-full h-[75vh] mx-auto'>
          <BallCanvas1 icons={icons} />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");