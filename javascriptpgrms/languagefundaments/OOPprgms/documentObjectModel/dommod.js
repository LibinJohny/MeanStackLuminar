// var tags= document.getElementsByTagName("h1")
// for(tag of tags){
//     tag.style.color="red";
// }
// var list = document.getElementsByTagName("li");
// for(li of list){
//     li.style.color ="green";
// }
// var one = document.getElementById("one");
// one.style.color="green";
// var clas = document.getElementsByClassName("blue");
// for(tag of clas){
//     tag.style.color="blue";
// }

var tags = document.querySelectorAll("h1");
for(tag of tags){
    tag.style.color = "red";
}
var list =document.querySelectorAll("li");
for(li of list){
    li.style.color="green"
}
var one = document.querySelector("#one");
one.style.color = "green";
var clas = document.querySelectorAll(".blue");
for(tag of clas){
    tag.style.color="blue";
} 
var dome=document.querySelector("#dome");
dome.innerHTML="<em>Document Object Methods</em>";













