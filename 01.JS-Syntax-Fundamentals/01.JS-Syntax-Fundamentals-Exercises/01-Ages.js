function main(number) {
    if (number >= 0 && number <= 2) {
        console.log("baby");
    } else if (number >= 3 && number <= 13) {
        console.log("child");
    } else if (number >= 14 && number <= 19) {
        console.log("teenager");
    } else if (number >= 20 && number <= 65) {
        console.log("adult");
    } else if (number >= 66 && number <= 100) {
        console.log("elder");
    } else {
        console.log("out of bounds");
    }
}

main (20)
main (1)
main (100)
main (-1)