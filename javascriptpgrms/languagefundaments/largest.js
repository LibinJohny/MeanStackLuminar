var num1=10;
var num2=30;
var num3=30;

if((num1>num2 && num1>num3)){
    if(num2>num3){
        console.log("num2 is the second largest");
    } 
    else{
        console.log("num3 is the second largest")
    }
}
else if((num2>num3 && num2>num1)){
    if(num3>num1){
        console.log("num3 is the second largest")
    }
    else{
        console.log("num1 is the second largest")
    }
}
else if((num3>num1 && num3>num2)){
    if(num2>num1){
        console.log("num2 is the second largest")
    }
    else{
        console.log("num1 is the second largest")
    }
}
else{
    console.log("all numbers are euqal")
}