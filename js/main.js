// ค่า default
const DEFAULTS = { theme: "theme1", fontsize: "medium" };

function applySettings() {
  const theme = localStorage.getItem("site-theme") || DEFAULTS.theme;
  const fontsize = localStorage.getItem("site-fontsize") || DEFAULTS.fontsize;

  document.documentElement.setAttribute("data-theme", theme);
  document.documentElement.setAttribute("data-fontsize", fontsize);

  // highlight เมนูที่ active ตามหน้าปัจจุบัน
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === current);
  });
}

document.addEventListener("DOMContentLoaded", applySettings);

function setSetting(key, value) {
  localStorage.setItem("site-" + key, value);
  applySettings();
}