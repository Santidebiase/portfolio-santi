import React from "react";
import "./Testimonials.css";
import { a1 } from "../../assets/avatar1.jpg";

const Testimonials = () => {
    return (
        <section>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <div className="contaier testimonials__container">
                <article className="testimonial">
                    <div className="client__avatar">
                        <img src="" alt="Avatar One" />
                    </div>
                    <h5 className="client__name">Ernest Achiever</h5>
                    <small className="client_review">
                        Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Vitae dolore facilis, ducimus dolor ratione maiores
                        ab provident doloribus in, pariatur voluptatibus sapiente corrupti
                        voluptatem enim. Eos nihil mollitia ut magni.
                    </small>

                </article>

                <article className="testimonial">
                    <div className="client__avatar">
                        <img src="" alt="Avatar One" />
                    </div>
                    <h5 className="client__name">Ernest Achiever</h5>
                    <small className="client_review">
                        Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Vitae dolore facilis, ducimus dolor ratione maiores
                        ab provident doloribus in, pariatur voluptatibus sapiente corrupti
                        voluptatem enim. Eos nihil mollitia ut magni.
                    </small>

                </article>

                <article className="testimonial">
                    <div className="client__avatar">
                        <img src="" alt="Avatar One" />
                    </div>
                    <h5 className="client__name">Ernest Achiever</h5>
                    <small className="client_review">
                        Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Vitae dolore facilis, ducimus dolor ratione maiores
                        ab provident doloribus in, pariatur voluptatibus sapiente corrupti
                        voluptatem enim. Eos nihil mollitia ut magni.
                    </small>

                </article>
            </div>
        </section>
    )
}

export default Testimonials;
