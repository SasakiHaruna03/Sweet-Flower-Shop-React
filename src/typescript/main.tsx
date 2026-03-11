import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "../App";
import "../scss/style.scss";
import { initNavigation } from "./navigation.js";
import { initModal } from "./modal.js";
import { initReveal } from "./scroll.js";

// index.html にある id="root" を探して、そこに React を流し込む
ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// Run initializers after next animation frame to ensure React has mounted
// DOM elements.
requestAnimationFrame(() => {
    try {
        initReveal();
    } catch (e) {
        // swallow — reveal is optional
        // eslint-disable-next-line no-console
        console.warn("initReveal failed", e);
    }

    try {
        initNavigation();
    } catch (e) {
        // eslint-disable-next-line no-console
        console.warn("initNavigation failed", e);
    }

    try {
        initModal();
    } catch (e) {
        // eslint-disable-next-line no-console
        console.warn("initModal failed", e);
    }
});