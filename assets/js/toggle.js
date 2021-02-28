// Toggle theme

const getTheme = window.localStorage && window.localStorage.getItem("theme");
const themeToggle = document.querySelector(".theme-toggle");
const isDark = getTheme === "dark";

if (getTheme !== null) {
  document.body.classList.toggle("dark-theme", isDark);
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  window.localStorage &&
  window.localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-theme") ? "dark" : "light",
  );
});



// Toggle sidebar left

const getSidebarL = window.localStorage && window.localStorage.getItem("toggleL");
const sidebarToggleL = document.querySelector(".sidebar-toggle-right");
const toggleL = document.getElementById('magicSidebarLeft');
const isSidebarL = getSidebarL === "true";

if (getSidebarL !== null) {
  toggleL.classList.toggle("hidden", isSidebarL);
}

sidebarToggleL.addEventListener("click", () => {
  toggleL.classList.toggle("hidden");
  window.localStorage &&
    window.localStorage.setItem(
      "toggleL",
      toggleL.classList.contains("hidden") ? "true" : "false",
    );
});

// Toggle sidebar right

const getSidebarR = window.localStorage && window.localStorage.getItem("toggleR");
const sidebarToggleR = document.querySelector(".sidebar-toggle-right");
const toggleR = document.getElementById('magicSidebarRight');
const isSidebarR = getSidebarR === "true";

if (getSidebarR !== null) {
  toggleR.classList.toggle("hidden", isSidebarR);
}

sidebarToggleR.addEventListener("click", () => {
  toggleR.classList.toggle("hidden");
  window.localStorage &&
  window.localStorage.setItem(
      "toggleR",
      toggleR.classList.contains("hidden") ? "true" : "false",
  );
});