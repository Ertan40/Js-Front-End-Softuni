function main (num1, num2) {
    let total = 0
    let space = ""
    for (let i=num1; i <= num2; i++) {
        total += i;
        space += i + " "; 
    }
    console.log(space);
    console.log(`Sum: ${total}`);
}

main (5, 10)
main (0, 26)
main (50, 60)