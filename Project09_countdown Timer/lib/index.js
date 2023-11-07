import inquirer from "inquirer";
import { differenceInSeconds } from 'date-fns';
differenceInSeconds;
let res = await inquirer.prompt({
    type: "input",
    name: "username",
    message: " Enter the second"
});
let input = res.username;
function startTime(val) {
    const inTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(inTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Time has expired");
            process.exit();
        }
        const minute = Math.floor((timeDiff % (3600 * 24)) / 3600);
        const seconds = Math.floor(timeDiff % 60);
        console.log(`${minute.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`);
    }, 1000);
}
startTime(input);
