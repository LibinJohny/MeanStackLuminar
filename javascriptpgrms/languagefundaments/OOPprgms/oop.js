class Person {
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    printPerson=()=>{
        console.log(this.name,this.age,this.gender);
    }
}

var obj = new Person("ajay",28,"male");

obj.printPerson(); 