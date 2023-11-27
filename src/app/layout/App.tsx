import './app.scss'
import Navbar from "../../features/navbar/Navbar.tsx";
import Hero from "../../features/hero/Hero.tsx";

function App() {
    return (
        <>
            <section id="Homepage">
                <Navbar/>
                <Hero/>
            </section>
            <section id="Services">Parallax</section>
            <section>Services</section>
            <section id="Portfolio">Parallax</section>
            <section>Portfolio1</section>
            <section>Portfolio2</section>
            <section>Portfolio3</section>
            <section id="Contact">Contact</section>
        </>
    )
}

export default App
