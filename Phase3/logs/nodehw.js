let readline = require("readline-sync")
let fs = require("fs")
let path = "./records.json"
let answer=""

function myFunction(){
do{
if(fs.existsSync(path)){
    let firstname = readline.question("Enter your first name: ")
let lastname = readline.question("Enter your last name: ");
let gender = readline.question("Enter your gender: ")
let emailId = readline.questionEMail("Enter your email id: ")
debugger;
let time_date=new Date().toLocaleString();
    let records1 = JSON.parse(fs.readFileSync("records.json").toString());
    records1.push({firstname,lastname,gender,emailId,time_date});
    debugger;
    fs.writeFileSync("records.json",JSON.stringify(records1))
}
else{ 
    let firstname = readline.question("Enter your first name: ")
    let lastname = readline.question("Enter your last name: ");
    let gender = readline.question("Enter your gender: ")
    let emailId = readline.questionEMail("Enter your email id: ")
    debugger;
    let time_date=new Date().toLocaleString();
    let records=[]
        records.push({firstname,lastname,gender,emailId,time_date});
        fs.writeFileSync("records.json",JSON.stringify(records))
}
answer=readline.question("Do you want to add some more records: Y/N: ")
answer.toLowerCase()
debugger;
}while(answer=="y")

}
 myFunction();

