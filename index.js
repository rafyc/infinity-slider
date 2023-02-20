
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

  // Navigation arrows
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

});
