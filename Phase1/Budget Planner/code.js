
function add(){
    var projList = JSON.parse(sessionStorage.getItem("projects")) || [];
    var name1 = document.getElementById("name").value;
    var name2 = document.getElementById("projname").value;
    var budget = document.getElementById("bud").value;

    var objJSON = {name:name1,client:name2, budget:budget}
    projList.push(objJSON);

    sessionStorage.setItem("projects", JSON.stringify(projList) )

}


