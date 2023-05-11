const popupBtn = document.querySelectorAll('.block')
const popup = document.querySelector('.popup')
const popupClose = document.querySelectorAll('.close')
const body = document.querySelector('body')
const deleteProfile = document.querySelector('.popup__btn')
const overlay = document.querySelector('.popup__overlay')
const image = document.querySelectorAll('.profile__item-link')
const chatBtn = document.querySelectorAll('.profile__item-chat')
let blockedUser

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
  console.log(e.target)
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
  window.location.href = "/profile.html";
    for (let i = 0; i < cards.length; i++) {
        if (i == blockedUser) {
          cards[i].remove();
          popup.classList.remove('popup-active')
          overflowHide();
          localStorage.setItem(`item${i}`, i)
          
        }
      }
})

function removeDeletedCards() {
  for (let i = 0; i < cards.length; i++) {
    if(i == localStorage.getItem(`item${i}`)) {
      cards[i].remove()
    }
  }
}
removeDeletedCards();


image.forEach((img) => {
  img.addEventListener('click', () => {
    localStorage.setItem('carrentCard', img.parentNode.getAttribute('data-id'))
  })
})

chatBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    localStorage.setItem('carrentCard', btn.parentNode.parentNode.getAttribute('data-id'))
  })
})

