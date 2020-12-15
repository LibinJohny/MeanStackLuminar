var arr=[5,2,4,3,1];

// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             var temp= arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }

console.log(arr);
// var flag= false;
// for(let data of arr){
//     if(data == 12){ 
//         flag = true;
//         break;
//     }
// }

// if(flag==true){
//     console.log("number found")
// }
// else{
//     console.log("number not found");
// }
var num=5;
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j] == num){
            console.log(arr[i],arr[j]);
        }
    }
}