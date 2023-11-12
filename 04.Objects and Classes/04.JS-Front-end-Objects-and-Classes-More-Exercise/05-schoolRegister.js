function schoolRegister (input) {
    let studentInfo = {}
    for (let info of input) {
        let [name, grade, avgScore] = info.split(', ')
        name = name.split(': ')[1];
        grade = parseInt(grade.split(': ')[1]);
        avgScore = parseFloat(avgScore.split(': ')[1]);
        if (avgScore >= 3) {
            grade += 1
            if (!studentInfo.hasOwnProperty(grade)) {
                studentInfo[grade] = {}
                studentInfo[grade].students = [] 
                studentInfo[grade].totalScore = 0
            }
            studentInfo[grade].students.push(name) // studentInfo[grade]['students'].push(name)
            studentInfo[grade].totalScore += avgScore
        }
    }
    for (let grade of Object.entries(studentInfo)) {
        console.log(`${grade[0]} Grade`)
        console.log(`List of students: ${grade[1].students.join(', ')}`)
        const score = (grade[1].totalScore / grade[1].students.length).toFixed(2)
        console.log(`Average annual score from last year: ${score}`)
        console.log()
    }
}

schoolRegister ([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"    
])