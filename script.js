document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Console welcome message
    console.log("Welcome to Suganya's Portfolio 🚀");

    // Scroll reveal animation setup
    const sections = document.querySelectorAll("section");

    const revealSections = () => {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(30px)";
        section.style.transition = "0.6s ease";
    });

    // Trigger reveal on load & scroll
    revealSections();
    window.addEventListener("scroll", revealSections);
});
