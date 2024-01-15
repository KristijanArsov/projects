let selectedArtist;
// LOCATION HASH PAGES 
const landingPage = document.querySelector(`#landingPage`);
const visitorHomePage = document.querySelector(`#visitorHomePage`);
const visitorListing = document.querySelector(`#visitorListing`);
const artistHomePage = document.querySelector(`#artistHomepage`);
const artistItemsPage = document.querySelector(`#artistsItems`);
const auctionArtistPage = document.querySelector(`#auction`)
// LOGO
const logo = document.querySelectorAll(`.logo`);

//LANDING PAGE CLICKABLES
const visitorCard = document.querySelector(`.visitorCard`);
const artistCard = document.querySelector(`.artistCard`);
const selectArtist = document.querySelector(`#selectArtist`);

// VISITOR HOME PAGE CLICKABLES
const findNowBtn = document.querySelector(`.find-now-btn`);
const pictureSlide = document.querySelectorAll(`.pictureSlide`)
const carouselImg = document.querySelector(`.carousel-img`);
const textElements = document.querySelectorAll('.randomQuote');
    const descriptionElements = document.querySelectorAll('.descText');
const carouselBtnRight = document.querySelector(`.carousel_button--right`);
const carouselBtnLeft = document.querySelector(`.carousel_button--left`);
// VISITOR LISTING PAGE CLICKABLES
const cardContainer = document.querySelector(`.cardContainer`);
const filterBtn = document.querySelector(`.filterBtn`);
filterBtn.style.cursor = `pointer`;
const filterMenu = document.querySelector(`#filterMenu`)
const byType = document.querySelector(`#byType`);
const filterArtist = document.querySelector(`#filterArtist`);
const titleInput = document.querySelector(`#titleInput`)
const submitBtn = document.querySelector(`#submitBtn`)
const navFixed = document.querySelector(`.navFix`)
const maxPrice = document.querySelector('#maxInput')
const minPrice = document.querySelector('#minInput')

// ARTIST HOMEPAGE CLICKABLES
const barsBtn = document.querySelectorAll(".bars-button")
const itemsSoldSpan = document.querySelector(`.dynamicItemsSold`)
const incomeSpan = document.querySelector(`.dynamicTotalIncome`)
const allDropdowns = document.querySelectorAll(".dropdown-nav")
const artistNavName = document.querySelectorAll(`.artistNavName`);
const ctx = document.querySelector("#myChart");
const costumeCardChart = document.querySelector(`.costume-CardChart`)
const filterBtnChart = document.querySelectorAll(`.ChartBtnfilters button`)


// ARTIST ITEMS CLICKABLES
const addNewItemBtn = document.querySelector(`.addNewItem`)
const closeNewItemBtn = document.querySelector(`#closeNewItem`)
const renderItemBtn = document.querySelector(`#renderNewItem`)
const ArtistItemsCardContainer = document.querySelector(`.ArtistItemsCardContainer`);
const navFixed2 = document.querySelector(`.navFix2`)

// ARTIST ITEMS ADD NEW ITEM MENU 
const insertNewItemMenu =document.querySelector(`.insertNewItem`) 
//inputs
const newItemInputTitle = document.querySelector(`#newItemInput`)
const isPublished = document.querySelector(`#isPublished`)
const descNewItemInput = document.querySelector(`#descriptionNewItemInput`)
const priceNewItemInput = document.querySelector(`#priceNewItemInput`)
const typeNewItemInput = document.querySelector(`#typeNewItemInput`)  
const imgNewItemInput = document.querySelector(`#imageUrl`)
const editableTitle = document.querySelector('.editableTitle')

//AUCTION ARTIST 
const auctionTitle = document.querySelector(`.auctionTitle`)
const auctionCardContainer = document.querySelector(`.auctionCardContainer`)
const yourBid = document.querySelector('#yourBiding')
const bidToShow = document.querySelector('#bidToShow')
const visitorHammer = document.querySelector('.hammer')
const OtherBidToShow = document.querySelector(`#OtherBidToShow`)
const auctionTimer = document.querySelector(`#demo`)
