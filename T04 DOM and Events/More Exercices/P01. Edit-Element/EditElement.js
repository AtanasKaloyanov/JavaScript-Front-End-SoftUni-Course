function editElement(element, regex, replacer) {
    let oldContent = element.textContent;
    let newContent = oldContent.replaceAll(regex, replacer);
    element.textContent = newContent;
}