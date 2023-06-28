function charactersInRange(firstChar, secondChar) {
    let firstCharCode = firstChar.charCodeAt(firstChar);
    let secondCharCode = secondChar.charCodeAt(secondChar);

    let indexes = [firstCharCode, secondCharCode];

    indexes.sort( (a, b) => { 
        return a - b 
    })

    let array = [];

    for (i = indexes[0] + 1; i < indexes[1]; i++) {
        array.push(String.fromCharCode(i));
    }

    console.log(array.join(' '));
}

// 100 / 100 solution
// function solve(...args) {
//     let result = [];

//     const start = args[0].charCodeAt(0);
//     const end = args[1].charCodeAt(0);

//     function display(start, end) {
//         for (let i = start + 1; i < end; i++) {
//             result.push(String.fromCharCode(i));
//         }
//     }

//     start < end ? display(start, end) : display(end, start);

//     console.log(result.join(' '))
// }

// solve('a', 'd');
// solve('#', ':');
// solve('C', '#');






