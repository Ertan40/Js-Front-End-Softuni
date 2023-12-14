window.addEventListener('load', solve);

function solve() {
    const model = document.getElementById("model")
    const year = document.getElementById("year")
    const description = document.getElementById("description")
    const price = document.getElementById("price")
    const tableInfo = document.getElementById("information")
    const addBtn = document.getElementById("add")
    const furnitureList = document.getElementById("furniture-list")
    const totalPrice = document.querySelector(".total-price")
    let moreBtn, buyBtn, rowInfo, rowHide
    addBtn.addEventListener("click", addInfo);
    let total = 0
    function addInfo (e) {
        e.preventDefault()
        if (model.value && description.value  && Number(year.value) > 0 && Number(price.value) > 0) {
            rowInfo = document.createElement("tr")
            rowInfo.className = "info"
            rowInfo.innerHTML = `
            <td>${model.value}</td>
            <td>${Number(price.value).toFixed(2)}</td>
            <td>
              <button class="moreBtn">More Info</button>
              <button class="buyBtn">Buy it</button>
            </td>
            `
            rowHide = document.createElement("tr")
            rowHide.className = "hide"
            rowHide.innerHTML = `
            <td>Year: ${year.value}</td>
            <td colspan="3">Description: ${description.value}</td>
            `
            furnitureList.appendChild(rowInfo)
            furnitureList.appendChild(rowHide)
            model.value = ""
            description.value = ""
            year.value = ""
            price.value = ""
            moreBtn = rowInfo.querySelector(".moreBtn")
            buyBtn = rowInfo.querySelector(".buyBtn")
            moreBtn.addEventListener("click", showMore)
            buyBtn.addEventListener("click", buyItem)
        }
    }
    function showMore () {

        if (moreBtn.textContent === "More Info") {
            moreBtn.textContent = "Less Info";
            rowHide.style.display = "contents"
        } else {
            moreBtn.textContent = "More Info";
            rowHide.style.display = "none"
        }
    }
    function buyItem () {
        const currentPrice = parseFloat(rowInfo.querySelector("td:nth-child(2)").textContent);
        // Remove the current furniture from the row in the table
        rowInfo.remove();
        rowHide.remove();
       // Update the total profit in the store
        total += currentPrice;
        totalPrice.textContent = total.toFixed(2);
    }
}
