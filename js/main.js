

class Cat {

  constructor(name, clicks) {
    this.name = name;
    this.clicks = clicks;
  }

}

let clicks = 0;
let clickCounter = document.querySelector(".clicks");

let btn = document.querySelector('img');
btn.onclick = function clickCount() {
  clicks++;
  clickCounter.innerHTML = clicks;
  console.log(clicks);
}

let theCatPic = document.querySelectorAll('.catPic');

let catOne = new Cat("Goth Kitty",);
let catTwo = new Cat("Paul Kitty");
let catThree = new Cat("Sime Kitty",);
let catFour = new Cat("Toodles Kitty");
let catFive = new Cat("Farva Kitty");










