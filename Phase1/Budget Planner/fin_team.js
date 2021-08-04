function getData(){
    let obj=sessionStorage.getItem("projects");
    let objJS=JSON.parse(obj);
    var tableContent=""
    var sumBudget=0;
    var startTable ="<table border=1 class='table'><tr><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>"
    for(i=0;i<objJS.length;i++){
        var cli_name = objJS[i].name;
        var proj_name = objJS[i].client;
        var bud_get=objJS[i].budget;

        if(cli_name!="" && proj_name!="" && bud_get!=""){
            sumBudget += parseInt(bud_get);
            tableContent+="<tr><td>" + cli_name +"</td><td>" + proj_name +"</td><td>"+bud_get+"</tr></tr>"
        }
    }
    var endTable = "</table";
    tableContent=startTable+tableContent+endTable;
    document.getElementById("bud_info").innerHTML = tableContent;
    document.getElementById("bud_total").innerHTML = "<br><h3> Total budget is "+sumBudget+"</h3>";
}