class Parent{
    m1=()=>{
        console.log("Parent Inside");
    }
}

class Child extends Parent{
    m2=()=>{
        console.log("Child inside");
    }
}

class Subchild extends Child{

    m3=()=>{
        console.log("Subchild inside");
    }
}


var obj = new Subchild;
obj.m3();
obj.m2();
obj.m1();

var obj1 = new Child;
// obj1.m3();
obj1.m2();
obj1.m1();

var obj2 = new Parent;
// obj2.m3();
// obj2.m2();
obj2.m1();

