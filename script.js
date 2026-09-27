
const menuBtn = document.getElementById("menuBtn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", function () {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";

        navLinks.style.flexDirection = "column";

        navLinks.style.position = "absolute";

        navLinks.style.top = "70px";

        navLinks.style.right = "20px";

        navLinks.style.background = "#0d1424";

        navLinks.style.padding = "20px";

        navLinks.style.borderRadius = "10px";

    }

});

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 900) {

            navLinks.style.display = "none";

        }

    });

});