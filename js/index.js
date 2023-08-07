// about us links
let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}

// navbar 
let sidemenu = document.getElementById('sidemenu');

function openmenu(){
    sidemenu.style.right = '0';
}

function closemenu(){
    sidemenu.style.right = '-200px';
}

// scroll up button 
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

// js form 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz1MdPaOpOn9NiJBIUDis7NgrDxilqhflKXpsr77Z6ACOTGp9RgcTiK5kw6_vmxSDQrVg/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById('msg');
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
          msg.innerHTML = "Message Sent Successfully" 
          setTimeout(function(){
              msg.innerHTML = ''
          }, 5000)
          form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

