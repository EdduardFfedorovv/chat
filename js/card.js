  $('.card__slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

const popupBtn = document.querySelectorAll('.block')
const popup = document.querySelector('.popup')
const popupClose = document.querySelectorAll('.close')
const body = document.querySelector('body')
const overlay = document.querySelector('.popup__overlay')
const cardInner = document.querySelector('.card__inner')
const deleteProfile = document.querySelector('.popup__btn')

popupBtn.forEach((btn) => {
  btn.addEventListener('click', function() {
    popup.classList.add('popup-active')
    overflowHide()
  })
})

popupClose.forEach((close) => {
  close.addEventListener('click', function() {
    if(popup.classList.contains('popup-active')){
      popup.classList.remove('popup-active')
      overflowHide()
    }
  })
})

function overflowHide() {
  if (popup.classList.contains('popup-active')){
      body.classList.add('opend')
  } else {
      body.classList.remove('opend')
  }
}
overlay.addEventListener('click', function(e) {
  if( e.target === overlay) {
      popup.classList.remove('popup-active')
  }
  overflowHide();
})

const profileBtn = document.querySelectorAll('.profile__item-block')
const cards = document.querySelectorAll('.profile__item')

profileBtn.forEach((btn) => btn.addEventListener('click', () => {
    blockedUser = btn.parentNode.parentNode.getAttribute('data-id')
}))


deleteProfile.addEventListener('click', () => {
  window.location.href = "/card.html";
  for (let i = 0; i < cards.length; i++) {
      if (i == blockedUser) {
        cards[i].remove();
        popup.classList.remove('popup-active')
        overflowHide();
        localStorage.setItem(`item${i}`, i)
        break;
      }
    }
})

function removeDeletedCards() {
for (let i = 0; i < cards.length; i++) {
  if(i == localStorage.getItem(`item${i}`) || i == localStorage.getItem('carrentCard')) {
    cards[i].remove()
  } 
}
}
removeDeletedCards();

body.addEventListener('click', (e) => {
  const returnBtn = document.querySelector('.header__return')
  
  if(e.target.parentNode === returnBtn) {
    localStorage.removeItem('carrentCard')
  } else if(e.target === deleteProfile){
      localStorage.setItem(`item${localStorage.getItem('carrentCard')}`, localStorage.getItem('carrentCard'))
      localStorage.removeItem('carrentCard')
  }
})






