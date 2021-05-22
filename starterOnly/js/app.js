// DOM Elements
// const modalbg = document.querySelector('.bground')
// const modalBtn = document.querySelectorAll('.modal-btn') 
// const croix = document.querySelector('.close')
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
const inputform = document.querySelectorAll('.formData');
const checkboxInput = document.querySelectorAll(".checkbox-input[type='radio']")
const checkCondition = document.getElementById("checkbox1")

btnSubmit.addEventListener('click', function (e) {
  e.preventDefault()
  clearError()
 
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

  function clearError(){
    Array.prototype.forEach.call(
      document.getElementsByClassName("input-error"),
      function(el) { el.style.display = "none"; }
  );
}

	function getCheckedCheckbox(){
		for( const checkbox of checkboxInput ){
			if(checkbox.checked){
				return checkbox
			}
		}
		return null
	}

  if (!prenom.value || prenom.value.lenght >=  2) {
     errorPrenom.style.display = 'block'
   } if (!nom.value || nom.value.lenght >= 2) {
    errorName.style.display = 'block'
   } if (!email.value) {
    errorEmail.style.display = 'block'
   } if (!birthdate.value) {
      errorBirthdate.style.display = 'block'
   } if (!tournoi.value) {
     errorQuantity.style.display = 'block'
   }
   const checkedCheckbox = getCheckedCheckbox()
   if(!checkedCheckbox){
	   errorTown.style.display ='block'
   }
   if(!checkCondition.checked){
	   errorCondition.style.display ='block'
   }
   console.log(checkedCondition)
})
