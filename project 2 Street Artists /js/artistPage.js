// ARTIST HOMEPAGE START
function artistNav() {
  artistNavName.forEach((artistNavName) => {
    artistNavName.textContent = window.localStorage.getItem(VISITOR_ARTIST_SELECTED);
  });
}
// CHART

async function biddingAPIAsync(){
  const formData = new FormData()
  formData.set('amount', 50)

  const rawData = await fetch('https://projects.brainster.tech/bidding/api', {method: 'POST', body: formData})
  const data = await rawData.json();
  console.log(data)
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["0" ],
      datasets: [
        {
          label: "# of Votes",
          data: [data.bidAmount],
          borderWidth: 1,
        },
      ],
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
            stacked: true
        },
        y: {
            stacked: true
        }
      },
    },
  });
}
biddingAPIAsync()

//FILTER BTN CHART


filterBtnChart.forEach((btn)=> {
  btn.addEventListener(`click`, function(event){
    if(event.target.classList.contains(`bg-brownish`)){
      event.target.classList.toggle(`bgRedish`)
      event.target.classList.remove(`bg-brownish`)
    }else if (event.target.classList.contains(`bgRedish`)){
      event.target.classList.toggle(`bg-brownish`)
      event.target.classList.remove(`bgRedish`)
    }
    
  })
})

//NAV-MENU DROPDOWN

barsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const dropdownNav = btn.parentElement.nextElementSibling;

    if (!dropdownNav.classList.contains("active")) {
      dropdownNav.classList.add("active");
    } else {
      dropdownNav.classList.remove("active");
    }
  });
});

allDropdowns.forEach((dropD) => {
  dropD.addEventListener("click", () => {
    dropD.classList.remove("active");
  });
});

//NAV-MENU DROPDOWN END


//send to auction

document.addEventListener('click', function(event) {
    if(event.target.classList.contains('auction')){
      const cardParent = event.target.parentElement.parentElement.parentElement;
      let itemToAdd = items.filter(s => s.id == cardParent.id)
      itemToAdd[0].isAuctioning = true
      items = items.filter(s => s.id != cardParent.id)
      window.localStorage.removeItem('items')
      window.localStorage.setItem('item', JSON.stringify(items))
      window.localStorage.setItem('timer','start');
      ArtistItemsCardContainer.innerHTML = "";
      selectedArtist = items.filter(
        (artist) =>
          artist.artist === window.localStorage.getItem(VISITOR_ARTIST_SELECTED)
      );
      selectedArtist.forEach((artist) =>
        personalArtistCard(ArtistItemsCardContainer, artist)
      );
      window.localStorage.setItem('sendToAuction', JSON.stringify(itemToAdd))
    }
})

//ARTIST ITEMS FUNCTIONS START
//ADD NEW BTN EXTERNAL BTN
addNewItemBtn.addEventListener(`click`, function () {
  insertNewItemMenu.style.right = `0`;
  navFixed2.classList.add(`navFixed`);
  document.body.style.overflowY = `hidden`;
  insertNewItemMenu.style.overflowY = `scroll`;
});

//PERSONAL CARD RENDER
function personalArtistCard(whereToRender, item) {
  const backgroundColor = isBrown ? "#FCEBD5" : "#A16A5E";
  const textColor = isBrown ? "#A16A5E" : "#FCEBD5";
  
  if(item.isAuctioning){
    return (whereToRender.innerHTML += `
      <div class="col-lg-6" id="${item.id}" data-published = "${
    item.isPublished
  }">
        <div class="card mb-3 rounded" style="background-color: ${backgroundColor}; color: ${textColor};">
          <img src="${
            item.image
          }" alt="" class="w-100 d-block rounded-top" style="height: 170px;">
          <div class="cardBody p-3">
            <div class="d-flex justify-content-between">
              <span class="h5 artistTitle">${item.title}</span>
              <span class="p-2" style="background-color: ${textColor}; color: ${backgroundColor}; border-radius: 5px;">
                $${item.price}
              </span>
            </div>
            <div class="d-flex flex-column">
              <span class="h6">${item.dateCreated.slice(`0`, `10`)}</span>
              <span class="p small">${item.description}</span>
            </div>
          </div>
          
        </div>
 </div>`);
  }
  return (whereToRender.innerHTML += `
      <div class="col-lg-6" id="${item.id}" data-published = "${
    item.isPublished
  }">
        <div class="card mb-3 rounded" style="background-color: ${backgroundColor}; color: ${textColor};">
          <img src="${
            item.image
          }" alt="" class="w-100 d-block rounded-top" style="height: 170px;">
          <div class="cardBody p-3">
            <div class="d-flex justify-content-between">
              <span class="h5 artistTitle">${item.title}</span>
              <span class="p-2" style="background-color: ${textColor}; color: ${backgroundColor}; border-radius: 5px;">
                $${item.price}
              </span>
            </div>
            <div class="d-flex flex-column">
              <span class="h6">${item.dateCreated.slice(`0`, `10`)}</span>
              <span class="p small">${item.description}</span>
            </div>
          </div>
          <div class= "d-flex justify-content-center align-items-center filtersBtn bg-brownish p-3" > 
            <button class = "mr-1 auction p-2 bg-primary text-light">
            Send to Auction
            </button>
            <button class = "mr-1 p-2 ${
              item.isPublished
                ? `published bg-success text-light`
                : `unpublished`
            }">
            ${item.isPublished ? `Unpublish` : `Publish `}
            </button>
            <button class = "mr-1 bgRedish p-2 unclearWhite remove">
            Remove
            </button>
            <button class = "edit p-2 titleBrown unclearWhiteBg">
            edit
            </button>
            </div>
        </div>
 </div>`);
}

//SEND TO AUCTION BTN

//code here...

// Is PUBLISHED BTN

document.addEventListener(`click`, function (event) {
  if (event.target.classList.contains(`published`)) {
    event.target.classList.remove(`published`);
    event.target.classList.add(`unpublished`);
    event.target.classList.remove(`bg-success`, `text-light`);
    event.target.textContent = `Publish`;

    const cardParent = event.target.parentElement.parentElement.parentElement;

    const findId = items.find((el) => el.id == cardParent.id);

    findId.isPublished = false;
    // items.push(findId);

    window.localStorage.removeItem(STORE_ITEMS_KEY);
    window.localStorage.setItem(STORE_ITEMS_KEY, JSON.stringify(items));

  } else if (event.target.classList.contains(`unpublished`)) {
    event.target.classList.add(`bg-success`, `text-light`, `published`);
    event.target.classList.remove(`unpublished`);
    event.target.textContent = `Unpublish`;
    const cardParent = event.target.parentElement.parentElement.parentElement;

    const findId = items.find((el) => el.id == cardParent.id);

    findId.isPublished = true;

    //items = items.filter((s) => s.id !== findId.id);
    // items.push(findId);

    window.localStorage.removeItem(STORE_ITEMS_KEY);
    window.localStorage.setItem(STORE_ITEMS_KEY, JSON.stringify(items));
  }
});

// REMOVE CARD

document.addEventListener(`click`, function (event) {
  
  if (event.target.classList.contains(`remove`)) {
    const confirmationDialog = confirm(
      `Are you sure you want to delete your masterpiece?`
    );

    if (confirmationDialog) {
      const cardParent = event.target.parentElement.parentElement.parentElement;
      
      items = items.filter((art) => art.id !== +cardParent.id);
      window.localStorage.removeItem(STORE_ITEMS_KEY);
      window.localStorage.setItem(STORE_ITEMS_KEY, JSON.stringify(items));

      cardParent.remove();
    }
  }
});

// RENDER NEW CARD BTN AND SAVE CHANGES TO EXISTING 
renderItemBtn.addEventListener(`click`, function (event) {
if (
    newItemInputTitle.value &&
    descNewItemInput.value &&
    priceNewItemInput.value &&
    imgNewItemInput.value &&
    typeNewItemInput.value &&
    event.target.id != 'saveExistingItem'
  ) {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;

    const idNewCard = new Date().valueOf();
    const newCardObj = {
      id: +idNewCard,
      type: typeNewItemInput.value,
      title: newItemInputTitle.value,
      description: descNewItemInput.value,
      price: priceNewItemInput.value,
      image: imgNewItemInput.value,
      dateCreated: formattedDate,
      isPublished: isPublished.checked,
      isAuctioning: false,
      artist: window.localStorage.getItem(VISITOR_ARTIST_SELECTED),
    };

    personalArtistCard(ArtistItemsCardContainer, newCardObj);
    items.push(newCardObj);
    window.localStorage.removeItem(STORE_ITEMS_KEY);
    window.localStorage.setItem(STORE_ITEMS_KEY, JSON.stringify(items));
    newItemInputTitle.value = ``;
        descNewItemInput.value = ``;
        typeNewItemInput.value = `Choose Type`;
        priceNewItemInput.value = ``;
        imgNewItemInput.value = ``;
        isPublished.checked = ``;
  }

  insertNewItemMenu.style.right = `-100%`;
  document.body.style.overflowY = `scroll`;
  insertNewItemMenu.style.overflowY = `hidden`;
  navFixed2.classList.remove(`navFixed`);
});

// CLOSE RENDER CARD BTN
closeNewItemBtn.addEventListener(`click`, function () {
  insertNewItemMenu.style.right = `-100%`;
  document.body.style.overflowY = `scroll`;
  insertNewItemMenu.style.overflowY = `hidden`;
  navFixed2.classList.remove(`navFixed`);

  editableTitle.textContent = `Add New Item`;
  renderItemBtn.id = `renderNewItem`;
  renderItemBtn.textContent = `Add New Item`;

  newItemInputTitle.value = ``;
        descNewItemInput.value = ``;
        typeNewItemInput.value = `Choose Type`;
        priceNewItemInput.value = ``;
        imgNewItemInput.value = ``;
        isPublished.checked = ``;
});

// edit BTN PERSONAL ARTIST CARDS
document.addEventListener(`click`, function (event) {
  if (event.target.classList.contains(`edit`)) {
    insertNewItemMenu.style.right = `0`;
    navFixed2.classList.add(`navFixed`);
    document.body.style.overflowY = `hidden`;
    insertNewItemMenu.style.overflowY = `scroll`;

    const cardParent = event.target.parentElement.parentElement.parentElement;
    const findId = items.find((el) => el.id == cardParent.id);

    newItemInputTitle.value = findId.title;
    descNewItemInput.value = findId.description;
    typeNewItemInput.value = findId.type;
    priceNewItemInput.value = findId.price;
    imgNewItemInput.value = findId.image;
    isPublished.checked = findId.isPublished;

    editableTitle.textContent = `Edit Item`;
    renderItemBtn.textContent = `Save`;
    renderItemBtn.id = `saveExistingItem`;

    window.localStorage.setItem("IdToChange", findId.id);
  }
});


document.addEventListener(`click`,function(event){
  if (event.target.id == `saveExistingItem`) {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;

    let id = window.localStorage.getItem("IdToChange");
    window.localStorage.removeItem("IdToChange");

    const newCardObj = {
      id: +id,
      title: newItemInputTitle.value,
      description: descNewItemInput.value,
      price: priceNewItemInput.value,
      image: imgNewItemInput.value,
      type: typeNewItemInput.value,
      dateCreated: formattedDate,
      isPublished: isPublished.checked,
      artist: window.localStorage.getItem(VISITOR_ARTIST_SELECTED),
    };

    items = items.filter((s) => s.id !== +id);
    items.push(newCardObj);
    items.sort((a, b) => a.id - b.id);
    ArtistItemsCardContainer.innerHTML = "";
    let selectedArtist;
    selectedArtist = items.filter(
      (artist) =>
        artist.artist === window.localStorage.getItem(VISITOR_ARTIST_SELECTED)
    );
    selectedArtist.forEach((artist) =>
      personalArtistCard(ArtistItemsCardContainer, artist)
    );
    window.localStorage.removeItem(STORE_ITEMS_KEY);
    window.localStorage.setItem(STORE_ITEMS_KEY, JSON.stringify(items));
    //personalArtistCard(ArtistItemsCardContainer,newCardObj)
  }
})
// const openPopupButton = document.getElementById('openPopup');
//         const closePopupButton = document.getElementById('closePopup');
//         const snapshotPopup = document.getElementById('snapshotPopup');
//         const video = document.getElementById('video');
//         const canvas = document.getElementById('canvas');
//         const captureButton = document.getElementById('capture');
//         const imagePreview = document.getElementById('imagePreview');
//         const capturedImage = document.getElementById('capturedImage');
//         const useImageButton = document.getElementById('useImage');
//         const retakeImageButton = document.getElementById('retakeImage');

//         let imageData = null;
        
//         navigator.mediaDevices.getUserMedia({ video: true })
//             .then(stream => {
//                 video.srcObject = stream;
//             })
//             .catch(error => {
//                 console.error('Error accessing webcam:', error);
//             });

//         openPopupButton.addEventListener('click', () => {
//             snapshotPopup.style.display = 'block';
//             imagePreview.style.display = 'none';
//             imageData = null;
//         });

//         closePopupButton.addEventListener('click', () => {
//             snapshotPopup.style.display = 'none';
//         });

//         captureButton.addEventListener('click', () => {
//             canvas.width = video.videoWidth;
//             canvas.height = video.videoHeight;
//             canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
//             debugger
//             imageData = canvas.toDataURL('image/jpeg');
//             capturedImage.src = imageData;

//             imagePreview.style.display = 'block';
//         });

//         useImageButton.addEventListener('click', () => {
//             if (imageData) {
//                 openPopupButton.style.backgroundImage = `url('${imageData}')`;
//                 snapshotPopup.style.display = 'none';
//             }
//         });

//         retakeImageButton.addEventListener('click', () => {
//             imagePreview.style.display = 'none';
//             imageData = null;
//         });



//Update the count down every 1 second
var k = window.localStorage.getItem('timer')
if(k !== undefined && k != 'done'){
  getTimer()
}
else {
  
  if(window.localStorage.getItem('lastBid') !== null){
    $(".newBid").text(window.localStorage.getItem('lastBid') )
  }
  $(".auctionCardContainer").hide()
}
function getTimer(){
  
    (function () {
      
      const second = 1000,
      minute = second * 60;
    
    const countDown = new Date().getTime() + 2 * minute,
      minutesElement = document.getElementById("minutes"),
      secondsElement = document.getElementById("seconds");
    
    const x = setInterval(function() {    
    const now = new Date().getTime(),
        distance = countDown - now,
        minutes = Math.floor(distance / minute),
        seconds = Math.floor((distance % minute) / second);
    
    minutesElement.innerText = minutes;
    secondsElement.innerText = seconds;
        document.getElementById("minutes").innerText = minutes,
         document.getElementById("seconds").innerText = seconds;
    
    // do something later when countdown is over
    if (distance < 0) {
    clearInterval(x);
    minutesElement.innerText = "0";
    secondsElement.innerText = "0";
    window.localStorage.setItem('timer','done');
  
    window.localStorage.removeItem('sendToAuction');
    auctionCardContainer.innerHTML = ''
    $(".auctionCardContainer").hide()
    
    if(window.localStorage.getItem('lastBid') !== null){
      $(".newBid").text(window.localStorage.getItem('lastBid') )
    }
    }
    }, 1000); // Update every second
    }());
}

document.addEventListener('keypress', function(event){
  
  if(event.key == "Enter"){
    
    $("#bidToShow").html(`Your Bid $${event.target.value}`)
    
  }

    setTimeout(function(){
      $("#OtherBidToShow").html(`$${Math.floor(parseInt(event.target.value) * (Math.random() * 100))}`)
      var k = $("#OtherBidToShow").text()
      window.localStorage.setItem('lastBid',k)
    }, 5000)
    costumeCardChart.classList.remove(`costume-CardChart`)
})

