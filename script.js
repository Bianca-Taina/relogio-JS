const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const toggleBtn = document.getElementById("toggleGlow");
const clock = document.querySelector(".clock");


function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  timeEl.textContent = `${hours}:${minutes}:${seconds}`;

  const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
  dateEl.textContent = now.toLocaleDateString("pt-BR", options);
}

setInterval(updateClock, 1000);
updateClock();

toggleBtn.onclick = () => {
  clock.classList.toggle("low-glow");
};
