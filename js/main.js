const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1 ПРОВЕРКА ТЕМНОЙ ТЕМЫ НА УРОВНЕ СИСТЕМНЫХ НАСТРОЕК
if (window.matchMedia && window.matchMedia ("(prefers-color-scheme: dark)").matches) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");  
}


//2 ПРОВЕРКА ТЁМНОЙ ТЕМЫ В LOCAL STORAGE
if (localStorage.getItem("darkMode") === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add('dark');
} else if (localStorage.getItem("darkMode") === "Light") {
 btnDarkMode.classList.remove("dark-mode-btn--active");
 document.body.classList.remove("dark"); 
}

  // ЕСЛИ МЕНЯЮТСЯ СИСТЕМНЫЕ НАСТРОЙКИ МЕНЯЕМ ТЕМУ
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      const newColorScheme = event.matches ? "dark" : "Light";

      if (newColorScheme === "dark") {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
      } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
      }
    });

  // Включение ночного режима по кнопке
  btnDarkMode.onclick = function () {
    btnDarkMode.classList.toggle("dark-mode-btn--active");

    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
      localStorage.setItem("darkMode", "dark");
    } else {
      localStorage.setItem("darkMode", "Light");
    }
  };