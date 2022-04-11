// Get the modal !!Login Foarm!!
var modal_1 = document.getElementById('id01');
var modal_2 = document.getElementById('id02');
var modal_3 = document.getElementById('id03');
var modal_4 = document.getElementById('id04');

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
//or
window.addEventListener('click', function (event) {
    switch (true) {
        case (event.target == modal_1):
            modal_1.style.display = "none";
        case (event.target == modal_2):
            modal_2.style.display = "none";
        case (event.target == modal_3):
            modal_3.style.display = "none";
        case (event.target == modal_4):
            modal_4.style.display = "none";
    }
})

// ----------- ButtonDisplayLogin ---------
let buttonDisplayLogin = document.querySelector('.display_login');
let id01 = document.getElementById('id01');
buttonDisplayLogin.addEventListener("click", function () {
    id01.style.display = 'block';
})

// ----------- ButtonOfRegistration  ---------
let buttonRegister = document.querySelector('.become_a_member');
let id02 = document.getElementById('id02');
buttonRegister.addEventListener("click", function () {
    id02.style.display = 'block';
})

// ----------- ButtonOfQuote  ---------
let buttonQuote = document.querySelector('.display_quote');
let id03 = document.getElementById('id03');
buttonQuote.addEventListener("click", function () {
    id03.style.display = 'block';
})

// ----------- ButtonOfQuote  ---------
let buttonLearnMore = document.querySelector('.display_learn_more');
let id04 = document.getElementById('id04');
buttonLearnMore.addEventListener("click", function () {
    id04.style.display = 'block';
});


// -----------Close Modal X ---------
let closeArr = document.querySelectorAll(".close");
for (let elem of closeArr) {
    elem.addEventListener('click', function () {
        id01.style.display = 'none';
        id02.style.display = 'none';
        id03.style.display = 'none';
        id04.style.display = 'none';
    })
};

let buttonCancelArr = document.querySelectorAll('.cancelbtn');
for (let elem of buttonCancelArr) {
    elem.addEventListener('click', function () {
        id01.style.display = 'none';
        id02.style.display = 'none';
        id03.style.display = 'none';
        id04.style.display = 'none';
    })
}









