import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

interface Props {
    item: {
        id: number;
        title: string;
        img: string;
        desc: string;
    }
}
const items = [
    {
        id: 1,
        title: "MetaDock",
        img: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page_52683-69728.jpg?size=626&ext=jpg&ga=GA1.1.487050967.1701171113&semt=ais",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    },
    {
        id: 2,
        title: "UI/UX Meta",
        img: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page_52683-70955.jpg?size=626&ext=jpg&ga=GA1.1.487050967.1701171113&semt=ais",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    },
    {
        id: 3,
        title: "BookLet",
        img: "https://img.freepik.com/free-vector/charity-app-interface-template_52683-44292.jpg?size=626&ext=jpg&ga=GA1.1.487050967.1701171113&semt=ais",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    },
    {
        id: 4,
        title: "Company Meet",
        img: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page_52683-70956.jpg?size=626&ext=jpg&ga=GA1.1.487050967.1701171113&semt=ais",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
    },
]

const Single = ({item} : Props) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
    })
    const y = useTransform(scrollYProgress, [0, 1], [-350, 350])

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img}/>
                    </div>
                    <motion.div className="textContainer" style={{y: y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

    return (
        <>
            <div className="portfolio" ref={ref}>
                <div className="progress">
                    <h1>Featured Works</h1>
                    <motion.div style={{scaleX}} className="progressBar"></motion.div>
                </div>
                {items.map((item) => (
                    <Single item={item} key={item.id}/>
                ))}
            </div>
        </>
    )
}

export default Portfolio;