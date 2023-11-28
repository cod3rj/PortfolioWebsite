import './app.scss'
import Navbar from "../../features/navbar/Navbar.tsx";
import Hero from "../../features/hero/Hero.tsx";
import Parallax from "../../features/parallax/Parallax.tsx";
import Services from "../../features/services/Services.tsx";
import Portfolio from "../../features/portfolio/Portfolio.tsx";
import Contact from "../../features/contact/Contact.tsx";

function App() {
    return (
        <>
            <section id="Homepage">
                <Navbar/>
                <Hero/>
            </section>
            <section id="Services">
                <Parallax type="services"/>
            </section>
            <section>
                <Services/>
            </section>
            <section id="Portfolio">
                <Parallax type="portfolio"/>
            </section>
            <Portfolio/>
            <section id="Contact">
                <Contact/>
            </section>
        </>
    )
}

export default App
