class Parent{
    phone=()=>{
        console.log("I have Iphone 8");
    }
}

class Child extends Parent{

}

var obj = new Child;
obj.phone();