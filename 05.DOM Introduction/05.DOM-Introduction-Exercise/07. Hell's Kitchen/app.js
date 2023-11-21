function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const bestRestaurantText = document.querySelector('#outputs > #bestRestaurant > p')
   const bestRestaurantEmployees = document.querySelector('#outputs > #workers > p')

   let bestRestaurants = {}
   bestRestaurantText.textContent = ''
   bestRestaurantEmployees.textContent = ''

   function displayBestRestaurant(restaurantName) {
      const sortedEmployees = Object.values(bestRestaurants[restaurantName].employees).sort((a, b) => b.salary - a.salary)
      let bestEmployees = []
      
      sortedEmployees.forEach(employee => {
         console.log(employee);
         bestEmployees.push(`Name: ${employee.name} With Salary: ${employee.salary}`)
      });
      const restaurant = bestRestaurants[restaurantName]
      bestRestaurantText.textContent = `Name: ${restaurantName} Average Salary: ${restaurant.avgSalary.toFixed(2)} Best Salary: ${sortedEmployees[0].salary.toFixed(2)}`
      bestRestaurantEmployees.textContent = bestEmployees.join(" ")
   }
   function findBestRestaurant(allRestaurants) {
      let bestRestaurant = ""
      let bestAvgSalary = 0
      for (const [name, data] of Object.entries(allRestaurants)) {
         if (data.avgSalary > bestAvgSalary) {
            bestAvgSalary = data.avgSalary
            bestRestaurant = name
         }
      }
      return bestRestaurant
   }
   function onClick () {
      let input = document.querySelector('textarea').value
      // ["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 1300, Joe 780, Jane 660"]
      let restaurants = Array.from(JSON.parse(input))
      // ['PizzaHut - Peter 500, George 300, Mark 800', 'TheLake - Bob 1300, Joe 780, Jane 660']
      // console.log(restaurants);
      for (const restaurant of restaurants) {
         let [restaurantName, employees] = restaurant.split(' - ')
         // (!bestRestaurants.hasOwnProperty(restaurantName))
         if (!(restaurantName in bestRestaurants)) {
            bestRestaurants[restaurantName] = {}
            bestRestaurants[restaurantName].employees = []
            bestRestaurants[restaurantName].totalSalary = 0
            bestRestaurants[restaurantName].avgSalary = 0
         } 
         employees.split(', ').forEach(employee => {
            let [name, salary] = employee.split(' ')

            salary = parseFloat(salary)
            bestRestaurants[restaurantName].employees.push({name: name, salary: salary})
            bestRestaurants[restaurantName].totalSalary += salary
         });
         bestRestaurants[restaurantName].avgSalary = bestRestaurants[restaurantName].totalSalary / bestRestaurants[restaurantName].employees.length
      }
      const bestRestaurant = findBestRestaurant(bestRestaurants)
      displayBestRestaurant(bestRestaurant)
   }
}

