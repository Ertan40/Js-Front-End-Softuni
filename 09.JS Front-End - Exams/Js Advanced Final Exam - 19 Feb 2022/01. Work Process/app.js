function solve() {
    const hireBtn = document.getElementById("add-worker")
    const fname = document.getElementById("fname")
    const lname = document.getElementById("lname")
    const email = document.getElementById("email")
    const birth = document.getElementById("birth")
    const position = document.getElementById("position")
    const salary = document.getElementById("salary")
    const message = document.getElementById('message')
    const sum = document.getElementById("sum")
    const tbody= document.getElementById("tbody")
    let firedBtn, editBtn
    hireBtn.addEventListener("click", hireWorker)
    let worker = {}
    function hireWorker(e) {
        e.preventDefault()
        if (fname.value && lname.value && email.value && birth.value && position.value && salary.value) {
            worker = {
                "fname": fname.value,
                "lname": lname.value,
                "email": email.value,
                "birth": birth.value,
                "position": position.value,
                "salary": salary.value,
            }

            let row = document.createElement("tr")
            row.innerHTML = `
            <td>${fname.value}</td>
            <td>${lname.value}</td>
            <td>${email.value}</td>
            <td>${birth.value}</td>
            <td>${position.value}</td>
            <td>${salary.value}</td>
            <td><button class="fired">Fired</button> <button class="edit">Edit</button></td>
            `
            tbody.appendChild(row)
            firedBtn = row.querySelector(".fired")
            editBtn = row.querySelector(".edit")
            firedBtn.addEventListener("click", fireWorker)
            editBtn.addEventListener("click", editWorker)
            fname.value = ""
            lname.value = ""
            email.value = ""
            birth.value = ""
            position.value = ""
            sum.textContent = (Number(sum.textContent) + Number(salary.value)).toFixed(2)
            salary.value = ""  
        }
    }
    function fireWorker (e) {
        currentWorker = e.target.parentNode.parentNode;
        console.log(currentWorker);
        currentSalary = currentWorker.querySelector('td:nth-child(6)').textContent;
        sum.textContent = (Number(sum.textContent) - Number(currentSalary)).toFixed(2);
        currentWorker.remove();
    }
    function editWorker () {
        fname.value = worker.fname
        lname.value = worker.lname
        email.value = worker.email
        birth.value = worker.birth
        position.value = worker.position
        salary.value = worker.salary
        sum.textContent = (Number(sum.textContent) - (worker.salary)).toFixed(2)
        tbody.innerHTML = ""
    }
}
solve()

