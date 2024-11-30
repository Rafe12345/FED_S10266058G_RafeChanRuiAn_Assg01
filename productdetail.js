let on = false;

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