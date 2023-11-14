function main (input) {
    let armies = {};
   
    for (let i of input) {
        data = i.split(' ') // ['Rick', 'Burr', 'arrives']
        if (data.includes('arrives')) {
            data.pop()
            let leader = data.join(' ');
            if (leader in armies) {

            } else {
                armies[leader] = {'total': 0};
            }
        } else if (data.includes('defeated')) {
            data.pop();
            let leader = data.join (' ');
            if (leader in armies) {
                delete armies[leader]
            }
        } else if (data.includes('+')) {
            let armyName = data.shift();
            let armyCount = parseInt(data.pop()); 
            // console.log(armies) // {Rick Burr: {…}, Findlay: {…}, Porter: {…}}
            for (let leader in armies) {
                for (let key in armies[leader]) {
                    if (key === armyName) {
                        armies[leader][key] += armyCount;
                        armies[leader]['total'] += armyCount; 
                        
                    }
                }
            }    
        } else {
            let new_data = i.split(": ") // ['Fergus', 'Wexamp, 30245']
            let leader = new_data.shift();
            let army = new_data[0].split(", ")[0]; // Wexamp
            let quantity = parseInt(new_data[0].split(", ")[1]);  // 30245
            if (leader in armies) {
                armies[leader][army] = quantity;
                armies[leader]['total'] += quantity;
            }
        }
    }
    let sorted = Object.entries(armies);
    sorted.sort( (a, b) => b[1]['total'] - a[1]['total']);
    sorted.forEach(element => {
        sorted_armies = Object.entries(element[1]);
        sorted_armies.sort((a, b) => b[1] - a[1]);
        console.log(`${element[0]}: ${element[1]['total']}`);
        sorted_armies.forEach(element => {
            if (element[0] !== 'total') {
                console.log(`>>> ${element[0]} - ${element[1]}`);
            }
        });
    }); 
}
main (['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 
'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])