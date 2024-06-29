
import inquirer from "inquirer";

async function main() {
    console.log("Enter Range");
    let { value1 } = await inquirer.prompt([{
        name: 'value1',
        message: 'Enter first value',
        type: 'number',
    }]);

    let { value2 } = await inquirer.prompt([{
        name: 'value2',
        message: 'Enter second value',
        type: 'number0',
    }]);

    function getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const randomNumber = getRandomNumber(value1, value2);
    let attempts = 3;

    for (let i = 0; i < attempts; i++) {
        let { value3 } = await inquirer.prompt([{
            name: 'value3',
            message: `Guess the number (Attempt ${i + 1}):`,
            type: 'number',
        }]);

        if (value3 === randomNumber) {
            console.log('You guessed it correctly!');
            askToPlayAgain();
            return;
        } else if (value3 < randomNumber) {
            console.log('Think of a bigger number.');
        } else if (value3 > randomNumber) {;
            console.log('Think of a smaller number.');
        }
    }

    console.log(`Sorry, you've used all ${attempts} attempts. The correct number was ${randomNumber}.`);
    askToPlayAgain();
}

async function askToPlayAgain() {
    console.log('Want to try again?');
    let { value4 } = await inquirer.prompt([{
        name: 'value4',
        message: `Enter Y to play again and N to Quit`,
        type: 'string',
    }]);
    if (value4.toUpperCase() === 'Y') {
        main();
    } else {
        console.log('Thank you for playing!');
    }
}

main();
