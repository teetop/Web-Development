class Student {
    studentName;
    age;
    matricNumber;
    score;
    registered = false;


    constructor(studentName, age) {
        this.studentName = studentName;
        this.age = age;
    }

    register(name, age) {
        this.studentName = name;
        this.age = age;
        this.matricNumber = name.substring(0, 2).toUpperCase() + age.toString();
        this.registered = true;
    }


    writeExam() {
        this.score = 20;
    }

    checkResult() {
        return this.score;
    }
}


const student1 = new Student();
const student2 = new Student("James", 32);

student1.register("Dean", 21);
student1.writeExam();
document.getElementById("result").innerHTML += student1.checkResult()+"<br>";
console.log(student1)
console.log(student2)
console.log(student1.checkResult())
