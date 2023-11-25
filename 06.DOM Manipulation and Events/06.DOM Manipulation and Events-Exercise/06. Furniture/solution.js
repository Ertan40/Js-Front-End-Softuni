function solve() {
  
  const exercise = document.querySelector("#exercise")
  const tbody = document.querySelector("tbody")
  const textArea = exercise.children[1]
  const generateBtn = exercise.children[2]
  const cartTextArea = exercise.children[4]
  const buyBtn = document.querySelector("#exercise button:nth-of-type(2)") // exercise.children[5]
  
  generateBtn.addEventListener ("click", generateItems)
  buyBtn.addEventListener ("click", buyItems)

  function generateItems () {
    data = JSON.parse(textArea.value)
    // console.log(data); // [{decfactor: 1.2, img:"", name: "Sofa", price: 150}]
    for (let element of data) {
      let tableRowEl = document.createElement("tr")

      let firstCellEl = document.createElement("td")
      let img = document.createElement("img")
      img.src = element.img
      firstCellEl.appendChild(img)
      tableRowEl.appendChild(firstCellEl)

      let secondCellEl = document.createElement("td")
      let secondCellParagraph = document.createElement("p")
      secondCellParagraph.textContent = element.name
      secondCellEl.appendChild(secondCellParagraph)
      tableRowEl.appendChild(secondCellEl)

      let priceCellEl = document.createElement("td")
      let priceCellParagraph = document.createElement("p")
      priceCellParagraph.textContent = Number(element.price)
      priceCellEl.appendChild(priceCellParagraph)
      tableRowEl.appendChild(priceCellEl)

      let DecFactorCellEl = document.createElement("td")
      let DecFactorCellParagraph = document.createElement("p")
      DecFactorCellParagraph.textContent = parseFloat(element.decFactor)
      DecFactorCellEl.appendChild(DecFactorCellParagraph)
      tableRowEl.appendChild(DecFactorCellEl)

      let checkBoxCellEl = document.createElement("td")
      let checkBoxCellInput = document.createElement("input")
      checkBoxCellInput.type = "checkbox"
      checkBoxCellEl.appendChild(checkBoxCellInput)
      tableRowEl.appendChild(checkBoxCellEl)
      
      tbody.appendChild(tableRowEl)
    }

  }
  function buyItems () {
    let dict = {
      "products": [],
      "prices": 0,
      "decFactor": 0
    }
    const rows = Array.from(document.querySelectorAll("tbody tr"))
    for (let row of rows) {
        const inputBox = row.querySelector("td>input")
        if (inputBox.checked) {
          dict["products"].push(row.children[1].children[0].textContent)
          dict["prices"] += Number(row.children[2].children[0].textContent)
          dict["decFactor"] += parseFloat(row.children[3].children[0].textContent)
        }
    }
    let output = []

    output.push(`Bought furniture: ${dict.products.join(", ")}`)
    output.push(`Total price: ${dict.prices.toFixed(2)}`)
    output.push(`Average decoration factor: ${(dict.decFactor / dict.products.length)}`)

    cartTextArea.value = output.join("\n")
  }
}