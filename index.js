
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
console.log("List cloned!");

const anim = (direction) => {
  index += direction
  const nextPosition = currentPosition + direction * elementHeight
  const nextPositionList2 = (currentPositionList2 + direction * elementHeight);

  gsap.to('.list', { duration: 1, y: nextPosition });
  gsap.to('.list2', { duration: 1, y: nextPositionList2 });

  currentPosition = nextPosition;
  currentPositionList2 = nextPositionList2;
  console.log(index, 'index');
  console.log(numberOfItems);

  if (index === 1) {
    let index2 = 3
    document.querySelector(".list2").style.transform = `translateY(${(elementHeight * index2) * -1}px)`;
    index -= 1
  }
}

$('.button-next').on('click', () => {
  anim(1);
});

$('.button-prev').on('click', () => {
  anim(-1);
});


