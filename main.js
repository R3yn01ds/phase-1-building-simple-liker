// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeEls = document.querySelectorAll('.like');
likeEls.forEach(el => {
  el.addEventListener('click', e => likeCallback(e))
});

function likeCallback(e){

  const heartEl = e.target.childNodes[1];
  const isHeartEmpty = (heartEl.innerText === EMPTY_HEART) ? true : false;

  if (isHeartEmpty) {
    mimicServerCall()
      .then(resp => {
        //  Display Like
        heartEl.innerText = FULL_HEART;
        heartEl.classList.add('activated-heart');
      })
      .catch(error => {
        //  Display error message
        const modalEl = document.querySelector('#modal');
        modalEl.textContent = error;
        modalEl.classList.remove("hidden");

        //  Remove error message after 2 seconds
        setTimeout(error => {
          modalEl.classList.add("hidden");
        }, 2000)
      })
  } else {
    //  Remove Like
    heartEl.classList.remove('activated-heart')
    heartEl.innerText = EMPTY_HEART;
  }
}





// let glyphStates = {
//   "♡": "♥",
//   "♥": "♡"
// };

// let colorStates = {
//   "red": "",
//   "": "red"
// };

// let articleHearts = document.querySelectorAll(".like");

// function likeCallback(e) {
//   let heart = e.target;
//   mimicServerCall("bogusUrl")
   
//     .then(function (serverMessage) {
//       heart.innerText = glyphStates[heart.innerText];
//       heart.style.color = colorStates[heart.style.color];
//     })
//     .catch(function (error) {
      
//       document.getElementById("modal").className = "";
//     });
// }
// for (let glyph of articleHearts) {
//   glyph.addEventListener("click", likeCallback);
// }








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
