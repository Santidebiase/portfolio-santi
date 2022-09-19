import React from "react";
import "./Nav.css";
import { BiHome, BiUser, BiBookBookmark, BiMessageDetail } from "react-icons/bi";
/*import { RiServiceLine } from "react-icons/ri";*/
import { useState } from "react";


const Nav = () => {
    const [activeNav, setActiveNav] = useState("#") /*Para marcar el icono home de foma predeterminada */
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav("#")}
                className={activeNav === "#" ? "active" : ""}><BiHome /></a>

            <a href="#about" onClick={() => setActiveNav("about")}
                className={activeNav === "about" ? "active" : ""}><BiUser /></a>

            <a href="#experience" onClick={() => setActiveNav("experience")}
                className={activeNav === "experience" ? "active" : ""}><BiBookBookmark /></a>

            {/*<a href="#services" onClick={() => setActiveNav("services")}
                className={activeNav === "services" ? "active" : ""}><RiServiceLine /></a>*/}

            <a href="#contact" onClick={() => setActiveNav("contact")}
                className={activeNav === "contact" ? "active" : ""}><BiMessageDetail /></a>
        </nav>
    )
}

export default Nav;