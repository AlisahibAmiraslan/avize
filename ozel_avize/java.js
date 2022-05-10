
const likeBtn = document.querySelector(".like_btn");
let heart = document.querySelector("#heart");
let count = document.querySelector("#count");

let clicked = false;

likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    heart.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    heart.innerHTML = `<i class="fa-regular fa-heart"></i>`;
    count.textContent--;
  }
});

// shoping-cart btn

const shopingBtn = document.querySelector(".shoping-btn");
let shoping = document.querySelector("#shoping");
let countShp = document.querySelector("#count_shp");

let clicked_shoping = false;

shopingBtn.addEventListener("click", () => {
  if (!clicked_shoping) {
    clicked_shoping = true;
    countShp.textContent++;
  } else {
    clicked_shoping = false;
    countShp.textContent--;
  }
});

// search

const icon = document.querySelector(".icon");

const search = document.querySelector(".search");

icon.onclick = function () {
  search.classList.toggle("active");
}

// menu active part

$(document).ready(function () {
  $(".hamburger-btn").click(function () {
    $(".menu-li").toggleClass("active-menu")
  });
});


//acordion part

const accordion = document.getElementsByClassName('contentBx');
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}