import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { Certificate1,Certificate2 } from "../assets";
import Tilt from "react-tilt";


const Certificates = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>---------</p>
          <h2 className={styles.sectionHeadText}>Certifications</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 flex flex-row pb-14 ${styles.paddingX} flex flex-wrap gap-10`}>
        <img className="w-[100%] rounded-2xl border  border-t-gray-500 border-l-gray-500 " src={Certificate1} alt="certificate" />


        <img className="w-[100%] rounded-2xl border border-t-gray-500 border-l-gray-500 " src={Certificate2} alt="certificate" />


      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "");
