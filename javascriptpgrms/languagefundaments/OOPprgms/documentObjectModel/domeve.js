var clk = document.querySelector("#clk");
clk.addEventListener("click",()=>{
    clk.textContent="Clicked";
    clk.style.color="red";
})

var dbclk = document.querySelector("#dbclk");
dbclk.addEventListener("dblclick",()=>{
    dbclk.textContent="DoubleClicked";
    dbclk.style.color="green";
})

var ove =document.querySelector("#ove");
ove.addEventListener("mouseover",()=>{
    ove.style.color="orange";
})
ove.addEventListener("mouseout",()=>{
    ove.style.color="black";
})