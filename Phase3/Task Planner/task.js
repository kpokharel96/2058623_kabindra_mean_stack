let http = require("http")
let url = require("url")
let fs = require("fs");
//const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
//let path = "./records.json";
let records1;

//let records1;

try {
    records1 = JSON.parse(fs.readFileSync("records.json").toString());
} catch (e) {
    records1 = [];
}
let taskPlanner = `
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- <link rel='stylesheet' type='text/css' media='screen' href='main.css'> -->
    <!-- <script src='main.js'></script> -->
</head>
<body>
    <h2 style="text-align: center;">Task Planner</h2>
    <h5>Add Task</h5>
    <form action="storeTask">
    <label>Emp ID:</label>
    <input type="text" name="empId"/><br/>
    <label>Task ID:</label>
    <input type="text" name="taskId"/><br/>
    <label>Task:</label>
    <input type="text" name="task"/><br/>
    <label>Deadline:</label>
    <input type="date" name="deadLine"/><br/>
    <input type="submit" value="Add Task"/>
</form>
</body>
</html>
`

let deleteTaskPage = `
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- <link rel='stylesheet' type='text/css' media='screen' href='main.css'> -->
    <!-- <script src='main.js'></script> -->
</head>
<body>
    <form action="deleteTask">
    <h5>Delete Task</h5>
    <label>Task Id</label>
    <input type="text" name="delId">
    <input type="submit" value="Delete Task"/>
    </form>
</body>
</html>
`

let listTaskPage = `
<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <!-- <link rel='stylesheet' type='text/css' media='screen' href='main.css'> -->
    <!-- <script src='main.js'></script> -->
</head>
<body>
    <form action="listTask">
    <h5>List Task</h5>
    <input type="submit" name="taskList" value="List Task"/>
    </form>
</body>
</html>
`


let server = http.createServer((request, response) => {
    let urlInfo = url.parse(request.url, true);
    //let records1 = JSON.parse(fs.readFileSync("records.json").toString());
    if (urlInfo.pathname != "/favicon.ico") {
        if (urlInfo.path == "/taskPlanner") {

            response.write(taskPlanner)
            response.write(deleteTaskPage)
            response.write(listTaskPage)
        } else if (urlInfo.pathname == "/storeTask") {
            let taskInfo = urlInfo.query;
            //if (fs.existsSync(path)) {
            console.log("Hello")
            //let records1 = JSON.parse(fs.readFileSync("records.json").toString());
            let result = records1.find(l => l.empId == taskInfo.empId);
            let taskResult = records1.find(l => l.taskId == taskInfo.taskId)
            let result1 = [];
            let result2 = [];
            let check = false;
            for (let i = 0; i < records1.length; i++) {
                var obj = records1[i];
                result1.push(obj.empId);
                result2.push(obj.taskId);
                // console.log("************")
            }

            for (let i = 0; i < result1.length; i++) {
                if (result1[i] == taskInfo.empId && result2[i] == taskInfo.taskId) {
                    check = true;
                }

            }
            //let check = (result1 == taskInfo.empId);
            // console.log(result1)
            // console.log(result2)

            //console.log(result)
            // console.log(taskResult)
            // console.log("Hii")
            //console.log(result);
            if (taskResult == undefined && result == undefined) {
                records1.push(taskInfo);

                fs.writeFileSync("records.json", JSON.stringify(records1))
                response.write(taskPlanner)
                response.write("<p>Task added sucessfully!</p>")
                response.write(deleteTaskPage)
                response.write(listTaskPage)


            }
            else if (result == undefined && taskResult != undefined) {
                records1.push(taskInfo);

                fs.writeFileSync("records.json", JSON.stringify(records1))
                response.write(taskPlanner)
                response.write("<p>Task added sucessfully!</p>")
                response.write(deleteTaskPage)
                response.write(listTaskPage)
            } else if (check != true) {
                records1.push(taskInfo);

                fs.writeFileSync("records.json", JSON.stringify(records1))
                response.write(taskPlanner)
                response.write("<p>Task added sucessfully!</p>")
                response.write(deleteTaskPage)
                response.write(listTaskPage)
            }
            else {
                response.write(taskPlanner)
                response.write("<p>Task id needed to be unique!!!!!</p>")
                response.write(deleteTaskPage)
                response.write(listTaskPage)
            }

            // } else {
            //    // console.log("hello")
            //    //records1 = []
            //     records1.push(taskInfo);
            //     fs.writeFileSync("records.json", JSON.stringify(records1))
            //     response.write(taskPlanner)
            //     response.write("<p>Task added sucessfully!</p>")
            //     response.write(listTaskPage)
            // }
        }
        else if (urlInfo.pathname == "/deleteTask") {
            let deleteTaskID = urlInfo.query;
            //console.log(deleteTaskID.delId)
                    
                    
                    
                 
            for (let i = 0; i < records1.length; i++) {
                if (deleteTaskID.delId == records1[i].taskId) {
                    //console.log(records1[i].taskId)
                    records1.splice(i, 1)
                    //fs.writeFileSync("records.json", JSON.stringify(records1))
                    response.write(taskPlanner)
                    response.write(deleteTaskPage)
                    response.write("<p>Deleted sucessfully!</p>")
                    response.write(listTaskPage)
                    //console.log("Hi")
                }
            }
            fs.writeFileSync("records.json", JSON.stringify(records1))
            
        } else if (urlInfo.pathname == "/listTask") {
            let tableContent = "";
            let startTable = `
            <table border = 1>
            <tr>
                <th>Emp Id</th>
                <th>Task Id</th>
                <th>Task</th>
                <th>Deadline</th>
            </tr>
            `
            console.log(records1)
            for (data of records1) {
                tableContent += "<tr><td>" + data.empId + "</td><td>" + data.taskId + "</td><td>" + data.task + "</td><td>" + data.deadLine + "</td></tr>"

            }
            let endTable = "</table><br>";
            tableContent = startTable + tableContent + endTable;
            response.write(taskPlanner)
            response.write(deleteTaskPage)
            response.write(listTaskPage)
            response.write(tableContent);
        }
    }
    response.end();
})



server.listen(9090, () => console.log("Server running on port number 9090"))