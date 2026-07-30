document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Certificate Image Gallery Loader with Title Overlay
    const gallery = document.getElementById("cert-gallery");

    // Exact mapping of your certificate images from assets/Certificates/
    const certificates = [
        {
            file: "certificate-5(39316063569350).jpg",
            title: "Cultural Event - Active Participation (DMI & JP College)"
        },
        {
            file: "certificate-6(39316087817629).jpg",
            title: "Data Science Workshop (LMES & Uptor)"
        },
        {
            file: "certificate-7(39316122227471).jpg",
            title: "Digital Skills (Microsoft & Naan Mudhalvan)"
        },
        {
            file: "certificate-8(39316146500848).jpg",
            title: "Azure AI Fundamentals (CloudThat, Microsoft & Nasscom)"
        },
        {
            file: "certificate-9(39316163694327).jpg",
            title: "Tech Discovery Workshop & Industrial Visit (Maker Village & IIITM-K)"
        },
        {
            file: "certificate-10(39316181355356).jpg",
            title: "AI for Business Professionals (HP LIFE / HP Foundation)"
        },
        {
            file: "certificate-11(39316200356258).jpg",
            title: "Data Science & Analytics (HP LIFE / HP Foundation)"
        },
        {
            file: "certificate-1(39315870924320).jpg",
            title: "Certification"
        },
        {
            file: "certificate-2(39315970360580).jpg",
            title: "Certification"
        },
        {
            file: "certificate-3(39316003192728).jpg",
            title: "Certification"
        },
        {
            file: "certificate-4(39316039890068).jpg",
            title: "Certification"
        },
        {
            file: "course-1(40056786032658).jpg",
            title: "Course Completion"
        },
        {
            file: "course-2(40056910518919).jpg",
            title: "Course Completion"
        },
        {
            file: "course-3(40056957992127).jpg",
            title: "Course Completion"
        },
        {
            file: "course-4(40057009150622).jpg",
            title: "Course Completion"
        },
        {
            file: "Thiranex_Certificate_Suganya_S_THX-JUN1226-340.jpg", 
            title: "Thiranex Certification"
        },
        {
            file: "docscanner-28-jul-2026.jpg",
            title: "python Certificate" 
        }
    ];

    if (gallery) {
        certificates.forEach((cert) => {
            // Safe path construction for relative deployment
            const filePath = `assets/Certificates/${encodeURI(cert.file)}`;

            const anchor = document.createElement("a");
            anchor.href = filePath;
            anchor.target = "_blank";
            anchor.className = "cert-img-card";

            const img = document.createElement("img");
            img.src = filePath;
            img.alt = cert.title || "Certificate";
            img.loading = "lazy";

            const titleContainer = document.createElement("div");
            titleContainer.className = "cert-card-title";
            titleContainer.innerText = cert.title || "Certificate";

            anchor.appendChild(img);
            anchor.appendChild(titleContainer);
            gallery.appendChild(anchor);
        });
    }

    // 2. Smooth Scrolling for Nav Links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(targetId);
                if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // 3. Scroll Reveal Animations
    const sections = document.querySelectorAll("section");

    const revealSections = () => {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight - 80) {
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
