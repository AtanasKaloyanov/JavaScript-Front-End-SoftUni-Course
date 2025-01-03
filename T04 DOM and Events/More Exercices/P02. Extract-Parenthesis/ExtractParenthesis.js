function extract(content) {
    let textElement = document.getElementById(content);
    let array = textElement.textContent.match(/\(([^)]+)\)/g);
    return array.join(';').replaceAll(/[\(\)]/g, '');
}