function main (input) {
    let courses = {}

    for (let data of input) {  // data: JavaBasics: 2   user1[25] with email user1@user.com joins C#Basics
        let newData = data.split(': ') // ['JavaBasics', '2']   ['user1[25] with email user1@user.com joins C#Basics']
        if (newData.length > 1) {
            let course = newData[0];
            let places = parseInt(newData[1]);
            
            if (course in courses) {
                courses[course]['places'] += places
            } else {
                courses[course] = {
                    'name': course,
                    'places': places,
                    'students': [],
                }
            }
        } else {
            let newData = data.split(' ')  // ['user1[25]', 'with', 'email', 'user1@user.com', 'joins', 'C#Basics']
            let [student, credits] = newData[0].split('[');
            credits = credits.replace(']', '') * 1
            newData.shift(); newData.shift(); newData.shift();
            let email = newData.shift();
            let course = newData.pop();
            // console.log(student, credits, email, course) // user1 25 user1@user.com C#Basics
            if (course in courses) {
                if (courses[course]['students'].length < courses[course]['places']) {
                    courses[course]['students'].push([credits, student, email])
                }
            }
        }
    }
    let sortedCourses = Object.values(courses).sort((a, b) => b['students'].length - a['students'].length)
    sortedCourses.forEach(el => { // {name: 'JSCore', places: 6, students: Array(6)}
        let leftPlaces = el.places - el.students.length
        console.log(`${el.name}: ${leftPlaces} places left`)
        let sortedStudents = el.students.sort((a, b) => b[0] - a[0])
        for (let key of sortedStudents) {
            console.log(`--- ${key[0]}: ${key[1]}, ${key[2]}`)
        }
    });

}

main (['JavaBasics: 2', 'user1[25] with email user1@user.com joins C#Basics', 'C#Advanced: 3', 'JSCore: 4', 
'user2[30] with email user2@user.com joins C#Basics', 'user13[50] with email user13@user.com joins JSCore', 
'user1[25] with email user1@user.com joins JSCore', 'user8[18] with email user8@user.com joins C#Advanced', 
'user6[85] with email user6@user.com joins JSCore', 'JSCore: 2', 'user11[3] with email user11@user.com joins JavaBasics', 
'user45[105] with email user45@user.com joins JSCore', 'user007[20] with email user007@user.com joins JSCore', 
'user700[29] with email user700@user.com joins JSCore', 'user900[88] with email user900@user.com joins JSCore'])