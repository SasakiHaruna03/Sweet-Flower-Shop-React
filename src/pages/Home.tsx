import React, { useEffect } from "react";
import { initReveal } from "../typescript/scroll.js";

export default function Home() {
    useEffect(() => {
        try {
            initReveal();
        } catch (e) {
            // eslint-disable-next-line no-console
            console.warn("initReveal failed on Home mount", e);
        }
    }, []);

    return (
        <div>
            <div className="logo__item reveal__item">
                <img className="logo" src="/src/media/images/home/Logo Image.png" alt="ロゴ画像" />
                <picture className="picture">
                    <source
                        media="(min-width: 768px) and (max-width: 1024px)"
                        srcSet="/src/media/images/home/Thumbnail02.png"
                    />
                    <source media="(max-width: 767px)" srcSet="/src/media/images/home/Thumbnail03.png" />
                    <img className="logo__image" src="/src/media/images/home/Image0.png" alt="サムネイル画像" />
                </picture>
            </div>

            <section className="content__top reveal__item">
                <p className="content__catch caption1">WHO WE ARE</p>
                <h2 className="content__desc">
                    We're Our Blooms® and we're here to help<br />
                    you find your floral story.
                </h2>
                <a href="/about" className="button">・ABOUT US</a>
            </section>

            <p className="images reveal__item">
                <img src="/src/media/images/home/Image 001.png" alt="花の画像1" />
                <img src="/src/media/images/home/Image 02.png" alt="花の画像2" />
                <img src="/src/media/images/home/Image 03.png" alt="花の画像3" />
                <img src="/src/media/images/home/Image 04.png" alt="花の画像4" />
                <img src="/src/media/images/home/Image 05.png" alt="花の画像5" />
            </p>

            <section className="reveal__item">
                <div className="section__title">
                    <h1>WHAT WE DO</h1>
                    <p className="paragraph1">We bring a touch of that simple magic into your world.</p>
                </div>
                <hr />
                <div className="article">
                    <div className="article__item reveal__item">
                        <h1>1</h1>
                        <img
                            src="/src/media/images/home/Image1.png"
                            alt="カフェの入り口に設置された大型のフラワーデコレーション"
                        />
                        <div className="article__text-group">
                            <h1 className="article__title">FLORAL INSTALLATIONS</h1>
                            <p className="article__text florist-body">Living art for homes, businesses, and events.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="article__item reveal__item">
                        <h1>2</h1>
                        <img
                            src="/src/media/images/home/Image2.png"
                            alt="オーストラリア自生植物（ネイティブプランツ）を使ったモダンなアレンジメント"
                        />
                        <div className="article__text-group">
                            <h1 className="article__title">NATIVE PLANT ARRANGEMENTS</h1>
                            <p className="article__text florist-body">Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="article__item reveal__item">
                        <h1>3</h1>
                        <img
                            src="/src/media/images/home/Image3.png"
                            alt="お客様の要望に合わせてデザインされた特別なオーダーメイドブーケ"
                        />
                        <div className="article__text-group">
                            <h1 className="article__title">CUSTOM FLORAL CONCEPTS</h1>
                            <p className="article__text florist-body">Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
                        </div>
                    </div>
                    <hr />
                </div>
            </section>

            <picture className="picture reveal__item">
                <source media="(min-width: 768px) and (max-width: 1024px)" srcSet="/src/media/images/home/Image4-2.png" />
                <source media="(max-width: 767px)" srcSet="/src/media/images/home/Image4-3.png" />
                <img className="catch-img" src="/src/media/images/home/Image4-1.png" alt="自然の美しさを表現した花のクローズアップ写真" />
            </picture>

            <section className="content__bottom reveal__item">
                <p className="content__catch caption1">WORK WITH US</p>
                <h2 className="content__desc">Discover how we can add a touch of natural beauty to your next event.</h2>
                <a href="/about" className="button">・ABOUT US</a>
            </section>
        </div>
    );
}
