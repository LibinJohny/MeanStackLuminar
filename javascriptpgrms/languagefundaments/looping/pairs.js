var arr=[1,2,3,4,5,6]

var element=7;

var low=0;
var upp=arr.length-1;
var flag=0;
while(low<upp){
    let total= arr[low]+arr[upp]
    if(element>total){
        upp-=1;
    }
    else if(element<total){
        low+=1;
    }
    else if(element==total){
        console.log(arr[low],arr[upp]);
        upp-=1;
        low+=1;
    }
    else{
        flag=1;
    }

}

if(flag==1){
    console.log("no pairs exist");
}