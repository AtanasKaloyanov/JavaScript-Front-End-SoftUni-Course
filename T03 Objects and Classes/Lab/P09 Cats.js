function catsInformation(array) {
    class Cat {
        constructor(catName, catAge) {
            this.catName = catName
            this.catAge = catAge
        }
    
        meow() {
            console.log(`${this.catName}, age ${this.catAge} says Meow`)
        }
    }

    for (let index in array) {
        let currentPair = array[index].split(' ')

        let catName = currentPair[0]
        let catAge = currentPair[1]

      let cat = new Cat(catName, catAge)
      cat.meow()
    }
}



