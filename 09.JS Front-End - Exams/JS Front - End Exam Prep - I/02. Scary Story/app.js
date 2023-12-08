window.addEventListener("load", solve);

function solve() {
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const age = document.getElementById("age");
  const storyTitle = document.getElementById("story-title");
  const storyText = document.getElementById("story");
  const publishBtn = document.getElementById("form-btn");
  const genre = document.getElementById("genre");
  const previewList = document.getElementById("preview-list"); 
  const mainDiv = document.getElementById("main")
 
  publishBtn.addEventListener("click", publishInfo);

  let storyContent = {};
  let saveBtn, editBtn, deleteBtn; // Declare variables
  
  function publishInfo(e) {
    e.preventDefault();

    if (firstName.value && lastName.value && age.value && storyTitle.value && storyText.value) {
      storyContent = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value,
        storyTitle: storyTitle.value,
        storyText: storyText.value,
        genre: genre.value,
      };

      let newLi = document.createElement("li");
      newLi.className = "story-info";
      newLi.innerHTML = `
        <article>
          <h4>Name: ${firstName.value} ${lastName.value}</h4>
          <p>Age: ${age.value}</p>
          <p>Title: ${storyTitle.value}</p>
          <p>Genre: ${genre.value}</p> 
          <p>${storyText.value}</p>
        </article>
        <button class="save-btn">Save Story</button>
        <button class="edit-btn">Edit Story</button>
        <button class="delete-btn">Delete Story</button>
      `;

      previewList.appendChild(newLi);

      firstName.value = "";
      lastName.value = "";
      age.value = "";
      storyTitle.value = "";
      storyText.value = "";
      genre.value = "";
      publishBtn.disabled = true;

      // Assign values to the buttons
      saveBtn = newLi.querySelector(".save-btn");
      editBtn = newLi.querySelector(".edit-btn");
      deleteBtn = newLi.querySelector(".delete-btn");

      saveBtn.addEventListener("click", saveInfo);
      editBtn.addEventListener("click", editInfo);
      deleteBtn.addEventListener("click", deleteInfo);
    }
  }

  function editInfo() {
    firstName.value = storyContent.firstName;
    lastName.value = storyContent.lastName;
    age.value = storyContent.age;
    storyTitle.value = storyContent.storyTitle; 
    storyText.value = storyContent.storyText;
    genre.value = storyContent.genre;

    previewList.innerHTML = `<h3>Preview</h3>`
    publishBtn.disabled = false;
    saveBtn.disabled = true;
    editBtn.disabled = true;
    deleteBtn.disabled = true;
  }

  function saveInfo() {
    mainDiv.innerHTML = `<h1>Your scary story is saved!</h1>`
  }

  function deleteInfo() {
    previewList.innerHTML = `<h3>Preview</h3>`
    publishBtn.disabled = false
  }
}

// ----- tip -----
// previewList.addEventListener("click", (e) => {
//     if (e.target.className === "save-btn") {
//       saveInfo();
//     } else if (e.target.className === "edit-btn"){
//       editInfoy()
//     } else if (e.target.className === "delete-btn"){
//       deleteInfo()
//     };
//   })

