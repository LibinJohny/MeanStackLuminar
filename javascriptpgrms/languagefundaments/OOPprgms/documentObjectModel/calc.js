function display(num){
    var txt = document.querySelector("#display");
    txt.value += num;
}

function total(){
    var txt = document.querySelector("#display");
    let res = eval(txt.value);
    txt.value =res; 
}

let clearbox = ()=>{
    document.querySelector('#display').value=" "
}