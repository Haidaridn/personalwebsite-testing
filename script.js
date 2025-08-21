const cursor = document.querySelector(".custom-cursor");
const hero = document.querySelector(".section-hero");

document.addEventListener("mousemove", (e) => {
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// Opsional: efek "klik pixel"
document.addEventListener("click", () => {
  cursor.style.transform += " scale(1.5)";
  setTimeout(() => {
    cursor.style.transform = cursor.style.transform.replace(" scale(1.5)", "");
  }, 150);
});

// Fokus input / textarea → cursor jadi keyboard pixel
document.querySelectorAll("input, textarea").forEach((el) => {
  el.addEventListener("focus", () => cursor.classList.add("text"));
  el.addEventListener("blur", () => cursor.classList.remove("text"));
});

// generate 25 pixel random
for (let i = 0; i < 25; i++) {
  const pixel = document.createElement("div");
  pixel.classList.add("pixel");

  // posisi acak
  pixel.style.top = Math.random() * 100 + "%";
  pixel.style.left = Math.random() * 100 + "%";

  // delay animasi acak biar gak barengan
  pixel.style.animationDelay = Math.random() * 6 + "s";

  // ukuran random
  let size = 4 + Math.random() * 8;
  pixel.style.width = size + "px";
  pixel.style.height = size + "px";

  hero.appendChild(pixel);
}
