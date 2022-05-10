// header
const header = document.querySelector("nav");

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

// Headers


// heart cklick btn

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

// part2 section and cklick elements

$(document).ready(function () {
  $(".btn-click-part2").click(function () {
    $(".part2").toggle()
  })
})

//acordion part

const accordion = document.getElementsByClassName('contentBx');
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  })
}




