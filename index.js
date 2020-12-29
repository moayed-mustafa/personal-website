
const alert = document.querySelector('.popup')
const form = document.getElementById('contact-form');
let name  = document.querySelector('#name');
let subject  = document.querySelector('#subject');
let email  = document.querySelector('#email');
let message = document.querySelector('#message');


// hide alert
alert.style.display= 'none'
form.addEventListener("submit", function (e) {
    console.log('submit')
    e.preventDefault();
    clearForm();
    // show alert
    alert.style.display = 'inline'

    setTimeout(function () {
        alert.style.display= 'none'

    }, 3000)
    // alert.classList.add('show')
    // setTimeout(function () {
    //     alert.classList.remove('show')

    //     }, 3000)

})

function clearForm() {
    name.value = "";
    subject.value = "";
    email.value = "";
    message.value=""
}