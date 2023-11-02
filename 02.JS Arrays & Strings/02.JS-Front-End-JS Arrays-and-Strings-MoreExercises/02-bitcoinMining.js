function solve(inputArr) {
    let bitcoins = 0;
    let first_day;
    
    const bitcoinPrice = 11949.16;
    const goldPrice = 67.51;
    let currentMoney = 0;

    for (let index = 0; index < inputArr.length; index++) {
        let element = inputArr[index];
        let day = index + 1
        if (day % 3 === 0 ){
            element = element * .7
        }
        currentMoney += element * goldPrice
        if (currentMoney >= bitcoinPrice) {
            let buyed_bitcoins = ~~(currentMoney / bitcoinPrice);
            bitcoins += buyed_bitcoins
            currentMoney -= buyed_bitcoins * bitcoinPrice
            if (!first_day) {
                first_day = day
            }
        }
        
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
        if (first_day){
            console.log(`Day of the first purchased bitcoin: ${first_day}`);
        } 
        console.log(`Left money: ${currentMoney.toFixed(2)} lv.`);
}


solve([100, 200, 300])
solve([50, 100])
solve([3124.15, 504.212, 2511.124])