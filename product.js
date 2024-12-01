const slides = document.querySelectorAll(".slides img")
let slideIndex = 0;
let intervalID = null;
let on = false;
const scrollContainers = document.querySelectorAll('.cards');
const anchors = document.querySelectorAll(".cardA")
let search_on = false;
//Check if each product scroll container has been dragged or scrolled horizontally
//if it is, it takes the the latest scroll position minus inital scroll position
//then it moves the scroll position using this difference.
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

//Hamburger menu(repeated)
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
//Adds the active class which shows the searchw whenever search icon is press
function searchbar() {
    if(!search_on){
        const div = document.querySelector('.searchBar');
        div.classList.add('active');
        search_on = true;
    }
    else{
        const div = document.querySelector('.searchBar');
        div.classList.remove('active');
        search_on= false;
    }
}
//Filter function, check if the checkbox has been checked
//then by following the checkbox value we will hide the section of products
//if one checkbox is ticked all the others would be hidden.
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


//Go up function(repeated)
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