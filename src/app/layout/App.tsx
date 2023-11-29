import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './app.scss';
import Navbar from "../../features/navbar/Navbar.tsx";
import Hero from "../../features/hero/Hero.tsx";
import Parallax from "../../features/parallax/Parallax.tsx";
import Services from "../../features/services/Services.tsx";
import Portfolio from "../../features/portfolio/Portfolio.tsx";
import Contact from "../../features/contact/Contact.tsx";
import AboutMe from "../../features/aboutme/AboutMe.tsx";
import LoadingComponent from "../common/loader/LoadingComponent.tsx";
import Cursor from "../common/cursor/Cursor.tsx";


function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading data or any asynchronous tasks
        const loadData = async () => {
            // Simulate a delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            setLoading(false);
        };

        // Call the function to load data
        loadData();
    }, []);

    return (
        <>
            {loading ? (
                <LoadingComponent />
            ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                    <Cursor/>
                    <section id="Homepage">
                        <Navbar />
                        <Hero />
                    </section>
                    <section id="About">
                        <AboutMe />
                    </section>
                    <section id="Services">
                        <Parallax type="services" />
                    </section>
                    <section>
                        <Services />
                    </section>
                    <section id="Portfolio">
                        <Parallax type="portfolio" />
                    </section>
                    <Portfolio />
                    <section id="Contact">
                        <Contact />
                    </section>
                </motion.div>
            )}
        </>
    );
}

export default App;
