function solve(array) {
    let n = Number.parseInt(array[0])

    let astrounauts = []

    for (i = 1; i <= n; i++) {
        let info = array[i].split(' ')

        let newAstr = {}

        let name = info[0]
        let oxygen = Number.parseInt(info[1])
        let energy = Number.parseInt(info[2])

        newAstr.name = name
        newAstr.oxygen = oxygen
        newAstr.energy = energy

        astrounauts.push(newAstr)
    }

    for (j = n + 1; j < array.length; j++) {
        let newInfo = array[j].split(' - ')
        if (newInfo.includes('Explore')) {
            let name = newInfo[1]
            let energyNeeded = Number.parseInt(newInfo[2])

            let currentAstr = astrounauts.find((element) => {
                return element.name == name
            })



            if (currentAstr.energy >= energyNeeded) {
                currentAstr.energy -= energyNeeded
                console.log(`${name} has successfully explored a new area and now has ${currentAstr.energy} energy!`)
            } else {
                console.log(`${name} does not have enough energy to explore!`)
            }

        } else if (newInfo.includes('Refuel')) {
            let name = newInfo[1]
            let newEnergy = Number.parseInt(newInfo[2])

            let currentAstr = astrounauts.find((element) => {
                return element.name == name
            })

            let needenEne = 0

            if ( newEnergy > 200 - currentAstr.energy) {
                  needenEne = 200 - currentAstr.energy
                  currentAstr.energy = 200
            } else {
                 needenEne = newEnergy
                 currentAstr.energy += newEnergy
            }
            

            console.log(`${name} refueled their energy by ${needenEne}!`)

        } else if (newInfo.includes('Breathe')) {
            let name = newInfo[1]
            let newOxygen = Number.parseInt(newInfo[2])

            let currentAstr = astrounauts.find((element) => {
                return element.name == name
            })

            let needenOxy = 0

            if (newOxygen > 100 - currentAstr.oxygen) {
                  needenOxy = 100 - currentAstr.oxygen
                  currentAstr.oxygen = 100
            } else {
                 needenOxy = newOxygen
                 currentAstr.oxygen += newOxygen
            }

            console.log(`${name} took a breath and recovered ${needenOxy} oxygen!`)


        } else if (newInfo.includes('End')) {
            break
        }
    }

    astrounauts.forEach((element) => {
        console.log(`Astronaut: ${element.name}, Oxygen: ${element.oxygen}, Energy: ${element.energy}`)
    })

}

// solve(['3',
//     'John 50 120',
//     'Kate 80 180',
//     'Rob 70 150',
//     'Explore - John - 50',
//     'Refuel - Kate - 30',
//     'Breathe - Rob - 20',
//     'End']
// )

// solve(
//     [    '4',
//     'Alice 60 100',
//     'Bob 40 80',
//     'Charlie 70 150',
//     'Dave 80 180',
//     'Explore - Bob - 60',
//     'Refuel - Alice - 30',
//     'Breathe - Charlie - 50',
//     'Refuel - Dave - 40',
//     'Explore - Bob - 40',
//     'Breathe - Charlie - 30',
//     'Explore - Alice - 40',
//     'End']
// )
