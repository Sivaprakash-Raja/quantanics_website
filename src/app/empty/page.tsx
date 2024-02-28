// "use client"

// import React from 'react'
// import {motion,Variants} from 'framer-motion'
// import Image from 'next/image'
// import styles from '../empty/empty.module.css'

// const cardVariants: Variants = {
//   offscreen: {
//     y: 300
//   },
//   onscreen: {
//     y: 80,
//     rotate: -10,
//     transition: {
//       type: "spring",
//       bounce:0.8,
//       duration:0.8
//     }
//   }
// };

// const index = () => {
//   return (
//     <>
//     <div className={styles.texts}>
//       hello
//     </div>
//     <motion.div 
//         className={styles.containerd}
//         viewport={{ once: true, amount: 0.8 }}
//         initial="offscreen"
//         whileInView="onscreen"

//     >
//       <motion.div className="card" variants={cardVariants}>
//         <Image
//             src="/images/about/about-image-2.svg"
//             alt="about image"
//             width={400}
//             height={500}
//           />
//       </motion.div>
        
//      </motion.div>
//      </>
//   )
// }

// export default index

"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Box = () => {
const [isVisible, setIsVisible] = useState(false);
const { ref, inView } = useInView();

useEffect(() => {
if (inView) {
setIsVisible(true);
}
}, [inView]);

const zoomInVariant = {
hidden: { scale: 0 },
visible: { scale: 1, transition: { duration: 0.5 } },
};

return (
<div style={{ height: "100vh" }}>
<div ref={ref} style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
<AnimatePresence>
{isVisible && (
<motion.div
initial="hidden"
animate="visible"
variants={zoomInVariant}
exit="hidden"
>
<div
style={{
width: "200px",
height: "200px",
background: "blue",
}}
></div>
</motion.div>
)}
</AnimatePresence>
</div>
</div>
);
};

export default Box;
