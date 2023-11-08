export function getAnswer(num1: number,num2: number,operator: string): number {
  
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 == 0) {
        console.log("Cannot divided by Zero");
      }
      return num1 / num2;
    default:
      console.log("Invalid Input");
return 0      
  }
}
