const hamburger = document.querySelector<HTMLElement>(".js-hamburger");
const nav = document.querySelector<HTMLElement>(".js-nav");

const hamburgerIcon = "../media/images/common/hamburger-Icons-close.svg";
const closeIcon = "../media/images/common/hamburger-Icons-open.svg";

if (!hamburger || !nav) {
    console.warn("navigation elements not found:", { hamburger, nav });
} else {
    const icon = hamburger.querySelector<HTMLImageElement>("img");
    if (!icon) console.warn("hamburger icon <img> not found");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("is-active");

        // icon が存在する場合のみ src を切り替える
        if (icon) {
            icon.src = nav.classList.contains("is-active") ? closeIcon : hamburgerIcon;
        }
    });
}
