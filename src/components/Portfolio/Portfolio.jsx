import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/Rick-morty.png";
import IMG2 from "../../assets/delicious-app.png";
import IMG3 from "../../assets/brut0.png";
const Portfolio = () => {
    return (
        <section>
            <h5>My Recent Work</h5>
            <h2>Porfolio</h2>

            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>Rick & Morty Wiki</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/Santidebiase/Rick_y_Morty" className="btn">GitHub</a>
                        <a href="https://rick-morty-black.vercel.app/" className="btn btn-primary">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>Delicious App</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/Santidebiase/Delicious_app" className="btn">GitHub</a>
                        <a href="https://delicious-app.vercel.app/" className="btn btn-primary">Live Demo</a>
                    </div>
                </article>

                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>Brut0</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://brut0.com/" className="btn btn-primary">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio;