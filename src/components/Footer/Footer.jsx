import React from "react";
import "./Footer.css";
import { BsInstagram, BsFacebook } from "react-icons/bs"

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer__logo">SANTI</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.facebook.com/santi.debiase/"> <BsFacebook /></a>
                <a href="https://www.instagram.com/santi_debiase/" target="_blank"> <BsInstagram /></a>
            </div>
        </footer>
    )
}

export default Footer;
