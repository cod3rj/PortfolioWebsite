import { motion } from 'framer-motion';
import './navbar.scss'
import Sidebar from "../sidebar/Sidebar.tsx";

const Navbar = () => {
    return (
        <>
            <Sidebar/>
            <div className="navbar">
                <div className="wrapper">
                    <motion.span
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                    >
                        James Dela Vega
                    </motion.span>
                    <div className="social">
                        <a href="#"><img src="/assets/facebook.png" alt="Facebook"/></a>
                        <a href="#"><img src="/assets/instagram.png" alt="Instagram"/></a>
                        <a href="#"><img src="/assets/youtube.png" alt="Youtube"/></a>
                        <a href="#"><img src="/assets/linkedin.png" alt="LinkedIn"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;