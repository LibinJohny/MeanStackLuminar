var tweets = ["sachin,tweet1","sachin,tweet2","kohli,tweet2","sewang,tweet1","kohli,tweet2","kohli,tweet2"]

obj = {};

for(let tweet of tweets){
    let name = tweet.split(",")[0];
    if(name in obj){
        obj[name]+=1;
    }
    else{
        obj[name] =1;
    }
}

console.log(obj);
var top=0;
var famous;
for(let tweet in obj){
    if(top<obj[tweet]){
        top = obj[tweet]
        famous = tweet;
    }

}
console.log(famous);

// var arr={};
// for(let name in obj){

//     arr

// }