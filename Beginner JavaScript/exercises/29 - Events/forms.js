/*eslint-disable*/

const wes = document.querySelector('.wes');

wes.addEventListener('click', function(event) {
     
    console.log('YOU CLICKED IT')
    const shouldChangePage = confirm('This website might be malicious. Do you wish to proceed?')
    if(!shouldChangePage) {
         //A link's default is to change, so if you want that not to happen, use preventDefault()
      event.preventDefault();
        // window.location = event.currentTarget.href;
    }
    console.log(shouldChangePage)
});

const signupForm = document.querySelector('[name="signup"]')

signupForm.addEventListener('submit', function(event) {
    const name = event.currentTarget.name.value;
    if(name.includes('chad')) {
        alert('Sorry, bro.')
        event.preventDefault()
    }
}
)

function logEvent(event) {
    console.log(event.type)
    console.log(event.currentTarget.value)
}
signupForm.name.addEventListener('keyup', logEvent)
console.log(signupForm.name)

signupForm.name.addEventListener('keydown', logEvent)

signupForm.name.addEventListener('focus', logEvent)
signupForm.name.addEventListener('blur', logEvent)

signupForm.email.addEventListener('focus', logEvent)