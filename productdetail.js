let on = false;
function addToCard(id, name, price, img, quantity){
    this.id = id
    this.name = name
    this.price = price
    this.img = img
    this.quantity = quantity
}
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