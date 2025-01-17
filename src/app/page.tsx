"use client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ScrollToTop from "@/components/ScrollToTop";
import { useRef } from "react";

export default function Home() {
    const projectRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);
    return (
        <>
            <ScrollToTop />
            <Hero projectRef={projectRef} aboutRef={aboutRef} contactRef={contactRef} />
            <Projects ref={projectRef} />
            <Contact ref={contactRef} />
            <About ref={aboutRef} />
            <Footer />
        </>
    )
}
