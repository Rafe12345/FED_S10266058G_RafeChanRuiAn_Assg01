const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let intervalID = null;
let on = false;
const scrollContainers = document.querySelectorAll('.cards');
const anchors = document.querySelectorAll(".cardA")
scrollContainers.forEach((scrollContainer) => {
    let isDragging = false;
    let startX;
    let scrollLeft;
    scrollContainer.querySelectorAll('img').forEach((img) => {
        img.addEventListener('mousedown', event => event.preventDefault());
    });

    scrollContainer.addEventListener('mousedown', (event) => {
        event.preventDefault();
        isDragging = true;
        startX = event.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mousemove', (event) => {
        if (!isDragging){
            return;
        }
        else{
            anchors.forEach((element)=>{
                element.classList.add("inactiveLink")
            })
            event.preventDefault();
            const x = event.pageX - scrollContainer.offsetLeft;
            const moved = (x - startX) * 0.8;
            scrollContainer.scrollLeft = scrollLeft - moved;
        }
    });

    scrollContainer.addEventListener('mouseup', (event) => {
        event.preventDefault();
        isDragging = false;
        anchors.forEach((element)=>{
            element.classList.remove("inactiveLink")
        })
    });

    scrollContainer.addEventListener('mouseleave', (event) => {
        event.preventDefault();
        isDragging = false;
    });
    scrollContainer.addEventListener('wheel', (event) => {
        if (event.deltaX !== 0) {
            event.preventDefault();
            scrollContainer.scrollLeft += event.deltaX;
        }   
    });
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

const checkboxes = document.querySelectorAll(".option input[type='checkbox']");
let check = [];

checkboxes.forEach(element => {
    element.addEventListener("change", () => {
        if(element.checked){
            const allSections = document.querySelectorAll(".Monitors, .Processors, .GPU");
            allSections.forEach(section => section.style.display = "none");

            if(element.value == "Monitors"){
                check.push(document.querySelector(".Monitors"));
                check.forEach(element =>{
                    console.log(element)
                    element.style.display = "";
                })

            }
            else if(element.value == "Processors"){
                check.push(document.querySelector(".Processors"));
                check.forEach(element =>{
                    console.log(element)
                    element.style.display = "";
                })
            }
            else if(element.value == "GPU"){
                check.push(document.querySelector(".GPU"));
                check.forEach(element =>{
                    console.log(element)
                    element.style.display = "";
                })
            }
        } else {
            if(element.value == "Monitors") {
                document.querySelector(".Monitors").style.display = "none";
                check = check.filter(item => item!= document.querySelector(".Monitors"));
            } else if(element.value == "Processors") {
                document.querySelector(".Processors").style.display = "none";
                check = check.filter(item => item!= document.querySelector(".Processors"));
            } else if(element.value == "GPU") {
                document.querySelector(".GPU").style.display = "none";
                check = check.filter(item => item!= document.querySelector(".GPU"));
            }
        }

        if (Object.keys(check).length === 0) {
            const products = document.querySelectorAll(".products > div");
            products.forEach(element => {
                element.style.cssText = '';
            });
        }
    });
});