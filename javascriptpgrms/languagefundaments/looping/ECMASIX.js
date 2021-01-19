//map
//filter
//reduce
//sort

var arr=[10,11,12,13,14,15];
var sqr = arr.map(num=>num**2)
var cube = arr.map(num=>num**3)

var even = arr.filter(num=>num%2==0);
var names =["Libin","Johny","sachin","sewang","sreeshanth"]

var nam = names.map(na=>na.toUpperCase());
//var sname
names.filter(na=>na[0]=='s').map(na=>na.toUpperCase()).forEach(na=>console.log(na));
var max =arr.reduce((num1,num2)=>num1>num2?num1:num2);
var min =arr.reduce((num1,num2)=>num1<num2?num1:num2);
var total =arr.reduce((num1,num2)=>num1+num2);
console.log(even);
console.log(sqr);
console.log(cube);
console.log(nam);
console.log(max,min,total);
// console.log(sname);