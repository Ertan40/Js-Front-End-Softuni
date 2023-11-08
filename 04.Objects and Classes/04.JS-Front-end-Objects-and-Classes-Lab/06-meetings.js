function solve (inputArr) {
    let meetings = {}
    for (let info of inputArr) {
        let [weekday, name] = info.split(' ')
        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`)
        } else {
            meetings[weekday] = name
            console.log(`Scheduled for ${weekday}`)
        }
    }
    for (let key in meetings) {
        console.log (`${key} -> ${meetings[key]}`)
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])

solve (['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])