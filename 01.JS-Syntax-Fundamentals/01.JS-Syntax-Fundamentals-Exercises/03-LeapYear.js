function CheckLeapYear(year) {
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0 ) {
        console.log("yes");
    } 
    else {
        console.log("no");
    }
}

CheckLeapYear (1984)
CheckLeapYear (2003)
CheckLeapYear (4)
