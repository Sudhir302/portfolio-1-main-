const tabs = document.getElementsByClassName('tab');
const contents = document.getElementsByClassName('tab-content')

function opentab(tabName){
    for(let tab of tabs){
        tab.classList.remove("activetab");
    }
    for(let content of contents){
        content.classList.remove("active");
    }
    event.currentTarget.classList.add('activetab');
    document.getElementById(tabName).classList.add('active');
}


// -------------------for message-----------------------


const scriptURL = 'https://script.google.com/macros/s/AKfycbxHT8XjqAAJ_YpfejpB5mXrAioUwUJRQXmdtwBa4PVInirOq8W6XCmd9dRjd-uspyBWsw/exec'
const form = document.forms['submit-to-google-sheet']
const msg =document.getElementById('confirmation');
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML= "Message received Successfully";
        setTimeout(function(){
            msg.innerHTML=""},5000);
            form.reset();
        })
    .catch(error => console.error('Error!', error.message))
})


// ----------------------slide menu----------------------

const slideMenu = document.getElementById('slide-menu');
function openmenu(){
    slideMenu.style.right ="0";
}
function closemenu(){
    slideMenu.style.right="-200px";
}