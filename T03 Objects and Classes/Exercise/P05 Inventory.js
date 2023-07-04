function heroRegister(array) {
    let heroes = []

    for (let index in array) {
        let hero = {}

        let currentHeroInformation = array[index].split(' / ')
        let name = currentHeroInformation[0]
        let level = Number.parseInt(currentHeroInformation[1])

        hero['Hero'] = name
        hero['level'] = level
        
        let items = ''
        if (currentHeroInformation.length == 3) {
            items = currentHeroInformation[2]
            hero['items'] = items
        }

        heroes.push(hero)
    }

     heroes.sort( (firstHero, secondHero) => {
         let firstHeroLevel = firstHero.level
         let secondHeroLevel = secondHero.level

         return firstHeroLevel - secondHeroLevel
     })

     heroes.forEach( (currentHero) => {
        console.log('Hero: ' + currentHero.Hero)
        console.log('level => ' + currentHero.level)
        console.log('items => ' + currentHero.items)
     } )
}

// heroRegister([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]
// )

// heroRegister([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ]
//     )


// the input is an array of heroes
// every hero has a name, level and and (maybe) an array of items splitted by ' / '
// the items are splitted by ', ' in the array
// the final step is printing of the heroes, sorted by their levels in ascending order  