"use strict";

const plusBtn = document.querySelector(".fa-plus");

plusBtn.addEventListener("click", rotated);

function rotated() {
    plusBtn.classList.toggle("rotated");
}
