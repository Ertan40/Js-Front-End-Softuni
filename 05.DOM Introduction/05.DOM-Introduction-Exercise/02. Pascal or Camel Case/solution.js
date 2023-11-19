function solve() {
  let input = document.getElementById('text').value; // this is an example
  let currentCase = document.getElementById('naming-convention').value; // Camel Case

  let inputLower = input.toLowerCase().split(' ');
  let result = '';

  if (currentCase === 'Camel Case') {
    result += inputLower[0];
    for (let i = 1; i < inputLower.length; i++) {
      const word = inputLower[i];
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      result += capitalizedWord;
    }
  } else if (currentCase === 'Pascal Case') {
    for (let i = 0; i < inputLower.length; i++) {
      const word = inputLower[i];
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      result += capitalizedWord;
    }
  } else {
    result += 'Error!'
  }
  document.getElementById('result').textContent += result
  // console.log(result);
}
