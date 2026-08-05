// Commerce Ethics Website Script

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});
});
});

// Fade animation
const cards=document.querySelectorAll(".card");

const observer=new IntersectionObserver(entries=>{
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
card.style.transition="0.6s";
observer.observe(card);
});

// Back to Top Button
const btn=document.createElement("button");

btn.innerHTML="⬆";

btn.style.position="fixed";
btn.style.bottom="20px";
btn.style.right="20px";
btn.style.padding="12px 15px";
btn.style.border="none";
btn.style.borderRadius="50%";
btn.style.background="#0d47a1";
btn.style.color="white";
btn.style.cursor="pointer";
btn.style.display="none";

document.body.appendChild(btn);

window.addEventListener("scroll",()=>{
if(window.scrollY>300){
btn.style.display="block";
}else{
btn.style.display="none";
}
});

btn.onclick=()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
};
