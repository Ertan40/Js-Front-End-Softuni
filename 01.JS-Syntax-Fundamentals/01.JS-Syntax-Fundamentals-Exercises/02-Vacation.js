function main(group_of_people, type_of_the_group, day_of_the_week) {
    if (type_of_the_group === "Students" && day_of_the_week === "Sunday") {
        
        let result
        if (group_of_people < 30) {
            result = group_of_people * 10.46
            console.log (`Total price: ${result.toFixed(2)}`) 
        } else {
            result = group_of_people * 10.46 * 0.85
            console.log (`Total price: ${result.toFixed(2)}`)
        }
    }
    else if (type_of_the_group === "Students" && day_of_the_week === "Saturday") {
        
        let result
        if (group_of_people < 30) {
            result = group_of_people * 9.80
            console.log (`Total price: ${result.toFixed(2)}`) 
        } else {
            result = group_of_people * 9.80 * 0.85
            console.log (`Total price: ${result.toFixed(2)}`)
        }
    }
    else if (type_of_the_group === "Students" && day_of_the_week === "Friday") {
        
        let result
        if (group_of_people < 30) {
            result = group_of_people * 8.45
            console.log (`Total price: ${result.toFixed(2)}`) 
        } else {
            result = group_of_people * 8.45 * 0.85
            console.log (`Total price: ${result.toFixed(2)}`)
        }
    }
    // Regular
    else if (type_of_the_group === "Regular" && day_of_the_week === "Sunday") {
        
        let result
        if (group_of_people >= 10 && group_of_people <= 20) {
            result = group_of_people * 22.50 * 0.95
            console.log (`Total price: ${result.toFixed(2)}`) 
        } else {
            result = group_of_people * 22.50 
            console.log (`Total price: ${result.toFixed(2)}`)
        }
    }
    else if (type_of_the_group === "Regular" && day_of_the_week === "Saturday") {
        
        let result
        if (group_of_people >= 10 && group_of_people <= 20) {
            result = group_of_people * 20 * 0.95
            console.log (`Total price: ${result.toFixed(2)}`) 
        } else {
            result = group_of_people * 20 
            console.log (`Total price: ${result.toFixed(2)}`)
        }
    }
    else if (type_of_the_group === "Regular" && day_of_the_week === "Friday") {
        
        let result
        if (group_of_people >= 10 && group_of_people <= 20) {
            result = group_of_people * 15 * 0.95
            console.log (`Total price: ${result.toFixed(2)}`) 
        } else {
            result = group_of_people * 15
            console.log (`Total price: ${result.toFixed(2)}`)
        }
    }
    // Business
    else if (type_of_the_group === "Business" && day_of_the_week === "Sunday") {
        
        let result
        if (group_of_people >= 100) {
            result = (group_of_people * 16) - (10*16) 
            console.log (`Total price: ${result.toFixed(2)}`) 
        } else {
            result = group_of_people * 16
            console.log (`Total price: ${result.toFixed(2)}`)
        }
    }
    else if (type_of_the_group === "Business" && day_of_the_week === "Saturday") {
        
        let result
        if (group_of_people >= 100) {
            result = (group_of_people * 15.60) - (10*15.60) 
            console.log (`Total price: ${result.toFixed(2)}`) 
        } else {
            result = group_of_people * 15.60
            console.log (`Total price: ${result.toFixed(2)}`)
        }
    }
    else if (type_of_the_group === "Business" && day_of_the_week === "Friday") {
        
        let result
        if (group_of_people >= 100) {
            result = (group_of_people * 10.90) - (10*10.90) 
            console.log (`Total price: ${result.toFixed(2)}`) 
        } else {
            result = group_of_people * 10.90
            console.log (`Total price: ${result.toFixed(2)}`)
        }
    }
}

main (30, "Students", "Sunday")
main (40, "Regular", "Saturday")
main (40, "Business", "Saturday")


