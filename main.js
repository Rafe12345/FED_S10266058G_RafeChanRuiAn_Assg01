const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let intervalID = null;
let on = false;

// Product advertisment slider
// iterates through the nodelist and gives it a display class every 3s
document.addEventListener("DOMContentLoaded",initalizeSlider);
function initalizeSlider(){
    if(slides.length >0){
        slides[slideIndex].classList.add("displaySlide");
        intervalID = setInterval(nextSlide,3000);
    }
}
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index<0){
        slideIndex = slides.length -1;
    }
    slides.forEach(slide =>{
        slide.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalID);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++
    showSlide(slideIndex);
}


//Adds the active class which unhides the display whenever the hamburger is clicked
function dropDownMenu() {
    if(!on){
        const div = document.querySelector('.hamburgerMenu');
        div.classList.add('active');
        on = true;
    }
    else{
        const div = document.querySelector('.hamburgerMenu');
        div.classList.remove('active');
        on = false;
    }
}


// Checks if the scroll height is at -1300, and if it is it will enable the disable on the popup discount
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-btn");
const revealButton = document.getElementById("reveal-button");
let triggered = false
document.body.addEventListener("wheel", ()=>{
    let y = document.body.getBoundingClientRect().top;
    console.log(y <= -1300)
    if(y < -1300 && !triggered){
        popup.style.opacity = 1;
        popup.style.visibility  = "visible";
        triggered = true;
    }
})
closeButton.addEventListener("click", () => {
    popup.style.opacity = 0;
    popup.style.visibility  = "hidden";
});
revealButton.addEventListener("click", () => {
    revealButton.style.color = "white"
});

//Observers if the about us section has been loaded by 40% and if it is then add the animation class    
document.addEventListener("DOMContentLoaded", function () {
    const aboutUs = document.querySelector("#AboutUs");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                aboutUs.classList.add("AboutUsAnimate");
                observer.unobserve(aboutUs);
            }
        });
    },{ threshold: 0.4});
    observer.observe(aboutUs);
});

//Unhides the button once scroll down the page and when it is clicked it sets the scroll position to the top
let mybutton = document.getElementById("goUp");
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
