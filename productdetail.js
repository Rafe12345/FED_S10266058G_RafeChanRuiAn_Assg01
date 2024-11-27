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
}
add(2,"ASUS ROG Swift PG27AQN | QHD 360HZ 27 IPS Gaming Monitor",999,"resources/monitors/product2.png",1)