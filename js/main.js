
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










