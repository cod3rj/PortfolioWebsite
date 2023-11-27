import { motion } from "framer-motion";
import "./hero.scss"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 1.5,
            repeat: Infinity,
        }
    }
}
const Hero = () => {
    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>JAMES MATTHEW DELA VEGA</motion.h2>
                    <motion.h1 variants={textVariants}>Full Stack Web Developer</motion.h1>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button variants={textVariants}>See the Latest Works</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img src="/assets/scroll2.png" alt="Scroll" variants={textVariants} animate="scrollButton"/>
                </motion.div>
            </div>
            <div className="slidingTextContainer">
                Writer Content Creator Influencer
            </div>
            <div className="imageContainer">
                <img src="/assets/animatedMe.png" alt=""/>
            </div>
        </div>
    )
}

export default Hero;