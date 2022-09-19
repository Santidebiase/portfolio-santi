import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import Portfolio from "./components/Portfolio/Portfolio";
/*import Services from "./components/Services/Services";*/
/*import Testimonials from "./components/Testimonials/Testimonials";*/


const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            {/*<Services />*/}
            <Portfolio />
            {/*<Testimonials />*/}
            <Contact />
            <Footer />
        </>
    )
}

export default App;