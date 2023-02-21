
// var swiper = new Swiper(".flex-parent", {
//   loopedSlides: 5,
//   loop: true,
//   slidesPerView: "auto",
//   freeMode: true,
//   mousewheel: {
//     releaseOnEdges: true,
//   },
// });

// var thumb = document.querySelectorAll(".image");

// thumb.forEach(function (image, index) {
//   var delay = index * 90;
//   image.classList.add("fadeInSlide");
//   image.style.animationDelay = delay + "ms";
// });

// console.log('hello');

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 700,

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

});

var fullElement = document.querySelector(".list");
var fullHeight = fullElement.scrollHeight;

const elements = document.querySelectorAll("h1");
const singleElement = elements[0];
const numberElements = elements.length;
const elementHeight = singleElement.clientHeight;

var listCopy = document.querySelector(".list");
var clone = listCopy.cloneNode(true);
clone.className = 'list2';
listCopy.after(clone);
console.log("List cloned!");

const heightToTranslate = fullHeight;
const cloneList = document.querySelector(".list2");
// cloneList.style.transform = `translate(0px, ${!heightToTranslate}px)`;
console.log(elementHeight);

var t1 = new TimelineMax({ paused: true });
var t2 = new TimelineMax({ paused: true })

t1.to(".list h1", { y: elementHeight, duration: 1 })
t2.fromTo(".list2 h1", { y: -fullHeight }, { y: -fullHeight + elementHeight, duration: 1 })

var itemToClick = document.querySelector(".circle-right");
itemToClick.addEventListener("click", function () {
  t1.timeScale(1).play();
  t2.timeScale(1).play();
});

var itemToClick = document.querySelector(".circle-left");
itemToClick.addEventListener("click", function () {
  t1.timeScale(1).reverse();
  t2.timeScale(1).reverse();
});

