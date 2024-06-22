document.querySelectorAll(".wrap button").forEach((button) => {
    button.addEventListener("click", () => {
        const brandName = button.childNodes[0].textContent.trim();
        document.querySelector(".info h1").textContent = brandName;
    });
});
