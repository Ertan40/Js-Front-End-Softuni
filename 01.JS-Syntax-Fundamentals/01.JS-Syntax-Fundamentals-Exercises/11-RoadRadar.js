function main(speed, area) {
    let speed_limit;
    if (area === 'motorway'){
        speed_limit = 130
    } else if (area === 'interstate') {
        speed_limit = 90
    } else if (area === 'city') {
        speed_limit = 50
    } else if (area === 'residential') {
        speed_limit = 20
    }
    let difference = speed - speed_limit
    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${speed_limit} zone`);
    } else if (difference <= 20){
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speed_limit} - speeding`);
    } else if (difference <= 40) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speed_limit} - excessive speeding`);
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speed_limit} - reckless driving`);
    }
} 

main(40, 'city')
main(21, 'residential')
main(120, 'interstate')
main(200, 'motorway')