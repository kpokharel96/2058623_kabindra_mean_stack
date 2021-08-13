function add_items() {
    //console.log('hello1');
    let itemList: (any)[] = JSON.parse(sessionStorage.getItem('items') || "[]");
    //console.log('hello')
    console.log(itemList);

    let item_name: any = (<HTMLInputElement>document.getElementById("name")).value;
    // if(item_name != null){
    //     item_name = (<HTMLInputElement>document.getElementById("name")).value;
    // }
    let item_price: any = (<HTMLInputElement>document.getElementById("price")).value;
    //var item_quantity = (<HTMLInputElement>document.getElementById("quantity")).value;
    let item_quantity: number = 0;
    if (itemList.length != 0) {
        console.log("storage not empty" + itemList);
        for (let i = 0; i < itemList.length; i++) {
            //console.log(n);
            if (itemList[i].name === item_name) {
                //console.log(n.name + item_name);
                let num:number = parseInt(itemList[i].quantity);
                num += 1;
                //itemList[i].quantity = num;
                itemList.splice(i, 0, {name: item_name, price: item_price, quantity: num});
                sessionStorage.setItem("items", JSON.stringify(itemList));
                break;

            }
        }
        console.log('outside 1st for loop');
        let list:(any)[] = JSON.parse(sessionStorage.getItem("items") || "[]");
        console.log('get list ' + list);
        for (let m of list) {
            console.log("inside get " + m)
            if (m.name === item_name) {
                item_quantity = m.quantity;
                break;
            }
        }


    } else {
        item_quantity = 1;
        let objJSON: any = { name: item_name, price: item_price, quantity: item_quantity }
        itemList.push(objJSON)
        console.log(itemList);
        sessionStorage.setItem("items", JSON.stringify(itemList))
    }

    let data: any = document.getElementById("quantity");
    if (data != null) {
        let display = `<p>Quantity = ${item_quantity} </p>`
        data.innerHTML = display;
        console.log("kabi")
    }
};
