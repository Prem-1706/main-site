// Get elements by ID
const startBtn = document.getElementById("startBtn");
const effectsBtn = document.getElementById("effectsBtn");
const adviceBtn = document.getElementById("adviceBtn");
const thankBtn = document.getElementById("thankBtn");

const climateChangeSection = document.getElementById("climateChange");
const effectsSection = document.getElementById("effects");
const adviceSection = document.getElementById("advice");
const footer = document.getElementById("footer");

// Event listeners for buttons
startBtn.addEventListener("click", () => {
    document.getElementById("intro").classList.add("hidden");
    climateChangeSection.classList.remove("hidden");
});

effectsBtn.addEventListener("click", () => {
    climateChangeSection.classList.add("hidden");
    effectsSection.classList.remove("hidden");
});

adviceBtn.addEventListener("click", () => {
    effectsSection.classList.add("hidden");
    adviceSection.classList.remove("hidden");
});

thankBtn.addEventListener("click", () => {
    adviceSection.classList.add("hidden");
    footer.classList.remove("hidden");
});
