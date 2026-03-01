import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ScrollFadeIn = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);

  const inView = useInView(ref, { once: true, margin: "-80px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
