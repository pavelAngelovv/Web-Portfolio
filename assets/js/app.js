const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

var h= screen.height;
var w= screen.width;

document.getElementById('furnitureHome').onclick=function(){window.open('./assets/images/Screenshot 2024-08-10 at 15.17.03.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('furnitureCatalog').onclick=function(){window.open('./assets/images/Screenshot 2024-08-10 at 15.17.20.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('furnitureDetails').onclick=function(){window.open('./assets/images/Screenshot 2024-08-10 at 15.18.11.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('furnitureCreate').onclick=function(){window.open('./assets/images/Screenshot 2024-08-10 at 15.17.44.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('furnitureMobile').onclick=function(){window.open('./assets/images/Screenshot 2024-08-10 at 15.21.40.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('furnitureMobileMenu').onclick=function(){window.open('./assets/images/Screenshot 2024-08-10 at 15.21.53.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('beerHome').onclick=function(){window.open('./assets/images/Screenshot 2024-02-26 at 11.59.36.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('beerDetails').onclick=function(){window.open('./assets/images/Screenshot 2024-02-26 at 12.00.01.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('beerAccount').onclick=function(){window.open('./assets/images/Screenshot 2024-02-26 at 12.00.51.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('beerMobile').onclick=function(){window.open('./assets/images/Screenshot 2024-03-02 at 15.43.15.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('beerMobileMenu').onclick=function(){window.open('./assets/images/Screenshot 2024-03-02 at 15.43.42.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('whiskeyValid').onclick=function(){window.open('./assets/images/Screenshot 2024-02-28 at 19.45.15.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('whiskeyInvalid').onclick=function(){window.open('./assets/images/Screenshot 2024-02-28 at 19.45.59.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('whiskeyMobile').onclick=function(){window.open('./assetsimages//Screenshot 2024-02-28 at 19.45.59.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('storeList').onclick=function(){window.open('./assets/images/Screenshot 2024-02-28 at 20.12.40.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('storeDetails').onclick=function(){window.open('./assets/images/Screenshot 2024-02-28 at 20.12.14.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('bookShelfHome').onclick=function(){window.open('./assets/images/bookshelfHome.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('bookShelfDetails').onclick=function(){window.open('./assets/images/bookshelfDetails.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('bookShelfVerificationAwait').onclick=function(){window.open('./assets/images/bookshelfVerificationAwait.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('bookShelfVerificationSuccess').onclick=function(){window.open('./assets/images/bookshelfVerificationSuccess.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('bookShelfForm').onclick=function(){window.open('./assets/images/Screenshot 2024-02-28 at 21.25.46.png', '_blank', 'width='+w+', height='+h+'')}
document.getElementById('bookShelfUser').onclick=function(){window.open('./assets/images/bookshelfUser.png', '_blank', 'width='+w+', height='+h+'')}


let furnitureSlideIndex = 1;
showFurnitureSlides(furnitureSlideIndex);

function plusFurnitureSlides(n) {
  showFurnitureSlides(furnitureSlideIndex += n);
}

function currentFurnitureSlide(n) {
  showFurnitureSlides(furnitureSlideIndex = n);
}

function showFurnitureSlides(n) {
  let i;
  let furnitureSlides = document.getElementsByClassName("furnitureSlides");

  if (n > furnitureSlides.length) { furnitureSlideIndex = 1 }
  if (n < 1) { furnitureSlideIndex = furnitureSlides.length }
  for (i = 0; i < furnitureSlides.length; i++) {
    furnitureSlides[i].style.display = "none";
  }

  furnitureSlides[furnitureSlideIndex - 1].style.display = "block";
}

let beerSlideIndex = 1;
showBeerSlides(beerSlideIndex);

function plusBeerSlides(n) {
  showBeerSlides(beerSlideIndex += n);
}

function currentBeerSlide(n) {
  showBeerSlides(beerSlideIndex = n);
}

function showBeerSlides(n) {
  let i;
  let beerSlides = document.getElementsByClassName("beerSlides");

  if (n > beerSlides.length) { beerSlideIndex = 1 }
  if (n < 1) { beerSlideIndex = beerSlides.length }
  for (i = 0; i < beerSlides.length; i++) {
    beerSlides[i].style.display = "none";
  }

  beerSlides[beerSlideIndex - 1].style.display = "block";
}

let whiskeySlideIndex = 1;
showWhiskeySlides(whiskeySlideIndex);

function plusWhiskeySlides(n) {
  showWhiskeySlides(whiskeySlideIndex += n);
}

function currentWhiskeySlide(n) {
  showWhiskeySlides(whiskeySlideIndex = n);
}

function showWhiskeySlides(n) {
  let i;
  let whiskeySlides = document.getElementsByClassName("whiskeySlides");

  if (n > whiskeySlides.length) { whiskeySlideIndex = 1 }
  if (n < 1) { whiskeySlideIndex = whiskeySlides.length }
  for (i = 0; i < whiskeySlides.length; i++) {
    whiskeySlides[i].style.display = "none";
  }

  whiskeySlides[whiskeySlideIndex - 1].style.display = "block";
}

let storeSlideIndex = 1;
showStoreSlides(storeSlideIndex);

function plusStoreSlides(n) {
  showStoreSlides(storeSlideIndex += n);
}

function currentStoreSlide(n) {
  showStoreSlides(storeSlideIndex = n);
}

function showStoreSlides(n) {
  let i;
  let storeSlides = document.getElementsByClassName("storeSlides");

  if (n > storeSlides.length) { storeSlideIndex = 1 }
  if (n < 1) { storeSlideIndex = storeSlides.length }
  for (i = 0; i < storeSlides.length; i++) {
    storeSlides[i].style.display = "none";
  }

  storeSlides[storeSlideIndex - 1].style.display = "block";
}

let bookSlideIndex = 1;
showBookSlides(bookSlideIndex);

function plusBookSlides(n) {
  showBookSlides(bookSlideIndex += n);
}

function currentBookSlide(n) {
  showBookSlides(bookSlideIndex = n);
}

function showBookSlides(n) {
  let i;
  let bookSlides = document.getElementsByClassName("bookSlides");

  if (n > bookSlides.length) { bookSlideIndex = 1 }
  if (n < 1) { bookSlideIndex = bookSlides.length }
  for (i = 0; i < bookSlides.length; i++) {
    bookSlides[i].style.display = "none";
  }

  bookSlides[bookSlideIndex - 1].style.display = "block";
}
