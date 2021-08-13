function add(itemName:string, price:Number){
    console.log(itemName, price);
    let list: (any)[] = JSON.parse(sessionStorage.getItem('items') || "[]");
    let cartSize: number = parseInt(JSON.parse(sessionStorage.getItem('cartSize') || "0"));
    cartSize += 1;
    let item = {
        name:itemName,
        price:price
    }
    list.push(item);
    sessionStorage.setItem("items", JSON.stringify(list));
    sessionStorage.setItem("cartSize", JSON.stringify(cartSize));
    let data:any = document.getElementById("cartSize");
    if(data != null){
        data.innerHTML = `<label>Cart Size: ${cartSize}</label>`;
    }

}