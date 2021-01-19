class Student{
    constructor(rolno,name,course,total){
        this.rolno =rolno;
        this.name =name;
        this.course=course;
        this.total=total;
    }
    printStudent=()=>{
        console.log("rolno",this.rolno);
        console.log("name",this.name);
        console.log("course",this.course);
        console.log("total",this.total);
    }
}

var obj= new Student("1001","libin","bigdata",1200);
var obj2= new Student("1002","kiran","MERN",900);
var obj3= new Student("1003","lijo","Ai",800);
var obj4= new Student("1004","ebin","test",1100);
var obj5= new Student("1005","bibin","MERN",1200);

var students =[];
students.push(obj);
students.push(obj2);
students.push(obj3);
students.push(obj4);
students.push(obj5);

// students.forEach(student => console.log(student.name));
students.filter(obj=>obj.course=="MERN").forEach(obj=>console.log(obj.name))
var total= students.map(obj=>obj.total).reduce((t1,t2)=>t1>t2?t1:t2);
console.log(total);


