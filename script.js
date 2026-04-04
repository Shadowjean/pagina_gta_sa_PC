document.addEventListener("DOMContentLoaded", () => {
  const themeButton = document.getElementById("theme-button");

  if (!themeButton) return;

  const savedMode = localStorage.getItem("theme-mode");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  const setTheme = (isDark) => {
    document.body.classList.toggle("dark-mode", isDark);
    themeButton.textContent = isDark ? "Tema claro" : "Tema oscuro";
    localStorage.setItem("theme-mode", isDark ? "dark" : "light");
  };

  if (savedMode === "dark") {
    setTheme(true);
  } else if (savedMode === "light") {
    setTheme(false);
  } else {
    setTheme(prefersDark);
  }

  themeButton.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    setTheme(isDark);
  });
});
