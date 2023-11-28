import "./parallax.scss"
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

const Parallax = ({type} : {type: string }) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "600%"])
    const yPlanets = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])
    const xStars = useTransform(scrollYProgress, [0, 1], ["0%", "250%"])

    return (
        <>
            <motion.div className="parallax" ref={ref} style={{background: type==="services" ?
                    "linear-gradient(180deg, #111132, #0c0c1d" :
                    "linear-gradient(180deg, #111132, #505064)"
            }}>
                <motion.h1 style={{y: yText, top: type === "services" ? "50px" : "400px"}}>{type === "services" ? "What I Do?" : "What I Did?"}</motion.h1>
                <motion.div className="mountains"
                            style={{backgroundImage: `url(${type === "services" ? "/assets/mountain.png" : "/assets/mountain2.png"})`}}></motion.div>
                <motion.div style={{
                    y: yPlanets,
                    backgroundImage: `url(${type === "services" ? "/assets/planets.png" : "/assets/sun.png"})`
                }} className="planets"></motion.div>
                <motion.div style={{x: xStars}} className="stars"></motion.div>
            </motion.div>
        </>
    )
}

export default Parallax;