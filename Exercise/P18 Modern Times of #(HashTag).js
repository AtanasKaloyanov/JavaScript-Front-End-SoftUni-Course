function hashTagSearcher(input) {
    let array = input.split(' ');
    let regex = /^[#]+[a-zA-Z]+$/g;

    array.forEach((currentElement) => {
        
        if (currentElement.startsWith('#') && currentElement.match(regex)) {
            let currentWord = currentElement.substring(1, currentElement.lengt)

            console.log(currentWord);
        }
    })
    
}



