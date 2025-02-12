'use strict';

/**
 * add event on element
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * toggle navbar
 */
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
};

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/**
 * Handle Contact Form Submission
 */
document.querySelector(".contact-form").addEventListener("submit", async function (event) {
  event.preventDefault(); // Prevent page reload

  let formData = {
    name: document.querySelector("input[name='name']").value,
    email: document.querySelector("input[name='email_address']").value,
    message: document.querySelector("textarea[name='message']").value
  };

  let response = await fetch("http://127.0.0.1:5000/send-email", { // Change URL after deployment
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });

  if (response.ok) {
    alert("Message sent successfully!");
  } else {
    alert("Failed to send message.");
  }
});
