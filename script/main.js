let show_all = document.querySelector("#show_all_btn");
let show_app = document.querySelector("#apps_btn");
let show_ecom = document.querySelector("#ecom_btn");

let ecommerce = document.querySelectorAll(".ecommerce");
let apps = document.querySelectorAll(".apps");

show_ecom.addEventListener("click", (e) => {
  apps.forEach((e) => {
    e.style.display = "none";
  });

  ecommerce.forEach((e) => {
    e.style.display = "flex";
  });

  e.target.style.backgroundColor = "black";
  e.target.style.color = "white";
  show_all.style.backgroundColor = "transparent";
  show_all.style.color = "black";
  show_app.style.backgroundColor = "transparent";
  show_app.style.color = "black";
});

show_app.addEventListener("click", (e) => {
  ecommerce.forEach((e) => {
    e.style.display = "none";
  });

  apps.forEach((e) => {
    e.style.display = "flex";
  });
  e.target.style.backgroundColor = "black";
  e.target.style.color = "white";
  show_all.style.backgroundColor = "transparent";
  show_all.style.color = "black";
  show_ecom.style.backgroundColor = "transparent";
  show_ecom.style.color = "black";
});

show_all.addEventListener("click", (e) => {
  ecommerce.forEach((e) => {
    e.style.display = "flex";
  });

  apps.forEach((e) => {
    e.style.display = "flex";
  });
  e.target.style.backgroundColor = "black";
  e.target.style.color = "white";
  show_app.style.backgroundColor = "transparent";
  show_app.style.color = "black";
  show_ecom.style.backgroundColor = "transparent";
  show_ecom.style.color = "black";
});

//_____________________________________________________sliding_img

let item_1 = document.querySelector(".sliding_background_img");
let sliding_img_div = document.querySelector(".sliding_img_div");
let sliding_img = document.getElementById("sliding_img");
// let sliding_circle = document.querySelector(".slider_circle");

item_1.addEventListener("mousemove", (e) => {
  let width = e.offsetX;

  let x = width;

  if ((x > 0) & (x < 347)) {
    sliding_img_div.style.clip = `rect(0px ${x}px 1000px 0px)`;
    // sliding_circle.style.left = `${x - 15}px`;
  }
});

// let magnifier = document.querySelector('.img_magnifier')
let magnified_img = document.querySelector("#zoomed_image_magnified");
let item_2 = document.querySelector("#item_image_2");
item_2.addEventListener("mousemove", (e) => {
  let x = e.offsetX;
  let y = e.offsetY;
  // magnifier.style.top = `${y}px`;
  // magnifier.style.left = `${x}px`;
  // magnifier.style.cursor = 'none';
  // console.log("x=",x);
  // console.log(y);
  if (x > 15 && y > 5 && x < 260 && y < 170) {
    magnified_img.style.clipPath = `circle(15% at ${x}px  ${y}px)`;
  }
});
