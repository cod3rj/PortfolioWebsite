import "./services.scss"
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}

const Services = () => {
    const ref = useRef();

    const isInView = useInView(ref, "-100px")
    return (
        <>
            <motion.div className="services"
                        variants={variants}
                        initial="initial"
                        ref={ref}
                        animate={isInView && "animate"}
            >
                <motion.div className="textContainer" variants={variants}>
                    <p>I code progress guiding your digital <br/>journey forward</p>
                    <hr/>
                </motion.div>
                <motion.div className="titleContainer" variants={variants}>
                    <div className="title">
                        <img src="/assets/people1.png" alt="People"/>
                        <h1><motion.b whileHover={{color: "orange"}}>Innovative</motion.b> Solutions</h1>
                    </div>
                    <div className="title">
                        <h1><motion.b whileHover={{color: "orange"}}>Tailored for Your</motion.b> Success.</h1>
                        <button>WHAT I DO?</button>
                    </div>
                </motion.div>
                <motion.div className="listContainer" variants={variants}>
                    <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                        <h2>Full Stack Web Development</h2>
                        <p>
                            Unleash Your Web Vision! 🚀 From robust C# back-ends to
                            captivating React front-ends, I craft secure, scalable,
                            and user-friendly websites.
                        </p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                        <h2>Front-End Development</h2>
                        <p>
                            Transform Ideas into Digital Realities! 🌐 Using HTML, CSS, JavaScript,
                            Bootstrap, and React, I elevate digital experiences, turning visitors into
                            captivated participants
                        </p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                        <h2>API Development</h2>
                        <p>
                            Seamless Connectivity, Unmatched Functionality! 🤝 Empower
                            your apps with potent C# and Asp.Net Core Web APIs for smooth
                            data flow and integration
                        </p>
                        <button>Go</button>
                    </motion.div>
                    <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                        <h2>Tech Support and Consultation</h2>
                        <p>
                            Your Tech Ally in Every Challenge! 🛠️ Beyond coding, I
                            offer ongoing support and consultation, ensuring your
                            digital journey is supported and optimized
                        </p>
                        <button>Go</button>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default Services;