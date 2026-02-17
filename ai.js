/* =======================================================
   1️⃣ Dynamic Year in Footer
   Automatically updates the year in the footer
======================================================= */
document.getElementById("year").textContent = new Date().getFullYear();


/* =======================================================
   2️⃣ Smooth Scroll
   Smoothly scrolls to a section when a menu link is clicked
======================================================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


/* =======================================================
   3️⃣ Back-to-Top Button
   Shows a button when scrolling down, scrolls to top
======================================================= */
// Create button dynamically
const backTop = document.createElement("button");
backTop.textContent = "↑";
backTop.id = "backTop";
backTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 15px;
  font-size: 20px;
  border: none;
  background: #2c4df7;
  color: #fff;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  z-index: 100;
`;
document.body.appendChild(backTop);

// Show/hide on scroll
window.addEventListener("scroll", () => {
  if(window.scrollY > 300) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
});

// Scroll to top
backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/* =======================================================
   4️⃣ Typing Text Effect (Hero Section)
   Types out text letter by letter
======================================================= */
let text = "Exellence is our goal";
let index = 0;
const typingEl = document.getElementById("typing");
function type() {
  if(typingEl) {
    typingEl.textContent = text.slice(0, index++);
    if(index <= text.length) {
      setTimeout(type, 80);
    }
  }
}
type();


/* =======================================================
   5️⃣ Lightbox Gallery
   Click an image to see it bigger
======================================================= */
const galleryImages = document.querySelectorAll(".slides img");
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.style.cssText = `
      position: fixed;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background: rgba(0,0,0,0.8);
      display:flex;
      justify-content:center;
      align-items:center;
      z-index: 200;
    `;
    const imgEl = document.createElement("img");
    imgEl.src = img.src;
    imgEl.style.maxWidth = "90%";
    imgEl.style.maxHeight = "80%";
    imgEl.style.borderRadius = "10px";
    lightbox.appendChild(imgEl);
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", () => {
      document.body.removeChild(lightbox);
    });
  });
});


/* =======================================================
   6️⃣ Animated Counters
   Counts from 0 to a number when visible
======================================================= */
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;
    const increment = Math.ceil(target / 200); // speed
    if(current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };

  // Trigger when scrolled into view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        updateCounter();
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(counter);
});


/* =======================================================
   7️⃣ Login Button / Alert
   Shows a popup when clicked
======================================================= */
const loginBtn = document.getElementById("loginBtn");
if(loginBtn) {
  loginBtn.addEventListener("click", () => {
    alert("Login feature coming soon!");
  });
}
