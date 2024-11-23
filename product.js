const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let intervalID = null;
const scrollContainer = document.querySelector('.cards');
scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default vertical scrolling
    scrollContainer.scrollLeft += event.deltaY * 0.4; // Scroll horizontally
});
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