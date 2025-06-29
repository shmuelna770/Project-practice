import readlinenyck from "readline-sync"

class Riddle{
    constructor(id,name,taskDescription,correctAnswer){
        this.id = id;
        this.name = name;
        this.taskDescription = taskDescription;
        this.correctAnswer = correctAnswer;
    }
    ask(){
        console.log(`\nRiddle ${this.id}: ${this.name}`);
        let answer =``;
        while (answer !== this.correctAnswer){
            answer = readlinenyck.question(`${this.taskDescription}`)
            if (answer !== this.correctAnswer){
                console.log("try again")
            }
        }
        console.log("correct answer")
    }

}
export default Riddle;