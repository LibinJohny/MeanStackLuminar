var num1=123;


//1**3+2**3+3**3

var i =3;
var j=1;
var sum=0;
var tsum=0;
while(i>=j){
    sum=sum*10+i;
    tsum=tsum+sum;
    j++;
}

console.log(tsum);