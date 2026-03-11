import React, { useEffect } from "react";
import { initReveal } from "../typescript/scroll.js";
import { initModal } from "../typescript/modal.js";

export default function Gallery() {
    useEffect(() => {
        // re-run reveal observer for elements mounted with this route
        try {
            initReveal();
        } catch (e) {
            // eslint-disable-next-line no-console
            console.warn("initReveal failed on Gallery mount", e);
        }

        // initialize modal (gallery-specific interactive behavior)
        try {
            initModal();
        } catch (e) {
            // eslint-disable-next-line no-console
            console.warn("initModal failed on Gallery mount", e);
        }
    }, []);

    return (
        <div>
            <h1 className="title__gallery reveal__item">GALLERY</h1>
            <div className="flower__list">
                <p className="content__title caption1 reveal__item">SEASONAL ARRANGEMENTS</p>
                <div className="list__item">
                    <div className="flower__item reveal__item">
                        <p className="flower__title">
                            <span className="caption2">Dawn Bloom</span>&nbsp;
                            <span className="h4">$55/Bunch</span>
                        </p>
                        <img className="flower__img" src="/src/media/images/gallery/Image_flower1.png" alt="Dawn Bloom" />
                    </div>
                    <div className="flower__item reveal__item">
                        <p className="flower__title">
                            <span className="caption2">Solstice Stems</span>&nbsp;
                            <span className="h4">$30/Bunch</span>
                        </p>
                        <img className="flower__img" src="/src/media/images/gallery/Image_flower2.png" alt="Solstice Stems" />
                    </div>
                    <div className="flower__item reveal__item">
                        <p className="flower__title">
                            <span className="caption2">Whisper Greens</span>&nbsp;
                            <span className="h4">$120/Bunch</span>
                        </p>
                        <img className="flower__img" src="/src/media/images/gallery/Image_flower3.png" alt="Whisper Greens" />
                    </div>
                    <div className="flower__item reveal__item">
                        <p className="flower__title">
                            <span className="caption2">Clarity Petals</span>&nbsp;
                            <span className="h4">$55/Bunch</span>
                        </p>
                        <img className="flower__img" src="/src/media/images/gallery/Image_flower4.png" alt="Clarity Petals" />
                    </div>
                    <div className="flower__item reveal__item">
                        <p className="flower__title">
                            <span className="caption2">River Stone</span>&nbsp;
                            <span className="h4">$30/Bunch</span>
                        </p>
                        <img className="flower__img" src="/src/media/images/gallery/Image_flower5.png" alt="River Stone" />
                    </div>
                    <div className="flower__item reveal__item">
                        <p className="flower__title">
                            <span className="caption2">Moonlit Meadow</span>&nbsp;
                            <span className="h4">$120/Bunch</span>
                        </p>
                        <img className="flower__img" src="/src/media/images/gallery/Image_flower6.png" alt="Moonlit Meadow" />
                    </div>
                    <div className="flower__item reveal__item">
                        <p className="flower__title">
                            <span className="caption2">Ember Leaf</span>&nbsp;
                            <span className="h4">$55/Bunch</span>
                        </p>
                        <img className="flower__img" src="/src/media/images/gallery/Image_flower7.png" alt="Ember Leaf" />
                    </div>
                    <div className="flower__item reveal__item">
                        <p className="flower__title">
                            <span className="caption2">Skyline Bloom</span>&nbsp;
                            <span className="h4">$75/Bunch</span>
                        </p>
                        <img className="flower__img" src="/src/media/images/gallery/Image_flower8.png" alt="Skyline Bloom" />
                    </div>
                    <div className="flower__item flower__item--last reveal__item">
                        <p className="flower__title">
                            <span className="caption2">Still Waters</span>&nbsp;
                            <span className="h4">$250/Bunch</span>
                        </p>
                        <picture>
                            <source media="(min-width: 768px) and (max-width: 1024px)" srcSet="/src/media/images/gallery/Image_flower9-2.png" />
                            <source media="(max-width: 767px)" srcSet="/src/media/images/gallery/Image_flower9.png" />
                            <img className="flower__img" src="/src/media/images/gallery/Image_flower9.png" alt="Still Waters" />
                        </picture>
                    </div>
                </div>
                <div className="modal__view">
                    <button className="modal__close">&times;</button>
                    <img className="modal__img" alt="modal" />
                    <button className="modal__btn prev">&lt;</button>
                    <button className="modal__btn next">&gt;</button>
                </div>
            </div>
            <div className="content__services">
                <p className="content__title caption1 reveal__item">Services</p>
                <div className="services__list">
                    <hr />
                    <div className="services__item reveal__item">
                        <div className="services__text">
                            <h1 className="services__title">FLORAL INSTALLATIONS</h1>
                            <p className="services__desc">We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.</p>
                        </div>
                        <picture className="picture reveal__item">
                            <source media="(min-width: 768px) and (max-width: 1024px)" srcSet="/src/media/images/gallery/Image_services1-2.png" />
                            <source media="(max-width: 767px)" srcSet="/src/media/images/gallery/Image_services1-3.png" />
                            <img className="services__img" src="/src/media/images/gallery/Image_services1-1.png" alt="services1" />
                        </picture>
                    </div>
                    <hr />
                    <div className="services__item reveal__item">
                        <div className="services__text">
                            <h1 className="services__title">NATIVE PLANT ARRANGEMENTS</h1>
                            <p className="services__desc">Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.</p>
                        </div>
                        <picture className="picture reveal__item">
                            <source media="(min-width: 768px) and (max-width: 1024px)" srcSet="/src/media/images/gallery/Image_services2-2.png" />
                            <source media="(max-width: 767px)" srcSet="/src/media/images/gallery/Image_services2-3.png" />
                            <img className="services__img" src="/src/media/images/gallery/Image_services2-1.png" alt="services2" />
                        </picture>
                    </div>
                    <hr />
                    <div className="services__item reveal__item">
                        <div className="services__text">
                            <h1 className="services__title">CUSTOM FLORAL CONCEPTS</h1>
                            <p className="services__desc">Your vision, our blooms. We build arrangements that are both personal and exquisitely simple.</p>
                        </div>
                        <picture className="picture reveal__item">
                            <source media="(min-width: 768px) and (max-width: 1024px)" srcSet="/src/media/images/gallery/Image_services3-2.png" />
                            <source media="(max-width: 767px)" srcSet="/src/media/images/gallery/Image_services3-3.png" />
                            <img className="services__img" src="/src/media/images/gallery/Image_services3-1.png" alt="services3" />
                        </picture>
                    </div>
                </div>
            </div>
            <section className="content__bottom__gallery reveal__item">
                <p className="content__catch caption1">WORK WITH US</p>
                <h2 className="content__desc">Discover how we can add a touch of natural beauty to your next event.</h2>
                <a href="/about" className="button">・ABOUT US</a>
            </section>
        </div>
    );
}
