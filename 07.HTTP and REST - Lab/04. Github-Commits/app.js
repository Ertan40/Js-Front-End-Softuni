function loadCommits() {
    const username = document.getElementById("username").value
    const repo = document.getElementById("repo").value
    const list = document.getElementById("commits")
    
    list.innerHTML = ""

    fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
      .then((response) => {
		if (!response.ok) {
			throw new Error(`Error: ${response.status} (Not Found)`) 
		} 
		return response.json()
	  })
      .then((commits) => {
        commits.forEach(commit => {
            const item = document.createElement("li")
            item.textContent = `${commit.commit.author.name}: ${commit.commit.message}`
            list.appendChild(item)
        });
      })
      .catch(error => {
        const errorItem = document.createElement("li")
        errorItem.textContent = error.message
        list.appendChild(errorItem)
      })
}



