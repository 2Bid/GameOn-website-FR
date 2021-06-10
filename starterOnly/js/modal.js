// DOM Elements
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')

function editNav() {
  var x = document.getElementById('myTopnav')
  if (x.className === 'topnav') {
    x.className += ' responsive'
  } else {
    x.className = 'topnav'
  }
}

// launch modal event
for( let i = 0; i < modalBtn.length; i++){
  const btn = modalBtn[i];
  btn.addEventListener('click',launchModal)
}

// launch modal form
function launchModal() {
  modalbg.style.display = 'block'
}


