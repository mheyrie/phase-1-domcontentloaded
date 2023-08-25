// Your code goes here
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
    const p = document.querySelector("#text");
    p.textContent = "This is really cool!";
});
console.log("DOM not loaded");