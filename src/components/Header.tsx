import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const closeNav = () => {
        const nav = document.querySelector<HTMLElement>(".js-nav");
        const icon = document.querySelector<HTMLImageElement>(".p-hamburger img");
        if (nav) nav.classList.remove("is-active");
        if (icon) icon.src = "/src/media/images/common/hamburger-Icons-close.svg";
    };

    return (
        <header className="l-header">
            <div className="title__logo">
                <Link to="/" className="u-hidden-sm" onClick={closeNav}>
                    Our Blooms®️
                </Link>
                <Link to="/" className="u-show-sm" onClick={closeNav}>
                    O.B.
                </Link>
            </div>
            <button className="p-hamburger js-hamburger" aria-label="メニューを開く">
                <img
                    src="/src/media/images/common/hamburger-Icons-close.svg"
                    alt="メニューアイコン"
                />
            </button>
            <nav className="nav__list js-nav">
                <ul>
                    <li>
                        <Link to="/gallery" onClick={closeNav}>
                            GALLERY
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={closeNav}>
                            ABOUT
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" onClick={closeNav}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
