// const num=2;
// var pw=0;
// const low=8;
// const upp=40;
// for(let i=1;i<=40;i++){
//     pw = i**num;
//     if(pw>=low && pw<=upp){
//         console.log(i);
//     }
// }
//low=10 upp=50 prime numbers
const lowl=10;
const uppl=50;
var flag=0;
for(var i=lowl;i<=uppl;i++){
    for(let j=2; j<i/2;j++){
        if(i%j==0){
            flag=1;
            break;
        }
        else{
            flag=0;
        }
    }
    if(flag==0){
        console.log(i);
    } 
}

