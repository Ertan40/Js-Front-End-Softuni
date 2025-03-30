function main(input) {
  let mysteriousSpell = input.shift();
  let output = mysteriousSpell; // Start with the original spell

  while (input.length > 0) {
    const command = input.shift().split("!");
    const action = command[0];

    if (action === "End") {
      console.log(`The concealed spell is: ${output}`);
      break;
    } else if (action === "RemoveEven") {
      let updated = "";
      for (let i = 0; i < output.length; i++) {
        if (i % 2 === 0) {
          updated += output[i];
        }
      }
      output = updated;
      console.log(output);
    } else if (action === "TakePart") {
      const fromIndex = parseInt(command[1]);
      const toIndex = parseInt(command[2]);
      output = output.slice(fromIndex, toIndex);
      console.log(output);
    } else if (action === "Reverse") {
      const subString = command[1];
      const index = output.indexOf(subString);

      if (index !== -1) {
        // Remove the first occurrence
        output =
          output.slice(0, index) + output.slice(index + subString.length);

        // Add reversed substring at the end
        const reversed = subString.split("").reverse().join("");
        output += reversed;
        console.log(output);
      } else {
        console.log("Error");
      }
    }
  }
}

main([
  "asAsl2adkda2mdaczsa",
  "RemoveEven",
  "TakePart!1!9",
  "Reverse!maz",
  "End",
]);

main([
  "hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
  "TakePart!31!42",
  "RemoveEven",
  "Reverse!anim",
  "Reverse!sad",
  "End",
]);

// Description:
// You find yourself in a dimly lit chamber filled with ancient tomes and mystical artifacts. The air crackles with arcane energy as you embark on a journey to decipher the secrets hidden within the pages of a spellbook. Each incantation holds the potential to unleash powerful magic or unveil hidden truths.
// Write a program that performs a series of commands in order to decode that information. First, you will receive a string representing a mysterious spell waiting to be unraveled, and afterwards, until the command "End" is given, you will be receiving strings with commands split by a exclamation mark. The commands will be the following:
//     • "RemoveEven"
//         ◦ The encoded spell is changed to consist only of its characters at even indices. Then, the updated spell is printed.

//     • "TakePart!{from index}!{to index}":
//         ◦ Selects a portion of the spell specified by two numbers, unveiling a segment of its hidden power and then prints the spell.

//     • "Reverse!{substring}":
//         ◦ If the spell contains the given substring, cut it out, reverse it and add it at the end of the spell. Then, print the updated spell.
//         ◦ Otherwise, print "Error".
//         ◦ This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
