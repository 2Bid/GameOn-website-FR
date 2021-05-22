function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// DOM Elements
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const croix = document.querySelector('.close')
const errors = document.getElementsByClassName('input-error')
const last = document.querySelector('#last')

// launch modal event
for( let i = 0; i < modalBtn.length; i++){
  const btn = modalBtn[i]
  btn.addEventListener('click',launchModal)
}

// launch modal form
function launchModal() {
  modalbg.style.display = 'block'
}

// close modal
croix.addEventListener('click', closeModal)

function closeModal() {
  modalbg.style.display = 'none'

  // reset message error
  for (let i = 0; i < errors.length; i++) {
    const error = errors[i];
    error.style.display = 'none'
  }
}
