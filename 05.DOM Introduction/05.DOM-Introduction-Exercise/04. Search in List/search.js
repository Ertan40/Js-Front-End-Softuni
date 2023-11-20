function search() {
   let towns = Array.from(document.querySelectorAll("li"))
   // let towns = Array.from(document.querySelector("#towns").children)
   let searchText = document.querySelector("#searchText").value
   // let searchText = $('#searchText').val();
   let result = document.querySelector("#result")
   
   if (result.textContent) {
      result.textContent = ''
   }
   let matches = 0
   for (let town of towns) {
      town.style.textDecoration = ''
      town.style.fontWeight = ''
      if (town.textContent.includes(searchText)) {
         town.style.textDecoration = 'underline'
         town.style.fontWeight = 'bold'
         matches += 1
      }
   }
   result.textContent = `${matches} matches found`
}

// An HTML page holds a list of towns, a search box, and a [Search] button. 
// Implement the search function to bold and underline the items from the list 
// which include the text from the search box. Also, print the number of items 
// the current search matches in the format `${matches} matches found`.
// Note: It is necessary to clear the results of the previous search.

