import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { social } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
const Social = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Online handles.</h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {social.map((soc) => (
        <div className='w-28 h-28' key={soc.name}>
          <BallCanvas icon={soc.icon} />
          <div
              onClick={() => window.open(soc.link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            />
            
    </div>
    ))}
    </div>
    </>
  );
};

export default SectionWrapper(Social, "");