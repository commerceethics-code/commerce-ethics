// =============================
// Commerce Ethics Website Script
// =============================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Service card animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="0.6s ease";
    observer.observe(card);
});

// Logo animation
const logo = document.querySelector(".logo");

if(logo){
    logo.addEventListener("mouseover",()=>{
        logo.style.transform="scale(1.1) rotate(8deg)";
    });

    logo.addEventListener("mouseout",()=>{
        logo.style.transform="scale(1) rotate(0deg)";
    });
}

// Back To Top Button
const topBtn = document.create
