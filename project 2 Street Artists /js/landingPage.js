// LANDING PAGE FUNCTION 

artistCard.addEventListener(`click`, function () {
    const IS_ARTIST_SELECTED = selectArtist.value !== `select`;
    if (IS_ARTIST_SELECTED) {
      window.localStorage.setItem(VISITOR_ARTIST_SELECTED, selectArtist.value);
      location.hash = `artists`;
    }
    
  });
  
  visitorCard.addEventListener(`click`, function () {
    location.hash = `visitor`;
    window.localStorage.setItem(VISITOR_ARTIST_SELECTED, `visitor`);
  });
  
  // LANDING PAGE FUNCTION END