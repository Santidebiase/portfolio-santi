import React from "react";
import "./About.css";
import ME from "../../assets/aboutimg.jpeg";
import { BiAward, BiFolderOpen } from "react-icons/bi";
import { FiUsers } from "react-icons/fi"


const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>


            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <BiAward className="abot__icon" />
                            <h5>Experience</h5>
                            <small>1+ Years Working</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="abot__icon" />
                            <h5>Clients</h5>
                            <small>15+ Worldwide</small>
                        </article>

                        <article className="about__card">
                            <BiFolderOpen className="abot__icon" />
                            <h5>Projects</h5>
                            <small>10+ Completed Projects</small>
                        </article>
                    </div>

                    <p>
                        My name is Santiago Debiase, I'm a Fullstack developer based in Córdoba, Argentina. I have developed many types of front-ends applications to Ecommerce booking platforms.
                    </p>


                    <a href="#contact" className="btn btn-primary">Let`s Talk</a>
                </div>
            </div>
        </section>
    )
}


export default About;