document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".site-nav");
    const header = document.querySelector(".site-header");

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

    if (header) {
        const onScroll = () => {
            header.classList.toggle("scrolled", window.scrollY > 24);
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
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

    document.querySelectorAll(".step-card, .feature-row, .screen-card, .privacy-card").forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(22px)";
        el.style.transition = `opacity 0.65s ease ${index * 0.04}s, transform 0.65s ease ${index * 0.04}s`;
        observer.observe(el);
    });

    document.querySelectorAll(".screen-card").forEach((card) => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
            const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
            card.style.transform = `translateY(-8px) rotateX(${-y}deg) rotateY(${x}deg)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });

    const style = document.createElement("style");
    style.textContent = `
        .visible { opacity: 1 !important; transform: none !important; }
        .site-header.scrolled {
            background: rgba(7, 11, 20, 0.95);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
        }
        .screen-card { transform-style: preserve-3d; perspective: 900px; }
    `;
    document.head.appendChild(style);
});
