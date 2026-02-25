import { Container } from "./styles";
import { motion } from "framer-motion";

import Illustration from "../../assets/Illustration.png";
import linkedInIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import telegram from "../../assets/telegram.svg";
import Hello from "../../assets/Hello.gif";
import Resume from "../../assets/Resume-Vivek-Sahu.pdf";

const Hero = () => {
  function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  const fadeRightVariant = {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <Container id="home">
      <div className="hero-text">
        <motion.p
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once : true }}
        >
          Hello <img src={Hello} alt="Hello" width="20"/>, I'm 
        </motion.p>

        <motion.h1
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Vivek Sahu
        </motion.h1>

        <motion.h3
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          Backend Developer | MERN Developer
        </motion.h3>

        <motion.p
          className="small-resume"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          Final Year CSE Student • Building scalable web
          applications
        </motion.p>

        <div className="hero-buttons">
          <motion.a
            href={Resume}
            download
            className="button"
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            Resume
          </motion.a>

          <motion.button
            className="button"
            onClick={scrollToContact}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="show"
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.button>
        </div>

        <motion.div
          className="social-media"
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <a href="https://www.linkedin.com/in/vivek-sahu-335258297/" target="_blank" rel="noreferrer">
            <img src={linkedInIcon} alt="LinkedIn" />
          </a>

          <a href="https://github.com/Vivek954sahu" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>

          <a href="https://t.me/Viv9108" target="_blank" rel="noreferrer">
            <img src={telegram} alt="Telegram" />
          </a>
        </motion.div>
      </div>

      <div className="hero-image">
        <motion.img
          src={Illustration}
          alt="Illustration"
          variants={fadeRightVariant}
          initial="hidden"
          whileInView="show"
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        />
      </div>
    </Container>
  )
}

export default Hero
