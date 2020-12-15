var employee={
    eid:1001,
    name:"vijay",
    des:"developer",
    sal:25000
}

console.log("gender" in employee);
employee.gender = "male";
// console.log(employee.name, employee.gender);

employee.sal+=5000;
for(let k in employee){
    console.log(employee[k]);
}


