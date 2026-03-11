import React, { useEffect } from "react";
import { initReveal } from "../typescript/scroll.js";

export default function About() {
    useEffect(() => {
        try {
            initReveal();
        } catch (e) {
            // eslint-disable-next-line no-console
            console.warn("initReveal failed on About mount", e);
        }
    }, []);

    return (
        <div>
            <h1 className="title__about reveal__item">ABOUT</h1>
            <div className="our-story">
                <p className="about__title caption1 reveal__item">our story</p>
                <div className="about__content">
                    <div className="about__owner reveal__item">
                        <img src="/src/media/images/about/Image_owner.png" alt="owner" />
                        <span className="owner__text">
                            <p className="caption2">Lily smith</p>
                            <p className="h4">Owner</p>
                        </span>
                    </div>
                    <div className="story__title reveal__item">
                        <h2>
                            Our Blooms was founded in honor of Lily Smith’s loving <br />aunts,
                            Teresa and Beth.
                        </h2>
                    </div>
                    <div className="story__img reveal__item">
                        <img src="/src/media/images/about/Image01_about.png" alt="about1" />
                        <img src="/src/media/images/about/Image02_about.png" alt="about2" />
                        <img src="/src/media/images/about/Image03_about.png" alt="about3" />
                    </div>
                    <div className="story__text">
                        <p className="paragraph2 reveal__item">
                            Lily’s journey with flowers began in the heart of Oregon, amidst the
                            flourishing fields of her aunts' flower farm. It was there, surrounded
                            by the abundance of nature, that she discovered her passion for floral
                            design. From learning the names of each bloom to understanding the
                            delicate balance of a bouquet, she absorbed the artistry of flowers like
                            the rich Oregon soil.
                            <br />
                        </p>
                        <p className="paragraph2 reveal__item">
                            <br />Bloom & Co. is the expression of that lifelong passion, a place
                            where her love for flowers translates into beautifully curated
                            arrangements that bring joy and elegance to your spaces.
                        </p>
                    </div>
                    <picture className="picture reveal__item">
                        <source media="(min-width: 768px) and (max-width: 1024px)" srcSet="/src/media/images/about/Image_breaker2.png" />
                        <source media="(max-width: 767px)" srcSet="/src/media/images/about/Image_breaker3.png" />
                        <img className="story__catch" src="/src/media/images/about/Image_breaker1.png" alt="breaker" />
                    </picture>
                    <div className="announce">
                        <div className="announce__text">
                            <p className="paragraph2 reveal__item">
                                From humble beginnings, Bloom&Co has grown into a beloved local
                                destination, known for its artistic arrangements, personal service,
                                and commitment to quality.
                                <br />
                            </p>
                            <p className="paragraph2 reveal__item">
                                <br />Discover how we can add a touch of natural beauty to your next
                                event.
                            </p>
                        </div>
                        <a className="button caption1 reveal__item" href="#">・BOOK A CONSULTATION</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
