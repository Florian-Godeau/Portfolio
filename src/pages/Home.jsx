import React, { useEffect } from 'react';
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Header />
            <About />
            <Skills />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;