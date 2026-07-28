// Smooth scrolling for navigation links

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const section = document.querySelector(
            this.getAttribute('href')
        );

        section.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Welcome message in console

console.log("Welcome to Suganya's Portfolio 🚀");


// Simple scroll animation

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});


// Initial animation style

sections.forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "0.6s ease";

});
