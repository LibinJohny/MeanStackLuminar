var word ="ABABC"

var letters = word.split("")

console.log(letters)

obj={};
for(let letter of word){
    if(letter in obj){
        console.log(letter);
        break;
    }
    else{
        obj[letter]= 1;
    }
}