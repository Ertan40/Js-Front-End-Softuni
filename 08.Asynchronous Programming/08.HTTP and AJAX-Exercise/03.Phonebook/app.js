function attachEvents() {
    
    const loadBtn = document.getElementById("btnLoad")
    const createBtn = document.getElementById("btnCreate")
    const inputPerson = document.getElementById("person")
    const inputPhone = document.getElementById("phone")
    const phoneBookLi = document.getElementById("phonebook")
    const BASE_URL = "http://localhost:3030/jsonstore/phonebook/"

    loadBtn.addEventListener("click", loadPhoneBook)
    createBtn.addEventListener("click", createPhoneBook)

    async function loadPhoneBook () {
        try {
            const response = await fetch(`${BASE_URL}`)
            const data = await response.json()
            phoneBookLi.innerHTML = "" 
            // console.log(data) // {person: 'John', phone: '+1-555-4986', _id: '6012c54'}
            for (const {person, phone, _id} of Object.values(data)) {
                // console.log(person) // Maya John Nicolle
                const li = document.createElement("li")
                const button = document.createElement("button")
                button.textContent = "Delete"
                button.id = _id 
                button.addEventListener("click", deletePhones) 
                li.textContent = `${person}: ${phone}`
                li.appendChild(button)
                phoneBookLi.appendChild(li) 
            }
        } catch (error) {console.log(error)}
    }

    function createPhoneBook () {
        const phone = inputPhone.value 
        const person = inputPerson.value 
        const httpHeaders = {   
            method: 'post',
            body: JSON.stringify({person, phone}),
        }
        fetch(BASE_URL, httpHeaders)
        .then((response) => response.json())
        .then(() => {
            loadPhoneBook()
            inputPhone.value = ""
            inputPerson.value = ""
        })
        .catch((error) => {
            console.log(error)
        })
    }
    async function deletePhones () {
        const id = this.id // const id = event.currentTarget.id
        // console.log(id); // 6d6bf526-f1fe-4b64-9544-c5b0d46964fc
        const httpHeaders = {method: 'delete'}
        fetch (`${BASE_URL}${id}`, httpHeaders)
        .then((res) => res.json())
        .then(loadPhoneBook)
        .catch((error) => console.log(error))
    }    
}

attachEvents();