// logo Home Btn
logo.forEach((logo) => {
  logo.addEventListener(`click`, function () {
    location.hash = ``;
    selectArtist.value = `select`
    $('.hamburger').show()
  });
  
});

function fetchData(whereToRender) {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((data) => {
        const optionCreate = document.createElement(`option`);
        optionCreate.value = data.name;
        optionCreate.text = data.name;
        whereToRender.style.fontSize = `14px`;
        whereToRender.append(optionCreate);
      });
    });
}
function resetFilters() {
  titleInput.value = ``;
  byType.value = `Choose Type`;
  filterArtist.value = `Choose Artist`;
  maxPrice.value = ``
  minPrice.value = ``
}

function itemsType(whereToRender) {
  itemTypes.forEach((item) => {
    const optionCreate = document.createElement(`option`);
    optionCreate.value = item;
    optionCreate.text = item;
    whereToRender.style.fontSize = `14px`;
    whereToRender.append(optionCreate);
  });
}

let localStorage = window.localStorage.getItem(STORE_ITEMS_KEY);
function handleRoute() {
  const IS_SELECTED = window.localStorage.getItem(VISITOR_ARTIST_SELECTED);

  if (!IS_SELECTED) {
    location.hash = ``;
  }

  let route;

  route = location.hash;

  switch (route) {
    case ``:
      landingPage.style.display = `block`;
      visitorHomePage.style.display = `none`;
      visitorListing.style.display = `none`;
      artistHomePage.style.display = `none`;
      artistItemsPage.style.display = `none`;
      auctionArtistPage.style.display = `none`;
      fetchData(selectArtist);
      break;
    case `#visitor`:
      landingPage.style.display = `none`;
      visitorHomePage.style.display = `block`;
      visitorListing.style.display = `none`;
      artistHomePage.style.display = `none`;
      artistItemsPage.style.display = `none`;
      auctionArtistPage.style.display = `none`;
      break;
    case `#visitor/listing`:
      landingPage.style.display = `none`;
      visitorHomePage.style.display = `none`;
      visitorListing.style.display = `block`;
      artistHomePage.style.display = `none`;
      artistItemsPage.style.display = `none`;
      auctionArtistPage.style.display = `none`;
      fetchData(filterArtist);
      if (localStorage !== null)
        items = JSON.parse(window.localStorage.getItem(STORE_ITEMS_KEY));
      items.forEach((item) => {
        renderCards(cardContainer, item);
      });
      itemsType(byType);
      break;
    case `#artists`:
      artistHomePage.style.display = `Block`;
      landingPage.style.display = `none`;
      visitorHomePage.style.display = `none`;
      visitorListing.style.display = `none`;
      artistItemsPage.style.display = `none`;
      auctionArtistPage.style.display = `none`;
      artistNav();
      selectedArtist = items.filter(
        (artist) =>
          artist.artist === window.localStorage.getItem(VISITOR_ARTIST_SELECTED)
      );
      let totalSales = 0;
      selectedArtist.forEach((sale) => {
        totalSales += sale.priceSold;
        incomeSpan.textContent = `$${totalSales}`;
      });
      itemsSoldSpan.textContent = `${selectedArtist.length} / ${selectedArtist.length}`;
      break;
    case `#artists/items`:
      artistItemsPage.style.display = `block`;
      artistHomePage.style.display = `none`;
      landingPage.style.display = `none`;
      visitorHomePage.style.display = `none`;
      visitorListing.style.display = `none`;
      auctionArtistPage.style.display = `none`;
      itemsType(typeNewItemInput);
      artistNav();
      if(items != null) {
        selectedArtist = items.filter(
          (artist) =>
            artist.artist === window.localStorage.getItem(VISITOR_ARTIST_SELECTED)
        );
        selectedArtist.forEach((artist) =>
          personalArtistCard(ArtistItemsCardContainer, artist)
        );
      }
      if (window.localStorage.getItem(STORE_ITEMS_KEY) !== null)
        items = JSON.parse(window.localStorage.getItem(STORE_ITEMS_KEY));
      
      
      break;
    case `#auction`:
      auctionArtistPage.style.display = `block`;
      artistItemsPage.style.display = `none`;
      artistHomePage.style.display = `none`;
      landingPage.style.display = `none`;
      visitorHomePage.style.display = `none`;
      visitorListing.style.display = `none`;
      artistNav();
      if (window.localStorage !== null){
        items = JSON.parse(window.localStorage.getItem('sendToAuction'));
        if(items != null){
          personalArtistCard(auctionCardContainer, items[0])
          $(".auctionCardContainer").show()
          getTimer()
        }
      }
       
      break;
    default:
      landingPage.style.display = `none`;
      visitorHomePage.style.display = `none`;
      visitorListing.style.display = `none`;
      artistHomePage.style.display = `none`;
      artistItemsPage.style.display = `none`;
      auctionArtistPage.style.display = `none`;
      break;
  }
}

window.addEventListener(`hashchange`, handleRoute);
window.addEventListener(`load`, handleRoute);
