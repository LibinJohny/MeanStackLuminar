var num=123;
var temp=num;
var i=0;
var sum=0;
while(temp!=0){
    i=(temp%10)**3;
    sum=sum+i;
    temp=Math.floor(temp/10);
}
console.log(sum);