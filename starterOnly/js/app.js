// DOM Elements

const btnSubmit = document.querySelector('.btn-submit')
const nom = document.getElementById('last')
const prenom = document.getElementById('first')
const email = document.getElementById('email')
const birthdate = document.getElementById('birthdate')
const tournoi = document.getElementById('quantity')
const errorName = document.getElementById('input-error-name')
const errorPrenom = document.getElementById('input-error-prenom')
const errorEmail = document.getElementById('input-error-email')
const errorBirthdate = document.getElementById('input-error-birthdate')
const errorQuantity = document.getElementById('input-error-quantity')
const errorTown = document.getElementById('input-error-town')
const errorCondition = document.getElementById('input-error-condition')
const formData = document.getElementsByClassName('formData')
const checkboxInput = document.querySelectorAll(".checkbox-input[type='radio']")
const checkCondition = document.getElementById("checkbox1")
const form = document.getElementById('form')
const formValidation = document.querySelector('.formValidation')
const croix = document.querySelector('.close')
const errors = document.getElementsByClassName('input-error')
const BtnCloseModal =document.querySelector('.close-modal')

function clearError(){
  for(const error of errors){
    error.style.display ='none'
  }
}

function getCheckedCheckbox(){
  for( const checkbox of checkboxInput ){
    if(checkbox.checked){
      return checkbox
    }
  }
  return null
}
// close modal
croix.addEventListener('click', closeModal)
BtnCloseModal.addEventListener('click', closeModal)

function closeModal() {
  modalbg.style.display = 'none'
  clearError()
}

function validate(){

  const verifMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let valide = true

  if (!prenom.value || prenom.value.length <=  1) {
    errorPrenom.style.display = 'block'
    valide = false 
  }
  
  if (!nom.value || nom.value.length <= 1) {
   errorName.style.display = 'block'
   valide = false
  }

  if (!verifMail.test(email.value)) {
   errorEmail.style.display = 'block'
   valide = false
  }

  if (!birthdate.value) {
     errorBirthdate.style.display = 'block'
     valide = false
  }

  if (!tournoi.value) {
    errorQuantity.style.display = 'block'
    valide = false
  }
  const checkedCheckbox = getCheckedCheckbox()

  if(!checkedCheckbox){
    errorTown.style.display ='block'
    valide = false
  }

  if(!checkCondition.checked){
    errorCondition.style.display ='block'
    valide = false
  }
  return valide
}

btnSubmit.addEventListener('click', function (e) {
  e.preventDefault()
  clearError()
  if(validate()){
      form.style.display ='none';
      formValidation.style.display='block'
   }
})








  //parcourir enfant formData check input
  // const form = formData.children.input.value
  // console.log(form)

// for (let i = 0; i < formData.length; i++) {
//   console.log(formData.children[i].value);
// }

// for ( const input of formData){
//   const children = input.children
//   for( const typeinput of children){
//     if(typeinput.tagName == 'INPUT'){
//       if(typeinput.type == 'radio'){
//         if(typeinput.checked){
//           console.log(typeinput.value)
//         }
//       }
//       else{
//         console.log(typeinput.value)
//       }
//     }
//   }
// }

// const children = Array.of(formData).map(input => {
//  // return Array.of(input.children).find(child => child.tagName == 'INPUT')
  
//   return input
  
// })