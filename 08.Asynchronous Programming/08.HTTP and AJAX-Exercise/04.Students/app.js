function attachEvents() {
  const url = "http://localhost:3030/jsonstore/collections/students/"
  const submitBtn = document.getElementById("submit")
  const firstName = document.querySelector("input[name=firstName]")
  const lastName = document.querySelector("input[name=lastName]")
  const facultyNumber = document.querySelector("input[name=facultyNumber]")
  const grade = document.querySelector("input[name=grade]")
  const table = document.querySelector("#results tbody")

  submitBtn.addEventListener("click", addStudent)
  document.addEventListener("DOMContentLoaded", getData)

  function getData () {
    fetch(`${url}`).then((res) => res.json()).then((data) => {
      // console.log(data);
      table.innerHTML = ""
      for (const {firstName, lastName, facultyNumber, grade} of Object.values(data))
          table.innerHTML += `
          <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${facultyNumber}</td>
            <td>${grade}</td>
          </tr>
          `
    }).catch((error) => console.log(error))
  }
  function addStudent() {
    const httpHeaders = {
      method: 'post',
      body: JSON.stringify({
        "firstName": firstName.value,
        "lastName": lastName.value,
        "facultyNumber": facultyNumber.value,
        "grade": grade.value
      })
    }
    if (firstName.value && lastName.value && facultyNumber.value && grade.value) {
      fetch(`${url}`, httpHeaders)
        .then((res) => res.json())
        .then(() => {
          getData()
          firstName.value = ""
          lastName.value = ""
          facultyNumber.value = ""
          grade.value = ""
        })
        .catch((error) => console.log(error))
    } 
  }
}

attachEvents();

