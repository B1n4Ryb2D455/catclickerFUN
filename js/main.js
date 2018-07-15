let clicks = 0;
let clickCounter = document.querySelector(".clicks");
let paulCounter = document.querySelector(".paul");

var btn = document.querySelector('.featured-image');
btn.onclick = function clickCount() {
  clicks++;
  clickCounter.innerHTML = clicks;
  console.log(clicks);
}

var btn = document.querySelector('.paul-image');
btn.onclick = function clickCount() {
  clicks++;
  paulCounter.innerHTML = clicks;
  console.log(clicks);
}
class Cat {
  constructor(name) {
    this.name = name;
  }
}
let catOne = new Cat("Goth Kitty");
let catTwo = new Cat("Paul Kitty");

let gothKitty = document.querySelector('.gK');
gothKitty.innerHTML = `You have annoyed ${catOne.name}, congratulations...`;

let paulKitty = document.querySelector('.pK');
paulKitty.innerHTML = `You have annoyed ${catTwo.name}, congratulations...`;
