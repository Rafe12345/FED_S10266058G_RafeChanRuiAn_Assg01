let cost = 0;
function renderCart() {
    cost = 0;
    document.getElementById("orders").innerHTML = "";
    for (let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const item = JSON.parse(localStorage.getItem(key));
        let itemElement = document.createElement("div");
        itemElement.innerHTML =  `
        <div class="orderLeft">
            <h1 class="productName">${item.name}</h1>
            <div class="counter">
                <input type="number" class="count" value="${item.quantity}" min="0" data-id="${item.id}" />
            </div>
            <h2 class="price">SGD ${(item.price * item.quantity).toFixed(2)}</h2>
        </div>
        <div class="orderRight">
            <img src="${item.img}" alt="${item.name}">
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
        if(event.target.value == 0){
            const item = JSON.parse(localStorage.getItem(event.target.dataset.id))
            console.log(item.price * item.quantity)
            cost -= item.price * item.quantity;
            console.log(cost)
            localStorage.removeItem(event.target.dataset.id)
            renderCart()
            updateDetails()
        }else{
            const item = JSON.parse(localStorage.getItem(event.target.dataset.id));
            cost -= item.price * item.quantity;
            item.quantity = event.target.value;
            localStorage.setItem(event.target.dataset.id, JSON.stringify(item))
            renderCart()
            updateDetails()
    }}
})});
function updateDetails(){
    const subTotal = document.getElementById("subtotal");
    const total = document.getElementById("total")
    subTotal.innerHTML = ``;
    total.innerHTML = ``;
    subTotal.innerHTML = `$${cost}`;
    total.innerHTML= `$${cost + 10}`
}
renderCart()
updateDetails()