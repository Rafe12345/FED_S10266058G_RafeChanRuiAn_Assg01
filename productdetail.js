let on = false;
let search_on = false;
//Object Constructor for each products
function addToCard(id, name, price, img, quantity){
    this.id = id
    this.name = name
    this.price = price
    this.img = img
    this.quantity = quantity
}
//This is an onclick function when users press add to cart
//The values are passed in and constructed into objects
//Which is then added into the local storage
function add(id, name, price, img, quantity){
    let order = new addToCard(id, name, price, img, quantity)
    localStorage.setItem(order.id,JSON.stringify(order))
    const btn = document.getElementById("addtocart")
    btn.innerText = 'Added!';
    btn.style.background = "green"
    setTimeout(()=>{
        btn.innerText = 'Add to Cart';
        btn.style.background = '#55c2da'
    },500)
}

//Hamburger menu (repeated)
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