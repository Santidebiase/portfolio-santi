import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";


const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com/in/santiago-debiase-fullstack/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Santidebiase" target="_blank"> <BsGithub /></a>
            <a href="https://www.instagram.com/santi_debiase/" target="_blank"> <BsInstagram /></a>
        </div>
    )
}

export default HeaderSocials;