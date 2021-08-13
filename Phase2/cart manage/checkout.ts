function checkout(){
    let list: (any)[] = JSON.parse(sessionStorage.getItem('items') || "[]");
    let datatableContent = ""
    let startTable = "<table border=1 cellpadding=3><tr><th>Item Name</th><th>Price</th></tr>"
    let Price = 0;

    for(let i = 0; i < list.length; i++){

        datatableContent += "<tr><td>" + list[i].name + "</td><td>" + list[i].price + "</td></tr>"
        Price += parseInt(list[i].price);
        
    }
    let endTable = "</table>"
    let tableData = document.getElementById("cartDetail");
    let total = document.getElementById("cartTotal");
    if(tableData != null){
        tableData.innerHTML = startTable + datatableContent + endTable;
    }

    if(total != null){
        total.innerHTML = `Total Price: ${Price}`;
    }

}