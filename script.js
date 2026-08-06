// =============================
// Commerce Ethics Website Script
// =============================

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const href = this.getAttribute("href");

        // Ignore empty/hash-only links
        if (!href || href === '#') return;

        // Only handle same-page hash links — use getElementById to avoid invalid selector errors
        if (href.startsWith('#')) {
            const id = decodeURIComponent(href.slice(1));
            const target = document.getElementById(id);

            if (target){
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
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
let topBtn = document.querySelector('.top-btn') || document.getElementById('topBtn');

// If there's no existing button in the markup, create one so the script is resilient.
if(!topBtn){
    topBtn = document.createElement('button');
    topBtn.id = 'topBtn';
    topBtn.className = 'top-btn';
    topBtn.setAttribute('aria-label', 'Back to top');
    topBtn.textContent = '↑';
    // Basic inline styles so it appears even if the stylesheet is missing.
    topBtn.style.position = 'fixed';
    topBtn.style.bottom = '20px';
    topBtn.style.right = '20px';
    topBtn.style.display = 'none';
    topBtn.style.padding = '10px 12px';
    topBtn.style.borderRadius = '4px';
    topBtn.style.cursor = 'pointer';
    document.body.appendChild(topBtn);
}

// Only attach listeners if topBtn exists
if (topBtn) {
    // Show/hide on scroll
    window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > 300){
            topBtn.style.display = 'block';
        } else {
            topBtn.style.display = 'none';
        }
    });

    // Smooth scroll to top when clicked
    topBtn.addEventListener('click', ()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
