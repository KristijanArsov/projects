// VISITOR HOMEPAGE HAMMER 
visitorHammer.addEventListener('click', function(){
  if(window.localStorage.getItem(VISITOR_ARTIST_SELECTED) === 'visitor'){
    $('.hamburger').hide()
  }
})
// FIND NOW BTN AND PICTURE SLIDE 
findNowBtn.addEventListener(`click`, function (event) {
    event.preventDefault();
    location.hash = `visitor/listing`;
  });
  
  pictureSlide.forEach((img)=> {
    img.addEventListener(`click`,function(){
      location.hash = `visitor/listing`;
    })
  })
  //CAROUSEL 
  const people = [`./img/img2.jpg`, `./img/person1.jpg`, `./img/person2.jpg`];
    let currentIndex = 0;

    function updateContent(index) {
      // Hide text elements during transition
      if (textElements.length > 0 && descriptionElements.length > 0) {
        textElements[0].style.opacity = 0;
        descriptionElements[0].style.opacity = 0;
      }

      // Use 'onload' to ensure smooth transitions after image load
      carouselImg.onload = function() {
        carouselImg.src = people[index];
        if (textElements.length > 0 && descriptionElements.length > 0) {
          const textContent = [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam ipsa, nihil fugit minima quasi cupiditate!",
            "There is time enough for everything, in the course of the day, if you do but one thing at once; but there is not time enough in the year, if you will do two things at a time.",
            "THIS IS ANOTHER RANDOM QUOTE. IT CAN'T GET ANY MORE RANDOM THAN THIS AS WELL!"
          ];
          const descriptionContent = [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium commodi, repudiandae error veniam ea itaque quibusdam ducimus corrupti facilis tempora.",
            "THIS IS A RANDOM QUOTE. IT CAN'T GET ANY MORE RANDOM THAN THIS",
            "THIS IS ANOTHER RANDOM QUOTE. IT CAN'T GET ANY MORE RANDOM THAN THIS AS WELL"
          ];

          textElements[0].textContent = textContent[index];
          descriptionElements[0].textContent = descriptionContent[index];

          // Show text elements with transition
          textElements[0].style.opacity = 1;
          descriptionElements[0].style.opacity = 1;
        }
      };

      carouselImg.src = people[index];
    }

    carouselBtnRight.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % people.length;
      updateContent(currentIndex);
    });

    carouselBtnLeft.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + people.length) % people.length;
      updateContent(currentIndex);
    });
  
  // VISITOR LISTING PAGE FUNCTION 
  
  //FILTER BTN FUNCTION
  document.addEventListener(`click`,function(event){
   
    if(event.target.classList.contains(`filterBtn`)){
      filterMenu.style.right = `0`
      navFixed.classList.add(`navFixed`)
      document.body.style.overflowY = `hidden`
  
    }else if(event.target.classList.contains(`closeFilterBtn`)) {
      filterMenu.style.right = `-100%`
      navFixed.classList.remove(`navFixed`)
      document.body.style.overflowY = `scroll`
    }
  })
  
  // RENDER ALL CARD IN VISITOR LISTING PAGE 
  let isBrown = true;
  function renderCards(whereToRender, item) {
    if (item.isPublished) {
      const backgroundColor = isBrown ? "#FCEBD5" : "#A16A5E";
      const textColor = isBrown ? "#A16A5E" : "#FCEBD5";
  
      whereToRender.innerHTML += `
      <div class="col-lg-4 col-12">
        <div class="card rounded mb-3" id="${item.id}"  type= "${item.type}" style="background-color: ${backgroundColor}; color: ${textColor};">
          <img src="${item.image}" alt="" class="w-100 d-block rounded-top" style="height: 170px;">
          <div class="cardBody p-3">
            <div class="d-flex justify-content-between">
              <span class="h3 artistName">${item.artist}</span>
              <span class="p-2" style="background-color: ${textColor}; color: ${backgroundColor}; border-radius: 5px;">
                $${item.price}
              </span>
            </div>
            <div class="innerTitleNdText">
              <span class="h6">${item.title}</span>
              <p class="small">${item.description}</p>
            </div>
          </div>
        </div>
      </div>`;
  
      isBrown = !isBrown; // Toggle the color for the next card
    }
  }
  
  // SUBMIT BTN IN VISITOR LISTING PAGE 
  submitBtn.addEventListener(`click`, ()=> {
  
    const titleInputValue = titleInput.value
    const byTypeInput = byType.value
    const filterArtists = filterArtist.value
    const max = maxPrice.value
    const min = minPrice.value
    
    const filteredInputs = items.filter((item)=> {
      
      if(item.title.toLowerCase() == titleInputValue.toLowerCase() 
      || item.type === byTypeInput 
      || item.artist === filterArtists
      || (min <= item.price && item.price <= max)){
        filterMenu.style.right = `-100%`
        navFixed.classList.remove(`navFixed`)
        return true
      }else {
        return false
      }
    
    })
    
    cardContainer.innerHTML = ``;
    
    filteredInputs.forEach((filter)=> {
      renderCards(cardContainer,filter)
    })
    
    resetFilters()
    document.body.style.overflowY = `scroll`
    })
  // VISITOR LISTING PAGE FUNCTION END





  