let currentLang = "en";

const toggleBtn = document.getElementById("lang-toggle");
const navLinks = document.querySelectorAll(".nav-links a");

toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";

    navLinks.forEach(link => {
        link.textContent = link.dataset[currentLang];
    });

    toggleBtn.textContent = currentLang === "en" ? "🇺🇸" : "🇪🇸";
});
