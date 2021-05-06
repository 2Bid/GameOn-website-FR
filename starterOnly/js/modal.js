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
const formData = document.querySelectorAll('.formData')
const croix = document.querySelector('.close')
const btnSubmit = document.querySelector('.btn-submit')
const last = document.querySelector('#last')

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener('click', launchModal))

// launch modal form
function launchModal() {
  modalbg.style.display = 'block'
}

// close modal
croix.addEventListener('click', closeModal)

function closeModal() {
  modalbg.style.display = 'none'
}

btnSubmit.addEventListener('click', function validate(e) {
  if (!last.value) {
    e.preventDefault()
  } else if (!mail.value) {
    e.preventDefault()
  } else {
  }
})
