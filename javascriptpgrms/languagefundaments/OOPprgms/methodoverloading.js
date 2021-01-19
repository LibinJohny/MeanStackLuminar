class Parent{
    constructor(){
        console.log("Parent Constructor");
    }
    phone=()=>{
        console.log("I have Nokia")
    }
}

class Child extends Parent{
    constructor(){
        super();
    }
    phone=()=>{
        console.log("I have Iphone")
    }
}

var obj = new Child;

obj.phone();