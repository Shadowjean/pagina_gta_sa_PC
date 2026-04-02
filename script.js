document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme-button");
  if (!themeButton) return;

  const savedMode = localStorage.getItem("theme-mode");
  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "Tema claro";
  } else {
    themeButton.textContent = "Tema oscuro";
  }

  themeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    themeButton.textContent = isDark ? "Tema claro" : "Tema oscuro";
    localStorage.setItem("theme-mode", isDark ? "dark" : "light");
  });
});
