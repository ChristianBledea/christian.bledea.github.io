document.addEventListener("DOMContentLoaded", function() {
    const titles = document.querySelectorAll(".title");
    const sections = document.querySelectorAll(".info");

    titles.forEach((title, index) => {
        title.addEventListener("click", function() {
            const section = sections[index];
            if (section.style.display === "none" || section.style.display === "") {
                section.style.display = "block";
            } else {
                section.style.display = "none";
            }
        });
    });
});