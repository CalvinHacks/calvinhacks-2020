// const animeObject = anime({
//   targets: '.social',
//   translateX: (elm, index, t) => index * 50,
//   scale: 2,
//   easing: 'easeInOutSine',
//   delay: (elm, index, t) => index * 20,
//   duration: 1200,
//   loop: true,
//   direction: 'alternate',
// });

const boxesAnimation = window.anime({
  targets: '.js-box',
  translateY: [150, 50],
  backgroundColor: {
    value: (el, i, t) => {
      const r = 58 + (i * 12);
      const g = 35 + (i * 12);
      const b = 220;
      const color = `rgb(${r}, ${g}, ${b})`;
      return color;
    },
    easing: 'linear',
    duration: 500,
  },
  duration: 900,
  easing: 'easeOutElastic',
  elasticity: 500,
  // delay: (el, i, t) => { if (i == 1) { i * 20 } else { i + 0 }},
  delay: (el, i, t) => {
    if (i == 1) {
      console.log(i);
      console.log(i + 10);
      return i + 10;
    } else {
      return i * 500;
    }
  },
  loop: true,
  direction: 'alternate',
});


const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
const fragment = document.createDocumentFragment();
const grid = [17, 17];
const col = grid[0];
const row = grid[1];
const numberOfElements = col * row;

// for (let i = 0; i < numberOfElements; i++) {
//   fragment.appendChild(document.createElement('div'));
// }
for (let i = 0; i < 5; i++) {
  fragment.appendChild(document.createElement('div'));
}


staggerVisualizerEl.appendChild(fragment);

const staggersAnimation = anime.timeline({
  targets: '.stagger-visualizer div',
  easing: 'easeInOutSine',
  delay: anime.stagger(50),
  loop: true,
  autoplay: false
})
.add({
  translateX: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'x'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'x'}) }
  ],
  translateY: [
    {value: anime.stagger('-.1rem', {grid: grid, from: 'center', axis: 'y'}) },
    {value: anime.stagger('.1rem', {grid: grid, from: 'center', axis: 'y'}) }
  ],
  duration: 1000,
  scale: .5,
  delay: anime.stagger(100, {grid: grid, from: 'center'})
})
.add({
  translateX: () => anime.random(-10, 10),
  translateY: () => anime.random(-10, 10),
  delay: anime.stagger(8, {from: 'last'})
})
.add({
  translateX: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'x'}),
  translateY: anime.stagger('.25rem', {grid: grid, from: 'center', axis: 'y'}),
  rotate: 0,
  scaleX: 2.5,
  scaleY: .25,
  delay: anime.stagger(4, {from: 'center'})
})
// .add({
//   rotate: anime.stagger([90, 0], {grid: grid, from: 'center'}),
//   delay: anime.stagger(50, {grid: grid, from: 'center'})
// })
// .add({
//   translateX: 0,
//   translateY: 0,
//   scale: .5,
//   scaleX: 1,
//   rotate: 180,
//   duration: 1000,
//   delay: anime.stagger(100, {grid: grid, from: 'center'})
// })
// .add({
//   scaleY: 1,
//   scale: 1,
//   delay: anime.stagger(20, {grid: grid, from: 'center'})
// })

staggersAnimation.play();
