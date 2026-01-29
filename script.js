// ===== 1. Auto Update Footer Year =====
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// ===== 2. Dark Mode Toggle with Memory =====
const darkModeBtn = document.getElementById("darkModeBtn");

// Load saved mode
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");

    // Save preference
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// ===== 3. Button Message Interaction =====
function showMessage() {
    const msg = document.getElementById("msg");
    msg.textContent = "Thanks for visiting my portfolio 😊";
}

// ===== 4. Smooth Scroll for Internal Links =====
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// ===== 5. Simple Scroll Animation =====
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.classList.add("show");
        }
    });
});
