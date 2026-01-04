/* ===============================
   GLOBAL SETTINGS
================================ */
document.documentElement.style.scrollBehavior = "smooth";

/* ===============================
   NAVBAR ACTIVE LINK ON SCROLL
================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

function activateNavLink() {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", activateNavLink);

/* ===============================
   MOBILE NAVBAR AUTO-CLOSE
   (Future proof – if you add toggle)
================================ */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

/* ===============================
   CARD HOVER EFFECTS
   (Education, Projects, Internship)
================================ */
const cards = document.querySelectorAll(
  ".edu-card, .project-card, .intern-card, .cer-card"
);

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px) scale(1.02)";
    card.style.transition = "all 0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

/* ===============================
   SCROLL REVEAL (LIGHTWEIGHT)
================================ */
const revealElements = document.querySelectorAll(
  ".section, .edu-card, .project-card, .intern-card"
);

const revealOnScroll = () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
};

revealElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ===============================
   RESUME BUTTON UX FEEDBACK
================================ */
const resumeButtons = document.querySelectorAll(".resume-buttons a");

resumeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.add("clicked");
    setTimeout(() => {
      btn.classList.remove("clicked");
    }, 300);
  });
});

/* ===============================
   TOUCH OPTIMIZATION (MOBILE)
================================ */
document.addEventListener("touchstart", function () {}, true);
