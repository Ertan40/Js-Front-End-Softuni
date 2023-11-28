function loadRepos() {
	const username = document.getElementById("username").value
	const reposList = document.getElementById("repos")

	reposList.innerHTML = ""

    fetch(`https://api.github.com/users/${username}/repos`)
	  .then((response) => {
		if (!response.ok) {
			throw new error("Not Found") 
		} else {
			return response.json()
		}
	  }).then((data) => {
          data.forEach(repo => {
			const listItem = document.createElement("li")
			const link = document.createElement("a")
			link.href = repo.html_url
			link.textContent = repo.full_name
			listItem.appendChild(link)
			reposList.appendChild(listItem)
		  });
	  })
	  .catch(error => {
		// Append an error message to the list
		const errorItem = document.createElement('li');
		errorItem.textContent = `Error: ${error.message}`;
		reposList.appendChild(errorItem);
	});
}



