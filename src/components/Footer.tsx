import React from "react";
import Footer1 from '../media/images/common/Image-footer-1.png';
import Footer2 from '../media/images/common/Image-footer-2.png';
import Footer3 from '../media/images/common/Image-footer-3.png';

export default function Footer() {
    return (
        <footer>
            <picture className="picture reveal__item">
                <source
                    media="(min-width: 768px) and (max-width: 1024px)"
                    srcSet={Footer2}
                />
                <source media="(max-width: 767px)" srcSet={Footer3} />
                <img
                    className="footer-img"
                    src={Footer1}
                    alt="Our Bloomsのフローラルデザインの背景画像"
                />
            </picture>
        </footer>
    );
}
