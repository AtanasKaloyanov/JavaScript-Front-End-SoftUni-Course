function cityPrinting(city) {
    for (let currentProperty in city) {
         console.log(currentProperty + ' -> ' + city[currentProperty])
    }
}
