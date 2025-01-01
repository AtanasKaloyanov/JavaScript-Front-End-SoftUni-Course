function solve(text) {
    let words = text.match(/\b[a-zA-Z0-9]+\b/g);
    let result = words
        .map(word => word.toUpperCase())
        .join(", ");

    console.log(result);
}

// solve('Hi, how are you?');
// solve('hello')