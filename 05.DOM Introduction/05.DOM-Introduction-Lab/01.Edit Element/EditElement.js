function editElement(reference, match, replacer) {
    let text = reference.textContent;
    
    while (text.includes(match)) {
        text = text.replace(match, replacer);
    }
    reference.textContent = text
}