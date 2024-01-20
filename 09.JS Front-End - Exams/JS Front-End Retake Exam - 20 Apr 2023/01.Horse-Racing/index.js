function solve(input) {

    let horses = input.shift().split("|"); // ['Bella', 'Alexia', 'Sugar']

   for (let command of input) {
        let [action, ...params] = command.split(" ")

        if (action === "Finish") {
            break
        } else if (action === "Retake"){
            let horse1 = params[0]
            let horse2 = params[1]
            let index1 = horses.indexOf(horse1)
            let index2 = horses.indexOf(horse2)
            if (index1 < index2) {
                [horses[index1], horses[index2]] = [horses[index2], horses[index1]]
                console.log(`${horse1} retakes ${horse2}.`)
            } 
        } else if (action === "Trouble") {
            let horse = params[0]
            let index = horses.indexOf(horse)
            if (index !== 0) {
                [horses[index], horses[index-1]]= [horses[index-1], horses[index]]
                console.log(`Trouble for ${horse} - drops one position.`);
            } 
        } else if (action === "Rage") {
            let horse = params[0]
            let index = horses.indexOf(horse)
            horses.splice(index + 2 , 0, horses.splice(index, 1));
            console.log(`${horse} rages 2 positions ahead.`);
        } else if (action === "Miracle") {
            let last = horses.shift()
            horses.push(last)
           console.log(`What a miracle - ${last} becomes first.`)
        }
    }
    console.log(horses.join("->"))
    let winner = horses[horses.length - 1]
    console.log(`The winner is: ${winner}`)
}
// ----- Judge: 90 -----

solve([
    'Bella|Alexia|Sugar',
    'Retake Alexia Sugar',
    'Rage Bella',
    'Trouble Bella',
    'Finish'
]);
 
solve (['Onyx|Domino|Sugar|Fiona',
'Trouble Onyx',
'Retake Onyx Sugar',
'Rage Domino',
'Miracle',
'Finish'])

solve (['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])

