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

// details part

const eightcm = document.querySelector("#eightcm");

const ninecm = document.querySelector("#ninecm");

eightcm.addEventListener("click", function () {
  eightcm.classList.toggle("new-active");
})

ninecm.addEventListener("click", function () {
  ninecm.classList.toggle("news-active");
})

// img part

const images = document.querySelector(".images");
const basic = document.querySelector(".basic");
const premium = document.querySelector(".premium");
const special = document.querySelector(".special");
const gold = document.querySelector(".gold");

basic.addEventListener("click", (e) => {
  images.style.backgroundImage = "url(images/lustur2.png)";
  e.preventDefault;
})

premium.addEventListener("click", (e) => {
  images.style.backgroundImage = "url(images/lustur3.png)";
  e.preventDefault;
})

special.addEventListener("click", (e) => {
  images.style.backgroundImage = "url(images/lustur1.png)";
  e.preventDefault;
})


gold.addEventListener("click", (e) => {
  images.style.backgroundImage = "url(images/lustur3.png)";
  e.preventDefault;
})

// add heart part

const heart2 = document.querySelector(".heart2");
let like2 = document.querySelector("#heart");
let clicked2 = false;

heart2.addEventListener("click", () => {
  if (!clicked2) {
    clicked2 = true;
    heart2.innerHTML = `<i class="fa-solid fa-heart" style='color:red'></i>`;
  } else {
    clicked2 = false;
    heart2.innerHTML = `<i class="fa-regular fa-heart"></i>`;
  }
});

// table part

const detay = document.querySelector(".detay");
const tablo = document.querySelector(".table");
const tecnic = document.querySelector(".tecnic");


detay.addEventListener("click", () => {
  tablo.innerHTML = `<table cellspacing="0" cellpaddinf="0">
  <tr>
    <td>DURCHMESSER</td>
    <td>Risus commodo viverra maecenas accumsan </td>
  </tr>
  <tr>
    <td>Kette Und Höhe</td>
    <td>110CM</td>
  </tr>
  <tr>
    <td>GESAMTHÖHE</td>
    <td>Risus commodo viverra maecenas. </td>
  </tr>
  <tr>
    <td>GEWİCHT</td>
    <td>12KG</td>
  </tr>
  <tr>
    <td>Risus commodo viverra maecenas </td>
    <td>Risus commodo viver. </td>
  </tr>
</table>`;
});


tecnic.addEventListener("click", () => {
  tablo.innerHTML = `<table cellspacing="0" cellpaddinf="0">
  <tr>
    <td>DURCHMESSER</td>
    <td>70cm (auch in 80cm, 100cm und 130cm)</td>
  </tr>
  <tr>
    <td>Höhe ohne Kette</td>
    <td>110CM</td>
  </tr>
  <tr>
    <td>GESAMTHÖHE</td>
    <td>110CM BİS 200CM (VARİABEL)</td>
  </tr>
  <tr>
    <td>GEWİCHT</td>
    <td>12KG</td>
  </tr>
  <tr>
    <td>LİCHTQUELLER</td>
    <td>21XE14</td>
  </tr>
</table>`;
})


//acordion part

const accordion = document.getElementsByClassName('contentBx');
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}