
import inquirer from "inquirer";

class Student {
  name: string;
  tName: string;

  constructor(n: string, tName: string) {
    this.name = n;
    this.tName = tName;
  }
}

class Person {
  students: Student[] = [];
  teachers: Teacher[] = [];

  addStudent(obj: Student) {
    this.students.push(obj);
  }
}

class Teacher {
  teachers: Teacher[] = [];

  addTeacher(obj: Teacher) {
    this.teachers.push(obj);
  }
}

const person = new Person();
const teacher = new Teacher();

console.log(person);

const prgramStart = async (persons: Person, teachers: Teacher) => {
  do {
    const ans = await inquirer.prompt({
      type: "list",
      message: "Which person would you like to talk to",
      name: "select",
      choices: ['Teacher', 'Student'],
    });

    if (ans.select == 'Teacher') {
      const answerTeacher = await inquirer.prompt({
        type: "input",
        message: "Add a teacher",
        name: "teacherName"
      });
      const teacherName = answerTeacher.teacherName;

      const existingTeacher = teachers.teachers.find(teacher => teacher.teachers == teacherName);
      if (!existingTeacher) {
        const newTeacher = new Teacher(); // Create a new Teacher instance
        newTeacher.teachers = teacherName; // Set the teacher's name
        teachers.addTeacher(newTeacher); // Add the new teacher to the list
        console.log(`Hi I am a teacher ${newTeacher.teachers}, i am fine`);
        console.log(teachers.teachers);
        
        
      }
    }

    if (ans.select == 'Student') {
      const answerStudent = await inquirer.prompt({
        type: "input",
        message: "Kindly add your Student",
        name: "studentName"
      });
      const studentName = answerStudent.studentName;

      const existingStudent = persons.students.find(student => student.name == studentName);
      if (!existingStudent) {
        const newStudent = new Student(studentName, ""); // Create a new Student instance
        persons.addStudent(newStudent); // Add the new student to the list
        console.log(`Hi, I am ${newStudent.name}, I am fine`);
        console.log(persons.students);
      } else {
        console.log(`Hi, I am ${existingStudent.name}, I am fine`);
        console.log(persons.students);
      }
    }
  } while (true);
};

prgramStart(person, teacher);
