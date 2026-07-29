document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Numbered Certificate Gallery Loop
    const gallery = document.getElementById("cert-gallery");
    const totalCertificates = 8; // Change this number to your total certificate count

    if (gallery) {
        for (let i = 1; i <= totalCertificates; i++) {
            const filePath = `assets/certificates/certificate-${i}.jpg`;
            
            const anchor = document.createElement("a");
            anchor.href = filePath;
            anchor.target = "_blank";
            anchor.className = "cert-img-card";

            const img = document.createElement("img");
            img.src = filePath;
            img.alt = `Certificate ${i}`;
            img.loading = "lazy";

            anchor.appendChild(img);
            gallery.appendChild(anchor);
        }
    }

    // 2. Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // 3. Scroll Reveal Animations
    const sections = document.querySelectorAll("section");

    const revealSections = () => {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < window.innerHeight - 80) {
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

    revealSections();
    window.addEventListener("scroll", revealSections);

    console.log("Welcome to Suganya's Portfolio 🚀");
});
