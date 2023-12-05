function attachEvents() {
  const BASE_URL = "http://localhost:3030/jsonstore/collections/books/"
  const loadBtn = document.getElementById("loadBooks")
  const submitBtn = document.querySelector("#form button")
  const table = document.querySelector("table tbody")
  const inputTitle = document.querySelector("input[name=title]")
  const inputAuthor = document.querySelector("input[name=author]")
  const formText = document.querySelector("#form > h3")
  let editBookId = null;

  loadBtn.addEventListener("click", loadBooks)
  submitBtn.addEventListener("click", submitBooks)

  async function loadBooks () {
    table.innerHTML = ""
    const booksRes = await fetch(BASE_URL)
    const booksData = await booksRes.json()
    allBooks = booksData
    for (const bookId in booksData) {
      const { author, title } = booksData[bookId]
      const row = document.createElement("tr");
      row.id = bookId;
      row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </td>
    `
      const editBtn = row.querySelector(".edit");
      const deleteBtn = row.querySelector(".delete");

      editBtn.addEventListener("click", () => {
        formText.textContent = "Edit FORM";
        editBookId = bookId;
        submitBtn.textContent = "Save";
        inputTitle.value = title;
        inputAuthor.value = author;
    });
      deleteBtn.addEventListener("click", () => deleteBooks(bookId));
      table.appendChild(row);
    }  
  }
  async function deleteBooks (bookId) {
    const httpHeaders = { method: "delete" };
    await fetch(BASE_URL + bookId, httpHeaders);
    loadBooks();
  }
  function submitBooks () {
    const httpHeaders = {
      method: 'post',
      body: JSON.stringify ({"author": inputAuthor.value, "title": inputTitle.value}) 
    }
    let url = BASE_URL
    if (formText.textContent === "Edit FORM") {
      httpHeaders.method = 'put'
      url += editBookId
    }
    if (inputAuthor.value && inputTitle.value) {
       fetch(url, httpHeaders).then((res) => res.json()). then(() => {
        loadBooks()
        if (formText.textContent === "Edit FORM") {
          formText.textContent = "FORM"
          submitBtn.textContent = "Submit"
        }
        inputAuthor.value = ""
        inputTitle.value = ""
       }).catch((error) => console.log(error))
      }
  }
}

attachEvents();