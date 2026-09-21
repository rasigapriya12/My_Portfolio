function viewWork() {
    document.getElementById("skills").scrollIntoView({
        behavior: "smooth"
    });
}

function sendEmail() {
    window.location.href =
        "mailto:yourmail@gmail.com?subject=Portfolio Contact";
}

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        let section = document.querySelector(
            this.getAttribute("href")
        );

        section.scrollIntoView({
            behavior: "smooth"
        });
    });
});
