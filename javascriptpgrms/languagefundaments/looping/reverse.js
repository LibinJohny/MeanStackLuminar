var num1=123;

var num2=0;

while(num1!=0){
    let i;
    i=num1%10;
    num2=num2*10+i;
    num1=Math.floor(num1/10);

}
console.log(num2);
