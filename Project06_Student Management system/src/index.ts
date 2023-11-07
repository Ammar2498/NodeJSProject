
import inquirer  from "inquirer";
class Student {
    name: string;
    studentID: string;
    courses: string[];
    balance: number;
  
    constructor(name: string) {
      this.name = name;
      this.studentID = generateStudentID();
      this.courses = [];
      this.balance = 0;
    }

    enrollCourse(courseName: string, courseFee: number) {
        this.courses.push(courseName);
        this.balance += courseFee;
      }   
      payTuition(amount: number) {
        this.balance -= amount;
      }
   
  showStatus() {
    console.log(`Name: ${this.name}`);
    console.log(`Student ID: ${this.studentID}`);
    console.log(`Enrolled Courses: ${this.courses.join(', ')}`);
    console.log(`Balance: $${this.balance}`);
  }
   
  }

  function generateStudentID(): string {
    // Generate a unique 5-digit ID (you can use your own logic here)
    return Math.floor(10000 + Math.random() * 90000).toString();
  }


  
  const student1 = new Student("Ammar");
  student1.enrollCourse("Computer",5000)
  student1.payTuition(5000)
  student1.showStatus()































//   student1.enrollCourse("Math", 500);
//   student1.enrollCourse("Science", 600);
//   student1.enrollCourse("Computer",2300)
  
//   const student2 = new Student("Ali");
//   student2.enrollCourse("History", 450);
  
//   // To pay tuition fees:
//   student1.payTuition(200);
  
//   // To display student status:
//   student1.showStatus();
//   student2.showStatus();
//   student1.payTuition(450)
  