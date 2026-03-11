export function initNavigation() {
    const hamburgerIcon = "/src/media/images/common/hamburger-Icons-close.svg";
    const closeIcon = "/src/media/images/common/hamburger-Icons-open.svg";

    let attempts = 0;
    const maxAttempts = 20; // retry for up to ~2 seconds (20 * 100ms)

    function attach() {
        const hamburger = document.querySelector<HTMLElement>(".js-hamburger");
        const nav = document.querySelector<HTMLElement>(".js-nav");

        if (!hamburger || !nav) {
            attempts++;
            if (attempts <= maxAttempts) {
                // retry shortly — React may not have committed DOM yet
                setTimeout(attach, 100);
            } else {
                console.warn("initNavigation: navigation elements not found after retries", { hamburger, nav });
            }
            return;
        }

        const icon = hamburger.querySelector<HTMLImageElement>("img");
        if (!icon) console.warn("initNavigation: hamburger icon <img> not found");

        // Avoid adding duplicate listeners if attach() runs multiple times
        const marker = (hamburger as any).__nav_init_attached;
        if (marker) return;
        (hamburger as any).__nav_init_attached = true;

        hamburger.addEventListener("click", () => {
            nav.classList.toggle("is-active");

            // icon が存在する場合のみ src を切り替える
            if (icon) {
                icon.src = nav.classList.contains("is-active") ? closeIcon : hamburgerIcon;
            }
        });
    }

    // start attach loop
    attach();
}
