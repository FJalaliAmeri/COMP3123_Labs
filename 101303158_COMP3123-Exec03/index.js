var http = require("http");
//TODO - Use Employee Module here
let employees = require("./Employee.js")
console.log("Lab 03 -  NodeJs");


//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        switch(req.url){
            case '/':
                //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
                res.write("<h1>Welcome to Lab Exercise 03</h1>")
                break;
            case '/employee':
                //TODO - Display all details for employees in JSON format
                res.write("<h1>Employees</h1>")
                res.write(`<pre> ${JSON.stringify(employees,null,2)} </pre>`)
                break;
            case '/employee/names':
                //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
                //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
                res.write("<h1>Employee Names</h1>")
                employees.sort((employeeA,employeeB) => (employeeA.firstName.localeCompare(employeeB.firstName)))
                let employeeNames = employees.map(employee => `${employee.firstName} ${employee.lastName}`)
                res.write(`<pre> ${JSON.stringify(employeeNames)} </pre>`)
                break;
            case '/employee/totalsalary':
                //TODO - Display Sum of all employees salary in given JSON format 
                //e.g. { "total_salary" : 100 }  
                res.write("<h1>Employee Total Salary</h1>")
                let totalSalary = employees.reduce((total,employee) => total + employee.Salary,0)
                res.write(`<pre> { "total_salary" : ${totalSalary} } </pre>`)
                break;
            default:
                res.write("<h1>No Endpoint Found</h1>")
                break;
        }   
    }
    res.end()
})

server.listen(port, (err) => {
    if (err) {
        console.log("Server: " + err)
        return
    }
    console.log(`Server listening on port ${port}`);
})