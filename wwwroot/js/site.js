document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            const open = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });

        nav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.12 }
    );

    document.querySelectorAll(".step-card, .feature-row, .screen-card, .privacy-card").forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(18px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });

    const style = document.createElement("style");
    style.textContent = ".visible { opacity: 1 !important; transform: none !important; }";
    document.head.appendChild(style);
});
