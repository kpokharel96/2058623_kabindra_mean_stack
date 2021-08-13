function add(itemName, price) {
    console.log(itemName, price);
    var list = JSON.parse(sessionStorage.getItem('items') || "[]");
    var cartSize = parseInt(JSON.parse(sessionStorage.getItem('cartSize') || "0"));
    cartSize += 1;
    var item = {
        name: itemName,
        price: price
    };
    list.push(item);
    sessionStorage.setItem("items", JSON.stringify(list));
    sessionStorage.setItem("cartSize", JSON.stringify(cartSize));
    var data = document.getElementById("cartSize");
    if (data != null) {
        data.innerHTML = "<label>Cart Size: " + cartSize + "</label>";
    }
}
