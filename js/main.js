class Cat {
  constructor(name, selfie) {
    this.name = name;
  }
}
let catOne = new Cat("Goth Kitty");
let catTwo = new Cat("Paul");

let clicks = 0;
let clickCounter = document.querySelector('.clicks');

var btn = document.querySelector('.featured-image');
btn.onclick = function clickCount() {
  clicks++;
  clickCounter.innerHTML = clicks;
  console.log(clicks);
}
