import React, { useRef } from "react";
import "./Contact.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs"
import emailjs from '@emailjs/browser';



const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ra78s8q', 'template_6ssuqr5', form.current, 'wm8QKZqccd-RyGK2X')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <HiOutlineMailOpen className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>santidebiase1999@gmail.com</h5>
                        <a href="mailto: santidebiase1999@gmail.com" target="_blank">Send a Message</a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon" />
                        <h4>Messenger</h4>
                        <h5>Santiago Debiase</h5>
                        <a href="https://m.me/santi.debiase" target="_blank">Send a Message</a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+543517340333</h5>
                        <a href="https://api.whatsapp.com/send?phone=+543517340333" target="_blank">Send a Message</a>
                    </article>
                </div>
                {/*END OF CONTACT OPTIONS*/}

                <form action={form} onsubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" value="Send" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;