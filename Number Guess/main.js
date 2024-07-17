// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt("Enter ur username:");
//     password = window.prompt("Enter ur password:");

//     if(username === "ashnyie" && password === "987123"){
//         loggedIn = true;
//         console.log("ur LOGGED IN!");
//     }
//     else{
//         console.log("invalid username or password");
//     }
// }


// for(let i = 1; i <= 20; i++){
//     if(i == 10){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }
// console.log("Happy Birthday!");





const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){


    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number!");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter a valid number!");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW, TRY AGAIN!");
        }
        else if(guess > answer){
            window.alert("TOO HIGH, TRY AGAIN!");
        }
        else{
            document.getElementById("myH1").textContent = `CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`;
            
            // window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false
        }
    }
        



    
}
