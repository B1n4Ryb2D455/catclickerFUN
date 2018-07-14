let clicks = 0;
let clickCounter = document.querySelector(".clicks");

var btn = document.querySelector('.featured-image');
btn.onclick = function clickCount() {
  clicks++;
  clickCounter.innerHTML = clicks;
  console.log(clicks);
}