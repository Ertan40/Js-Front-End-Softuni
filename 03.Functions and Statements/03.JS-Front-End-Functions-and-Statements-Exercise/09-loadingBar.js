function loadingBar (number) {
    let result = number % 10 
    let nTimes = number / 10
    if (result === 0 && number !== 100) {
        console.log (`${number}% [${'%'.repeat(nTimes) + '.'.repeat(10-nTimes)}]\nStill loading...`)
    } else {
        console.log('100% Complete!\n[%%%%%%%%%%]')
    }
}

loadingBar (30)
loadingBar (50)
loadingBar (100)