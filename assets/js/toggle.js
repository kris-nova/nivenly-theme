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



// Toggle sidebar

const getSidebar = window.localStorage && window.localStorage.getItem("toggle");
const sidebarToggle = document.querySelector(".sidebar-toggle");
const toggle = document.getElementById('magicSidebar');
const isSidebar = getSidebar === "true";

if (getSidebar !== null) {
  toggle.classList.toggle("hidden", isSidebar);
}

sidebarToggle.addEventListener("click", () => {
  toggle.classList.toggle("hidden");
  window.localStorage &&
    window.localStorage.setItem(
      "toggle",
      toggle.classList.contains("hidden") ? "true" : "false",
    );
});
