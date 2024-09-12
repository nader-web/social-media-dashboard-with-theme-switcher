


let theme = localStorage.getItem("theme") || "light";console.log(theme);

let linkedStyle = document.querySelector("#themeStylesheet");
let themeToggle = document.querySelector("#themeToggle");
if(theme === "dark") {
    themeToggle.checked = true;

}

function updateTheme() {
    if (theme === "light") {
        linkedStyle.href = "./css/light.css";
    } else {
        linkedStyle.href = "./css/dark.css";
    }
    
}

updateTheme();

themeToggle.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", theme);
    updateTheme();
});
