function main(number, ...params) {
    number = number * 1
    params.forEach(element => {
        if (element === 'chop') {
            number /= 2
        } else if (element === 'dice') {
            number = Math.sqrt(number)
        } else if (element === 'spice') {
            number += 1
        } else if (element === 'bake') {
            number *= 3
        } else if (element === 'fillet') {
            number *= 0.8
        }
        console.log(number)
    }); 
}

main ('32', 'chop', 'chop', 'chop', 'chop', 'chop')
main ('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

// 