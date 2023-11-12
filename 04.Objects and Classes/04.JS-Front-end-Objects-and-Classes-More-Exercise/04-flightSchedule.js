function flightSchedule (input) {
    let flights = input.shift()
    // ['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 
    // 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania']
    let changedStatus = input.shift()
    // ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled']
    let status = input.shift()[0] // Cancelled or Ready to fly
    let destinations = {}
    flights.forEach(element => {
        let [num, destination] = element.split(' ');
        destinations[num] = {'Destination': destination, 'Status': 'Ready to fly'}
    });
    changedStatus.forEach(element => {
        let [num, status] = element.split(' ');
        if (num in destinations) {
            destinations[num]['Status'] = status
        }
    });
    for (let key in destinations) {
        if (destinations[key]['Status'] === status) {
            console.log (destinations[key]);
        }
    }
}

flightSchedule ([['WN269 Delaware',  
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK430 Cancelled'],
 ['Cancelled']
]
)
flightSchedule ([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
])
