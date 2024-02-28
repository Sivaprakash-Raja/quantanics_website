"use client"
import { Feature } from "@/types/feature";
import {motion,Variants} from 'framer-motion'


const cardVariants: Variants = {
  offscreen: {
    y:100
  },
  onscreen: {
    y:10,
    transition: {
      type: "spring",
      scale:1.2,
      duration:0.4
    }
  }
};

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <motion.div 
          className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-golden bg-opacity-10 text-primary"
          variants={cardVariants}
          viewport={{ once: true, amount: 0.8 }}
          initial="offscreen"
          whileInView="onscreen"
        >
            {icon}
        </motion.div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
