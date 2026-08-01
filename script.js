/*=========================================================
    PORTFOLIO SCRIPT
    PART 1
=========================================================*/

/* ===========================
   LOADER
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});


/* ===========================
   AOS INITIALIZATION
=========================== */

AOS.init({

    duration: 900,
    easing: "ease-in-out",
    once: true

});


/* ===========================
   TYPING EFFECT
=========================== */

const words = [

    "AI & Data Science Student",
    "Data Analyst",
    "Machine Learning Enthusiast",
    "Full Stack Developer",
    "Python Developer",
    "AI Engineer"

];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex);

        charIndex++;

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


/* ===========================
   DARK / LIGHT MODE
=========================== */

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const icon = themeBtn.querySelector("i");

    if (document.body.classList.contains("light")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "light");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "dark");

    }

});


window.addEventListener("DOMContentLoaded", () => {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {

        document.body.classList.add("light");

        themeBtn.querySelector("i").classList.remove("fa-moon");
        themeBtn.querySelector("i").classList.add("fa-sun");

    }

});


/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");

const nav = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


/* ===========================
   STICKY HEADER
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,8,22,.90)";
        header.style.backdropFilter = "blur(18px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    } else {

        header.style.background = "rgba(0,0,0,.20)";
        header.style.boxShadow = "none";

    }

});


/* ===========================
   ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ===========================
   END OF PART 1
=========================== */
/*=========================================================
    PORTFOLIO SCRIPT
    PART 2
=========================================================*/

/* ===========================
   SCROLL TO TOP BUTTON
=========================== */

const scrollBtn = document.createElement("button");

scrollBtn.id = "scrollTop";

scrollBtn.innerHTML = `<i class="fas fa-arrow-up"></i>`;

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ===========================
   COUNTER ANIMATION
=========================== */

const counterSection = document.querySelector(".stats");

const counters = document.querySelectorAll(".stat h2");

let counterStarted = false;

function animateCounter(counter) {

    const target = Number(counter.dataset.target || counter.innerText);

    let current = 0;

    const increment = Math.ceil(target / 120);

    const timer = setInterval(() => {

        current += increment;

        if (current >= target) {

            current = target;

            clearInterval(timer);

        }

        counter.innerText = current + "+";

    }, 20);

}

function startCounters() {

    if (!counterSection || counterStarted) return;

    const trigger = counterSection.getBoundingClientRect().top;

    if (trigger < window.innerHeight - 120) {

        counterStarted = true;

        counters.forEach(counter => animateCounter(counter));

    }

}

window.addEventListener("scroll", startCounters);

startCounters();


/* ===========================
   SKILL CARD HOVER EFFECT
=========================== */

const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ===========================
   PROJECT CARD ANIMATION
=========================== */

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ===========================
   REVEAL ELEMENTS
=========================== */

const revealElements = document.querySelectorAll(

".info-card,.timeline-item,.project-card,.skill-card"

);

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

        }

    });

},{

    threshold:0.15

});

revealElements.forEach(el=>{

    revealObserver.observe(el);

});


/* ===========================
   PARTICLES.JS
=========================== */

if (typeof particlesJS !== "undefined") {

particlesJS("particles-js", {

"particles": {

"number": {

"value": 60,

"density": {

"enable": true,

"value_area": 800

}

},

"color": {

"value": "#00E5FF"

},

"shape": {

"type": "circle"

},

"opacity": {

"value": 0.4

},

"size": {

"value": 3

},

"line_linked": {

"enable": true,

"distance": 150,

"color": "#7B61FF",

"opacity": 0.35,

"width": 1

},

"move": {

"enable": true,

"speed": 2

}

},

"interactivity": {

"events": {

"onhover": {

"enable": true,

"mode": "grab"

},

"onclick": {

"enable": true,

"mode": "push"

}

},

"modes": {

"grab": {

"distance": 180

},

"push": {

"particles_nb": 4

}

}

},

"retina_detect": true

});

}


/* ===========================
   END OF PART 2
=========================== */
/*=========================================================
    PORTFOLIO SCRIPT
    PART 3 (FINAL)
=========================================================*/

/* ===========================
   CONTACT FORM
=========================== */

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = this.querySelector("input[type='text']").value.trim();
        const email = this.querySelector("input[type='email']").value.trim();
        const message = this.querySelector("textarea").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you! Your message has been received.");

        this.reset();

    });

}

/* ===========================
   PROJECT CARD TILT EFFECT
=========================== */

const tiltCards = document.querySelectorAll(".project-card");

tiltCards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height / 2) / 18;
        const rotateY = (rect.width / 2 - x) / 18;

        card.style.transform =
            `perspective(900px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(900px) rotateX(0) rotateY(0)";

    });

});

/* ===========================
   MOUSE GLOW EFFECT
=========================== */

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "18px";
glow.style.height = "18px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
    "rgba(0,229,255,.45)";
glow.style.boxShadow =
    "0 0 30px rgba(0,229,255,.8)";
glow.style.transform =
    "translate(-50%,-50%)";
glow.style.zIndex = "9999";

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

/* ===========================
   SCROLL PROGRESS BAR
=========================== */

const progressBar =
document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.left = "0";
progressBar.style.top = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.zIndex = "99999";

progressBar.style.background =
"linear-gradient(90deg,#00E5FF,#7B61FF)";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const total =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        (window.scrollY / total) * 100;

    progressBar.style.width =
        progress + "%";

});

/* ===========================
   IMAGE LAZY ANIMATION
=========================== */

const images =
document.querySelectorAll("img");

const imageObserver =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="scale(1)";

}

});

});

images.forEach(img=>{

img.style.opacity="0";
img.style.transform="scale(.92)";
img.style.transition=".8s";

imageObserver.observe(img);

});

/* ===========================
   KEYBOARD SHORTCUTS
=========================== */

document.addEventListener("keydown",e=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});

/* ===========================
   CURRENT YEAR
=========================== */

const year =
document.querySelector(".current-year");

if(year){

year.textContent =
new Date().getFullYear();

}

/* ===========================
   PERFORMANCE
=========================== */

window.addEventListener("pageshow",()=>{

console.log("Portfolio Loaded Successfully");

});

/* ===========================
   END
=========================== */