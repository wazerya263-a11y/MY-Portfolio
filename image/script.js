const track = document.querySelector(".certificate-track");
const slides = document.querySelectorAll(".certificate-card");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".indicators");

let index = 0;

console.log("✅ JS Loaded");

function showSlide(n) {
  index = (n + slides.length) % slides.length;
  console.log("➡️ Changing to slide:", index);
  track.style.transform = `translateX(${-index * 100}%)`;

  // تحديث الدوائر
  const dots = dotsContainer.querySelectorAll("span");
  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[index]) dots[index].classList.add("active");
}

// إنشاء الدوائر
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

prevBtn.addEventListener("click", () => {
  console.log("⬅️ Prev clicked");
  showSlide(index - 1);
});

nextBtn.addEventListener("click", () => {
  console.log("➡️ Next clicked");
  showSlide(index + 1);
});
