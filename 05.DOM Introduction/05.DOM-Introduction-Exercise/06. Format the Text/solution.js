function solve() {
  const output = document.querySelector('#output');
  const getText = document.getElementById("input") 
  // const input = document.querySelector('#input').value;
  const sentences = getText.value.split(".")

  let everyThree = []
  for (let sentence of sentences) {
      if (sentence.length > 0) {
          everyThree.push(sentence)
      }
      if (everyThree.length === 3) {
          const paragraph = document.createElement("p")
          paragraph.textContent = everyThree.join(".").trim() + "."

          output.appendChild(paragraph)
          everyThree = []
      }
  }
  if (everyThree.length > 0) {
      const paragraph = document.createElement("p")
      paragraph.textContent = everyThree.join(".").trim() + "."
      output.appendChild(paragraph)
  }
}
// judge: --80-- second way
// function solve() {
//   const input = document.querySelector('#input').value;
//   const arraySentences = input.split('. ');
//   const output = document.querySelector('#output');

//   while (arraySentences.length) {
//     const p = document.createElement('p');
//     const currentSentences = arraySentences.splice(0, 3).join('.').trim();
//     p.textContent = arraySentences.length ? currentSentences + '.' : currentSentences;
//     output.appendChild(p);
    
//   }   
// }

