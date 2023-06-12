"use strict";

const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");

let selectedRating = "Satisfied";

const removeActive = () => {
  ratings.forEach((rating) => rating.classList.remove("active"));
};

// Bubbling
ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

// ratings.forEach((rating) => {
//   rating.addEventListener("click", (e) => {
//     removeActive();
//     rating.classList.add("active");
//     selectedRating = rating;
//     selectedRating = rating.querySelector("small").innerText;
//   });
// });

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br/>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
    `;
});
