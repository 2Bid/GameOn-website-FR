// DOM Elements
const modalbg = document.querySelector('.bground')
const modalBtn = document.querySelectorAll('.modal-btn')
const formData = document.querySelectorAll('.formData')
const croix = document.querySelector('.close')

// close modal
croix.addEventListener('click', closeModal)

function closeModal() {
  modalbg.style.display = 'none'
}
