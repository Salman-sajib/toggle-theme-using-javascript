const body = document.querySelector("body");
const modeToggle = body.querySelector(".mode-toggle");

// ===================================================

// modeToggle.addEventListener("click", () => {
//   if (body.classList.contains("dark-mode")) {
//     body.classList.remove("dark-mode");
//   } else {
//     body.classList.add("dark-mode");
//   }
// });

// ===================================================

let isDarkMode = localStorage.getItem("dark-mode") === "true";

function setMode(isDark) {
  if (isDark) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
  isDarkMode = isDark;
  localStorage.setItem("dark-mode", isDark);
}
setMode(isDarkMode);

modeToggle.addEventListener("click", () => {
  setMode(!isDarkMode);
});

// ===================================================

// const prefersDarkMode = window.matchMedia(
//   "(prefers-color-scheme: dark)"
// ).matches;

// let isDarkMode = prefersDarkMode;

// function setMode(isDark) {
//   if (isDark) {
//     body.classList.add("dark-mode");
//   } else {
//     body.classList.remove("dark-mode");
//   }
//   isDarkMode = isDark;
//   localStorage.setItem("dark-mode", isDark);
// }

// setMode(isDarkMode);

// modeToggle.addEventListener("click", () => {
//   setMode(!isDarkMode);
// });
