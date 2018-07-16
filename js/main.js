
let model = {
  currentCat: null,
  cats: [
    {
      clickCount: 0,
      name: 'Goth Kitty',
      imgSrc: '../img/blackcat.jpg',
      imgAttribution: "https://pixbay.com"
    }
    {
      clickCount: 0;
      name: 'Paul Kitty',
      imgSrc: '../img/paulcat.jpg',
      imgAttribution: "https://pixbay.com"
    }
    {
      clickCount: 0;
      name: 'Sime Kitty';
      imgSrc: '../img/simecat.jpg',
      imgAttribution: "https://pixbay.com"
    }
    {
      clickCount: 0;
      name: 'Tootles Kitty',
      imgSrc: '../img/toodlescat.jpg',
      imgAttribution: "https://pixbay.com"
    }
    {
      clickCount: 0;
      name: 'Farva Kitty',
      imgSrc: '../img/farvacat.jpg',
      imgAttribution: "https://pixbay.com"
    }
  ]
};

let octopus = {

  init: function () {
    model.currentCat = model.cats[0];

    catsListView.init();
    catView.init();
  },

  getCurrentCat: function() {
    return model.currentCat;
  },

  getCats: function() {
    return model.cats;
  },

  setCurrentCat: function(cat) {
    model.currentCat = cat;
  },

  incrementCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  }
};

var catView = {

  init: function () {
    this.catElem = document.getElementById('cat');
    this.catNameElem = document.getElementById('cat-name');
    this.catImageElem = document.getElementById('cat-img');
    this.countElem = document.getElementById('cat-count');

    this.catImageElem.addEventListener('click', function () {
    octopus.incrementCounter();
    });

    this view (update the DOM elements with the right values)
    this.render();
  },

  render: function () {
    var currentCat = octopus.getCurrentCat();
    this.countElem.textContent = currentCat.clickCount;
    this.catNameElem.textContent = currentCat.name;
    this.catImageElem.src = currentCat.imgSrc;
  }
};

var catsListView = {

  init: function() {
    this.catListElem = document.getElementById('cat-list');

    this.render();
  },

  render: function() {
    let cat, elem, i;
    let cats = octopus.getCats();

    this.catListElem.innerHTML = '';

    for (i = 0; i < cats.length; i++) {
      cat = cats[i];

      elem = document.createElement('li');
      elem.textContent = cat.name;

      elem.addEventListener('click', (function(catCopy) {
        return function() {
          octopus.setCurrentCat(catCopy);
          catView.render();
        };
      })(cat));

      this.catListElem.appendChild(elem);
    }
  }
};

// class Cat {

//   constructor(name, clicks) {
//     this.name = name;
//     this.clicks = clicks;
//   }

// }

// let clicks = 0;
// let clickCounter = document.querySelector(".clicks");

// let btn = document.querySelector('img');
// btn.onclick = function clickCount() {
//   clicks++;
//   clickCounter.innerHTML = clicks;
//   console.log(clicks);
// }

// let theCatPic = document.querySelectorAll('.catPic');

// let catOne = new Cat("Goth Kitty",);
// let catTwo = new Cat("Paul Kitty");
// let catThree = new Cat("Sime Kitty",);
// let catFour = new Cat("Toodles Kitty");
// let catFive = new Cat("Farva Kitty");










