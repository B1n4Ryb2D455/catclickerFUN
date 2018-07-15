
let clicks = 0;
let clickCounter = document.querySelector(".clicks");

var btn = document.querySelector('.featured-image');
btn.onclick = function clickCount() {
  clicks++;
  clickCounter.innerHTML = clicks;
  console.log(clicks);
}
class Cat {
  constructor(name) {
    this.name = name;
  }
}

let catOne = new Cat("Goth Kitty");
let catTwo = new Cat("Paul Kitty");
let catThree = new Cat("Sime Kitty");
let catFour = new Cat("Toodles Kitty");
let catFive = new Cat("Farva Kitty");
