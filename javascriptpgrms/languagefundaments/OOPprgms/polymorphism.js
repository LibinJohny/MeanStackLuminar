class Maths{
    add=()=>{
        console.log("No argument")
    }
    add=(n1)=>{
        console.log("One argument")
    }
    add=(n1,n2)=>{
        console.log("Two argument")
    }

}

var math= new Maths;
math.add();