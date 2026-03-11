import React, { useEffect } from "react";
import { initReveal } from "../typescript/scroll.js";

export default function Contact() {
    useEffect(() => {
        try {
            initReveal();
        } catch (e) {
            // eslint-disable-next-line no-console
            console.warn("initReveal failed on Contact mount", e);
        }
    }, []);

    return (
        <div>
            <h1 className="title__about reveal__item">CONTACT</h1>

            <section className="content__top reveal__item">
                <p className="content__catch caption1">GET IN TOUCH</p>
                <h2 className="content__desc">We’d love to hear from you — send us a message.</h2>
            </section>

            <section className="contact-form reveal__item" style={{ padding: '40px' }}>
                <form className="form" onSubmit={(e) => e.preventDefault()}>
                    <div style={{ display: 'grid', gap: '12px', maxWidth: 600, margin: '0 auto' }}>
                        <input type="text" name="name" placeholder="Your name" required />
                        <input type="email" name="email" placeholder="Your email" required />
                        <input type="text" name="subject" placeholder="Subject" />
                        <textarea name="message" placeholder="Message" rows={6} required />
                        <button className="button" type="submit">Send message</button>
                    </div>
                </form>
            </section>

            <section className="content__bottom reveal__item">
                <p className="content__catch caption1">VISIT US</p>
                <h2 className="content__desc">Our studio is open by appointment. Find us at:</h2>
                <p className="paragraph1">123 Flower Lane, Portland, OR</p>
                <p className="paragraph1">Mon–Fri: 10:00–18:00</p>
            </section>
        </div>
    );
}
