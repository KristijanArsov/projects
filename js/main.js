// navbar offcanvas
$(function () {
    'use strict'

    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    })
  })
// Filter buttons for the cards
document
  .querySelector("#filter-marketing")
  .addEventListener("change", filterMarketing);
document
  .querySelector("#filter-coding")
  .addEventListener("change", filterCoding);
document
  .querySelector("#filter-design")
  .addEventListener("change", filterDesign);

// filter marketing if the marketing buttons is clicked
function filterMarketing() {
  hideAllCards();

  if (document.querySelector("#filter-marketing").checked) {
    var marketingCards = document.querySelectorAll(".marketing");
    var marketingCol = document.querySelectorAll(".costume-colM");
    var codeCol = document.querySelectorAll(".costume-colC");
    var designCol = document.querySelectorAll(".costume-colD");
    marketingCards.forEach((marketingCards) => {
      marketingCards.style.display = "inline-block";
    });
    marketingCol.forEach((marketingCol) => {
      marketingCol.style.display = "inline-block";
    });
    codeCol.forEach((codeCol) => {
      codeCol.style.display = "none";
    });
    designCol.forEach((designCol) => {
      designCol.style.display = "none";
    });
    document.querySelector("#filter-coding").checked = false;
    document.querySelector("#filter-design").checked = false;
    showMoreBtn.style.display = 'none';
  } else {
    showAllCards();
    showAllCol();
  }
}
// filter code if the coding buttons is clicked
function filterCoding() {
  hideAllCards();

  if (document.querySelector("#filter-coding").checked) {
    var codingCards = document.querySelectorAll(".code");
    var marketingCol = document.querySelectorAll(".costume-colM");
    var codeCol = document.querySelectorAll(".costume-colC");
    var designCol = document.querySelectorAll(".costume-colD");
    codingCards.forEach((codingCards) => {
      codingCards.style.display = "inline-block";
    });
    codeCol.forEach((codeCol) => {
      codeCol.style.display = "inline-block";
    });
    marketingCol.forEach((marketingCol) => {
      marketingCol.style.display = "none";
    });
    designCol.forEach((designCol) => {
      designCol.style.display = "none";
    });
    document.querySelector("#filter-marketing").checked = false;
    document.querySelector("#filter-design").checked = false;
    showMoreBtn.style.display = 'none';
  } else {
    showAllCards();
    showAllCol();
  }
}

// filter design if the design buttons is clicked
function filterDesign() {
  hideAllCards();

  if (document.querySelector("#filter-design").checked) {
    var designCards = document.querySelectorAll(".design");
    var designCol = document.querySelectorAll(".costume-colD");
    var marketingCol = document.querySelectorAll(".costume-colM");
    var codeCol = document.querySelectorAll(".costume-colC");
    designCards.forEach((designCards) => {
      designCards.style.display = "inline-block";
    });
    designCol.forEach((designCol) => {
      designCol.style.display = "inline-block";
    });
    marketingCol.forEach((marketingCol) => {
      marketingCol.style.display = "none";
    });
    codeCol.forEach((codeCol) => {
      codeCol.style.display = "none";
    });
    document.querySelector("#filter-coding").checked = false;
    document.querySelector("#filter-marketing").checked = false;
    showMoreBtn.style.display = 'none';
  } else {
    showAllCards();
    showAllCol();
  }
}
// functions for the col and the cards
function hideAllCards() {
  var allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.style.display = "none";
  });
}
function showAllCards() {
  var allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    card.style.display = "inline-block";
  });
}

function showAllCol() {
  var allCol = document.querySelectorAll(".costumeCol");
  allCol.forEach((allCol) => {
    allCol.style.display = "inline-block";
  });
}
// load more button
const cardsVisible = document.querySelectorAll(".costumeinvisible")
let showMoreBtn = document.querySelector(".showmoreBtn")
let visibleCards = 0;
showMoreBtn.addEventListener("click", function(){
    for (let i = visibleCards; i < visibleCards + 5; i++){
        if(cardsVisible[i]){
          cardsVisible[i].style.display = "inline-block";
        }
    }
    visibleCards += 5;
    if(visibleCards >= cardsVisible.length){
       showMoreBtn.style.display = "none";
    }
})