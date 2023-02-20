
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





var $tickerWrapper = $(".scroll");
var $list = $tickerWrapper.find("ul.list");
var $clonedList = $list.clone();
var listWidth = 0;

$list.find("li").each(function (i) {
  listWidth += $(this, i).outerHeight(true);
});

var endPos = $tickerWrapper.height() - listWidth;

$list.add($clonedList).css({
  "height": listWidth + "px"
});

$clonedList.addClass("cloned").appendTo($tickerWrapper);

//TimelineMax
var infinite = new TimelineMax({ repeat: -1, paused: true });
var time = 20;

infinite
  .fromTo($list, time, { rotation: 0.01, y: 0 }, { force3D: true, y: -listWidth, ease: Linear.easeNone }, 0)
  .fromTo($clonedList, time, { rotation: 0.01, y: listWidth }, { force3D: true, y: 0, ease: Linear.easeNone }, 0)
  .set($list, { force3D: true, rotation: 0.01, y: listWidth })
  .to($clonedList, time, { force3D: true, rotation: 0.01, y: -listWidth, ease: Linear.easeNone }, time)
  .to($list, time, { force3D: true, rotation: 0.01, y: 0, ease: Linear.easeNone }, time)
  .progress(1).progress(0)
  .play();

