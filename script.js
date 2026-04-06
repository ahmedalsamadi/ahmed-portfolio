const canvas = document.getElementById("starfield");
const ctx = canvas.getContext("2d");
const stars = [];
const STAR_COUNT = 130;
let pointerBoost = 0;
let mouseX = 0;
let mouseY = 0;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStar() {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 1.8 + 0.3,
    speed: Math.random() * 0.35 + 0.12,
    alpha: Math.random() * 0.7 + 0.3
  };
}

function initStars() {
  stars.length = 0;
  for (let i = 0; i < STAR_COUNT; i += 1) {
    stars.push(createStar());
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const speedMultiplier = 1 + pointerBoost * 0.08;

  for (const star of stars) {
    star.y += star.speed * speedMultiplier;
    if (star.y > canvas.height) {
      star.y = -3;
      star.x = Math.random() * canvas.width;
    }

    const dx = star.x - mouseX;
    const dy = star.y - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const glow = Math.max(0, 1 - distance / 160);

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size + glow * 1.3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
  }

  pointerBoost *= 0.93;
  requestAnimationFrame(drawStars);
}

function setupRevealOnScroll() {
  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupMobileNav() {
  const toggle = document.getElementById("nav-toggle");
  const menu = document.getElementById("nav-menu");
  if (!toggle || !menu) {
    return;
  }

  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupBackgroundInteraction() {
  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });

  window.addEventListener("pointerdown", () => {
    pointerBoost = Math.min(pointerBoost + 7, 12);
  });

  window.addEventListener("scroll", () => {
    pointerBoost = Math.min(pointerBoost + 0.4, 8);
  });
}

function setCurrentYear() {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

function setupContactStatus() {
  const status = document.getElementById("form-status");
  if (!status) return;

  const params = new URLSearchParams(window.location.search);
  if (params.get("sent") === "1") {
    status.hidden = false;
    status.textContent = "Thanks! Your message was sent successfully.";
  }
}

function init() {
  resizeCanvas();
  initStars();
  drawStars();
  setupRevealOnScroll();
  setupMobileNav();
  setupBackgroundInteraction();
  setCurrentYear();
  setupContactStatus();
}

window.addEventListener("resize", () => {
  resizeCanvas();
  initStars();
});

init();
