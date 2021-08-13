function getData() {
    console.log("k xa");
    var obj = sessionStorage.getItem('items');
    var objJS = JSON.parse(obj);
    var sum_price = 0;
    var DataInTableFormat = '';
    var startDataInTableFormat = "<table border=1>\n    <tr>\n        <th>Item Name</th>\n        <th>Price</th>\n    </tr>";
    console.log("k xa");
    for (var _i = 0, objJS_1 = objJS; _i < objJS_1.length; _i++) {
        var n = objJS_1[_i];
        console.log(n.name);
        var it_name = n.name;
        var price_of_item = n.price;
        if (it_name != "" && price_of_item != "") {
            sum_price += parseInt(price_of_item);
        }
        DataInTableFormat +=
            "\n    \n        <tr>\n            <td>" + it_name + "</td>\n            <td>" + price_of_item + "</td>\n        </tr>\n    ";
    }
    var endDataInTableFormat = "</table>";
    // let newTable = DataInTableFormat;
    var data = document.getElementById("item_info");
    if (data != null) {
        data.innerHTML = startDataInTableFormat + DataInTableFormat + endDataInTableFormat;
    }
    var total = document.getElementById("total_amount");
    total.innerHTML = "<h2>Total price = " + sum_price + "</h2>";
}
