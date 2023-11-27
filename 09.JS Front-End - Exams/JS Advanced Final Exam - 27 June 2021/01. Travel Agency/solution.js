window.addEventListener('load', solution);

function solution() {

  const submitBtn = document.getElementById("submitBTN");
  const editBtn = document.getElementById("editBTN");
  const continueBtn = document.getElementById("continueBTN");
  const fullName = document.getElementById("fname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const address = document.getElementById("address");
  const code = document.getElementById("code");
  const previewInfo = document.getElementById("infoPreview");
  const block = document.getElementById("block");
  
  submitBtn.addEventListener("click", submitData);

  function submitData (event) {
    event.preventDefault()
    if (fullName.value && email.value) {
      let fullNameEl = document.createElement("li")
      fullNameEl.textContent = `Full Name: ${fullName.value}`
      previewInfo.appendChild(fullNameEl)

      let emailEl = document.createElement("li")
      emailEl.textContent = `Email: ${email.value}`
      previewInfo.appendChild(emailEl)

      let phoneEl = document.createElement("li")
      phoneEl.textContent = `Phone Number: ${phone.value}`
      previewInfo.appendChild(phoneEl)

      let addressEl = document.createElement("li")
      addressEl.textContent = `Address: ${address.value}`
      previewInfo.appendChild(addressEl)

      let codeEl = document.createElement("li")
      codeEl.textContent = `Postal Code: ${code.value}`
      previewInfo.appendChild(codeEl)

      fullName.value = "";
      email.value = "";
      phone.value = "";
      address.value = ""; 
      code.value = "";

      submitBtn.disabled = true;
      editBtn.disabled = false;
      continueBtn.disabled = false;
    }
  }
  editBtn.addEventListener("click", editData);
  continueBtn.addEventListener("click", continueData);
  
  function editData(event) {

    fullName.value = previewInfo.querySelector("li:nth-child(1)").textContent.replace("Full Name: ", "");
    email.value = previewInfo.querySelector("li:nth-child(2)").textContent.replace("Email: ", "");
    phone.value = previewInfo.querySelector("li:nth-child(3)").textContent.replace("Phone Number: ", "");
    address.value = previewInfo.querySelector("li:nth-child(4)").textContent.replace("Address: ", "");
    code.value = previewInfo.querySelector("li:nth-child(5)").textContent.replace("Code: ", "");
      
    submitBtn.disabled = false;
    editBtn.disabled = true;
    continueBtn.disabled = true;

    previewInfo.innerHTML = "";
  }
  function continueData() {
    block.innerHTML = '<h3>Thank you for your reservation!</h3>';
  }
}
 

