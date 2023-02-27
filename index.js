
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


const list = document.querySelector(".list");
const li = document.querySelectorAll("li");
const numberOfItems = li.length;
const listheight = list.getBoundingClientRect().height
const elementHeight = li[0].getBoundingClientRect().height

// gsap.set('.list', { y: `+${elementHeight}px` });

let currentPosition = 0;
let currentPositionList2 = (elementHeight * 4) * -1;
let index = 0;
var clone = list.cloneNode(true);

clone.className = 'list2';
list.after(clone);

gsap.set('.list2', { duration: 1, y: currentPositionList2 });

// const anim = (direction) => {
//   index += direction
//   const nextPosition = currentPosition + direction * elementHeight
//   const nextPositionList2 = (currentPositionList2 + direction * elementHeight);

//   // copy list 2 befor::
//   // then revers

//   gsap.to('.list', { duration: 1, y: nextPosition });
//   gsap.to('.list2', { duration: 1, y: nextPositionList2 });

//   currentPosition = nextPosition;
//   currentPositionList2 = nextPositionList2;
//   console.log(index, 'index');
//   console.log(numberOfItems);

//   if (index === 1) {
//     document.querySelector(".list2").style.transform = `translateY(${(elementHeight * index2) * -1}px)`;
//   }
//   if (index === 3) {
//     currentPosition = - elementHeight;
//   }
// }

const anim = (direction) => {
  index += direction;
  let nextPosition = currentPosition + direction * elementHeight;
  let nextPositionList2 = currentPositionList2 + direction * elementHeight;

  // Check if the user clicked next or prev to move to the first or last item
  if (index >= numberOfItems) {
    nextPosition = 0;
    nextPositionList2 = (elementHeight * 4) * -1;
    currentPosition = 0;
    currentPositionList2 = (elementHeight * 4) * -1;
    index = 0;
    gsap.set('.list', { duration: 0, y: currentPosition });
    gsap.set('.list2', { duration: 0, y: currentPositionList2 });
  } else if (index < 0) {
    nextPosition = (numberOfItems - 1) * elementHeight * -1;
    nextPositionList2 = nextPosition + (elementHeight * 4) * -1;
    currentPosition = (numberOfItems - 1) * elementHeight * -1;
    currentPositionList2 = currentPosition + (elementHeight * 4) * -1;
    index = numberOfItems - 1;
    gsap.set('.list', { duration: 0, y: currentPosition });
    gsap.set('.list2', { duration: 0, y: currentPositionList2 });
  }

  gsap.to('.list', { duration: 1, y: nextPosition });
  gsap.to('.list2', { duration: 1, y: nextPositionList2 });

  currentPosition = nextPosition;
  currentPositionList2 = nextPositionList2;

  console.log(index, 'index');
};


$('.button-next').on('click', () => {
  anim(1);
});

$('.button-prev').on('click', () => {
  anim(-1);
});
