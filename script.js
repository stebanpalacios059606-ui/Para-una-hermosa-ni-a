const openBtn = document.getElementById("openBtn");
const againBtn = document.getElementById("againBtn");
const intro = document.querySelector(".intro");
const message = document.getElementById("message");
const petals = document.getElementById("petals");
const sparkles = document.getElementById("sparkles");

function makePetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.textContent = Math.random() > 0.5 ? "🌼" : "🌻";
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (12 + Math.random() * 15) + "px";
  petal.style.setProperty("--drift", (-100 + Math.random() * 200) + "px");
  petal.style.animationDuration = (5 + Math.random() * 5) + "s";
  petals.appendChild(petal);
  setTimeout(() => petal.remove(), 11000);
}

function sparkleBurst() {
  for (let i = 0; i < 28; i++) {
    const s = document.createElement("span");
    s.className = "spark";
    s.style.left = (35 + Math.random() * 30) + "vw";
    s.style.top = (30 + Math.random() * 35) + "vh";
    s.style.animationDelay = Math.random() * .8 + "s";
    sparkles.appendChild(s);
    setTimeout(() => s.remove(), 2800);
  }
}

function openGift() {
  intro.classList.add("hidden");
  message.classList.remove("hidden");
  sparkleBurst();
  for (let i = 0; i < 16; i++) {
    setTimeout(makePetal, i * 130);
  }
}

function showIntro() {
  message.classList.add("hidden");
  intro.classList.remove("hidden");
}

openBtn.addEventListener("click", openGift);
againBtn.addEventListener("click", showIntro);

setInterval(() => {
  if (!message.classList.contains("hidden")) makePetal();
}, 900);
