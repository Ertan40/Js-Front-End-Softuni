function findTheSmallest (num1, num2, num3) {
    
    let smallest = Math.min(num1, num2, num3)
    console.log(smallest)    
}

findTheSmallest (2, 5, 3)
findTheSmallest (600, 342, 123)
findTheSmallest (25, 21, 4)
findTheSmallest (2, 2, 2)

// Second solution
// function main(...params) {
//     let min = 1000000000000;
//     params.forEach(el => {
//         if (el < min) {
//             min = el
//         }
//     });
//     console.log(min);
// }