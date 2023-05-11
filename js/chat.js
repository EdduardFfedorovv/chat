
function addClass() {
    const bot = document.querySelector('.chat__main-bot')
    bot.classList.add('show')
} 
setTimeout(addClass, 2000)



const input = document.querySelector('.chat__bottom-form--input')
const userMessage = document.querySelector('.chat__main-user')
const formBottomBtn = document.querySelector('.chat__bottom-form--btn')
let messageCounter = 0

formBottomBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let inputValue = input.value
    const messageBox = document.createElement('div')
    const message = document.createElement('span')
    const inner = document.querySelector('.chat__main-inner')
    
    messageBox.classList.add('chat__main-user')
    message.classList.add('chat__main-user--message')
    message.innerText = '' 

    message.append(input.value)
    messageBox.append(message)
    inner.append(messageBox)
    localStorage.setItem(`message${messageCounter}`, message.innerText)
    messageCounter ++
    localStorage.setItem('messageCounter', messageCounter)
    input.value = ''
})

function displayMessages() {
    for(let i = 0; i < localStorage.getItem(`messageCounter`); i++) {
        const messageBox = document.createElement('div')
    const message = document.createElement('span')
    const inner = document.querySelector('.chat__main-inner')
    
    messageBox.classList.add('chat__main-user')
    message.classList.add('chat__main-user--message')
    message.innerText = localStorage.getItem(`message${messageCounter}`)
    
    message.append(localStorage.getItem(`message${messageCounter}`))
    messageBox.append(message)
    inner.append(messageBox)
    if(localStorage.getItem(`message${messageCounter}`) < 0) {
        setTimeout(addClass, 2000 )
    } else {
        addClass()
    }
    }
    
}

displayMessages()




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
  window.location.href = "/profile.html";
  for (let i = 0; i < cards.length; i++) {
      if (i == blockedUser) {
        cards[i].remove();
        overflowHide()
        break;
      }
    }
})

body.addEventListener('click', (e) => {
    const returnBtn = document.querySelector('.header__return')

    if(e.target.parentNode === returnBtn) {
      localStorage.removeItem('carrentCard')
      
    } else if(e.target === deleteProfile){
        localStorage.setItem(`item${localStorage.getItem('carrentCard')}`, localStorage.getItem('carrentCard'))
        localStorage.removeItem('carrentCard')
        
    }
    
  })
