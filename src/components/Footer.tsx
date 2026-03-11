import React from "react";

export default function Footer() {
    return (
        <footer>
            <picture className="picture reveal__item">
                <source
                    media="(min-width: 768px) and (max-width: 1024px)"
                    srcSet="/src/media/images/common/Image-footer-2.png"
                />
                <source media="(max-width: 767px)" srcSet="/src/media/images/common/Image-footer-3.png" />
                <img
                    className="footer-img"
                    src="/src/media/images/common/Image-footer-1.png"
                    alt="Our Bloomsのフローラルデザインの背景画像"
                />
            </picture>
        </footer>
    );
}
