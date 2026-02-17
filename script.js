document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
const text="Exellence is our goal";
const typingElement= document.getElementById("typing");
let index=0;
function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect,100);
    }
}
typeEffect();

