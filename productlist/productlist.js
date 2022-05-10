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


// heart

$(document).ready(function () {
  $(".like_btn2").click(function () {
    $(this).html("<i class='fa-solid fa-heart' style='color:red'>")

  })
})

// grid show hide

$(document).ready(function () {
  $(".grid").click(function () {
    $(".boxes").slideDown(1000)
  })
})

$(document).ready(function () {
  $(".list").click(function () {
    $(".boxes").slideUp(1000)
  })
})

