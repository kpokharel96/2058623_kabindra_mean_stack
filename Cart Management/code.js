function add_items() {
    //console.log('hello1');
    var itemList = JSON.parse(sessionStorage.getItem('items') || "[]");
    //console.log('hello')
    console.log(itemList);
    var item_name = document.getElementById("name").value;
    // if(item_name != null){
    //     item_name = (<HTMLInputElement>document.getElementById("name")).value;
    // }
    var item_price = document.getElementById("price").value;
    //var item_quantity = (<HTMLInputElement>document.getElementById("quantity")).value;
    var item_quantity = 0;
    if (itemList.length != 0) {
        console.log("storage not empty" + itemList);
        for (var i = 0; i < itemList.length; i++) {
            //console.log(n);
            if (itemList[i].name === item_name) {
                //console.log(n.name + item_name);
                var num = parseInt(itemList[i].quantity);
                num += 1;
                //itemList[i].quantity = num;
                itemList.splice(i, 0, { name: item_name, price: item_price, quantity: num });
                sessionStorage.setItem("items", JSON.stringify(itemList));
                break;
            }
        }
        console.log('outside 1st for loop');
        var list = JSON.parse(sessionStorage.getItem("items") || "[]");
        console.log('get list ' + list);
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var m = list_1[_i];
            console.log("inside get " + m);
            if (m.name === item_name) {
                item_quantity = m.quantity;
                break;
            }
        }
    }
    else {
        item_quantity = 1;
        var objJSON = { name: item_name, price: item_price, quantity: item_quantity };
        itemList.push(objJSON);
        console.log(itemList);
        sessionStorage.setItem("items", JSON.stringify(itemList));
    }
    var data = document.getElementById("quantity");
    if (data != null) {
        var display = "<p>Quantity = " + item_quantity + " </p>";
        data.innerHTML = display;
        console.log("kabi");
    }
}
;
