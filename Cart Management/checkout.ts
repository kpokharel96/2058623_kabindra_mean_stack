function getData(){
    console.log("k xa");
    let obj:any = sessionStorage.getItem('items')
    let objJS:any = JSON.parse(obj)
    let sum_price:number=0;
    let DataInTableFormat='';
    let startDataInTableFormat:any=`<table border=1>
    <tr>
        <th>Item Name</th>
        <th>Price</th>
    </tr>`;
    console.log("k xa")
    for (let n of objJS){
        console.log(n.name);
        let it_name = n.name
        let price_of_item = n.price

        if(it_name!="" && price_of_item!=""){
            sum_price+=parseInt(price_of_item)
        }
    DataInTableFormat+=
    `
    
        <tr>
            <td>${it_name}</td>
            <td>${price_of_item}</td>
        </tr>
    `
    }
    let endDataInTableFormat=`</table>`;
   // let newTable = DataInTableFormat;
   let data:any=document.getElementById("item_info");
   if(data!=null){
    data.innerHTML=startDataInTableFormat+DataInTableFormat+endDataInTableFormat
   }
   let total:any=document.getElementById("total_amount");
   total.innerHTML=`<h2>Total price = ${sum_price}</h2>`;
}