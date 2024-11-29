let cost = 0;
let on = false;
function renderCart() {
    cost = 0;
    document.getElementById("orders").innerHTML = "";
    if (localStorage.length === 0) {
        let emptyMessage = document.createElement("div");
        emptyMessage.innerHTML = `<div><h1>Your cart is empty</h1></div>`;
        emptyMessage.classList.add("order");
        document.getElementById("orders").appendChild(emptyMessage);
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
                <input type="number" class="count" value="${item.quantity}" min="1" data-id="${item.id}" />
            </div>
            <h2 class="price">SGD ${(item.price * item.quantity).toFixed(2)}</h2>
        </div>
        <div class="orderRight">
            <img src="${item.img}" alt="${item.name}">
            <button class="delete" onclick="remove(${item.id})" data-id="${item.id}"><p>&#10005</p></button>
        </div>
    `;
        cost += item.price * item.quantity;
        itemElement.classList.add("order")
        document.getElementById("orders").appendChild(itemElement);
    }
}
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

document.querySelectorAll(".orders").forEach((element) => {
    element.addEventListener('click', (event) => {
    console.log(event.target.classList.contains('delete'))
    if (event.target.classList.contains('delete')) {
        const item = JSON.parse(localStorage.getItem(event.target.dataset.id))
        cost -= item.price * item.quantity;
        console.log(cost)
        localStorage.removeItem(event.target.dataset.id)
        renderCart()
        updateDetails()
    }})});
function remove(id){
    const itemId = id; // Get the item's ID from data-id
    const item = JSON.parse(localStorage.getItem(itemId));
    if (item){
        cost -= item.price * item.quantity; // Update the cost
        localStorage.removeItem(itemId); // Remove item from localStorage
        renderCart(); // Re-render the cart
        updateDetails();
    }
}
function updateDetails(){
    const subTotal = document.getElementById("subtotal");
    const total = document.getElementById("total")
    subTotal.innerHTML = ``;
    total.innerHTML = ``;
    subTotal.innerHTML = `$${cost}`;
    total.innerHTML= `$${cost + 10}`
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
renderCart()
updateDetails()