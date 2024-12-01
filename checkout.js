let cost = 0;
let on = false;
let search_on = false;
//Iterates through the local storage, then add each value into the html template
//then the html template is appended into the orders container
function renderCart() {
    cost = 0;
    document.getElementById("orders").innerHTML = "";
    if (localStorage.length === 0) {
        let emptyMessage = document.createElement("div");
        emptyMessage.innerHTML = `<div><h1>Your cart is empty</h1></div>`;
        emptyMessage.classList.add("order");
        document.getElementById("orders").appendChild(emptyMessage);
        const payment = document.getElementById("paymentForm")
        payment.style.display = "none"
        return;
    }
    for (let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const item = JSON.parse(localStorage.getItem(key));
        let itemElement = document.createElement("div");
        itemElement.innerHTML =  `
        <div class="orderLeft">
            <h1 class="productName">${item.name}</h1>
            <div class="counter">
                <input type="number" class="count" value="${item.quantity}" min="1" data-id="${item.id}">
            </div>
            <h2 class="price">SGD ${(item.price * item.quantity).toFixed(2)}</h2>
        </div>
        <div class="orderRight">
            <img src="${item.img}" alt="${item.name}" alt="productImg">
            <button class="delete" onclick="remove(${item.id})" data-id="${item.id}">&#10005;</button>
        </div>
    `;
        cost += item.price * item.quantity;
        itemElement.classList.add("order")
        document.getElementById("orders").appendChild(itemElement);
    }
}

//This checks for any increase or decrease in quantity
//If there is there change it will update the data
document.querySelectorAll(".orders").forEach((element) => {
    element.addEventListener('change', (event) => {
    if (event.target.classList.contains('count')) {
        const item = JSON.parse(localStorage.getItem(event.target.dataset.id));
        cost -= item.price * item.quantity;
        item.quantity = event.target.value;
        localStorage.setItem(event.target.dataset.id, JSON.stringify(item))
        renderCart()
        updateDetails()
    }
})});

//Function that is run when the cross button is pressed
//It takes the id which allows it to find the correct local storage valye
//Then it will remove it
function remove(id){
    const itemId = id; 
    const item = JSON.parse(localStorage.getItem(itemId));
    if (item){
        cost -= item.price * item.quantity; 
        localStorage.removeItem(itemId);
        renderCart(); 
        updateDetails();
    }
}
//Checks the validity of the form
document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault();
    if (this.checkValidity()) {
        localStorage.clear();
    }
});
//This updates the price details on the page
function updateDetails(){
    const subTotal = document.getElementById("subtotal");
    const total = document.getElementById("total")
    subTotal.innerHTML = ``;
    total.innerHTML = ``;
    subTotal.innerHTML = `$${cost}`;
    total.innerHTML= `$${cost + 10}`
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
renderCart()
updateDetails()