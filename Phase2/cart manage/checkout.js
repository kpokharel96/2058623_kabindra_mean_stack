function checkout() {
    var list = JSON.parse(sessionStorage.getItem('items') || "[]");
    var datatableContent = "";
    var startTable = "<table border=1 cellpadding=3><tr><th>Item Name</th><th>Price</th></tr>";
    var Price = 0;
    for (var i = 0; i < list.length; i++) {
        datatableContent += "<tr><td>" + list[i].name + "</td><td>" + list[i].price + "</td></tr>";
        Price += parseInt(list[i].price);
    }
    var endTable = "</table>";
    var tableData = document.getElementById("cartDetail");
    var total = document.getElementById("cartTotal");
    if (tableData != null) {
        tableData.innerHTML = startTable + datatableContent + endTable;
    }
    if (total != null) {
        total.innerHTML = "Total Price: " + Price;
    }
}
