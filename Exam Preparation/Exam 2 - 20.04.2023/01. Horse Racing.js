function solve(array) {

    let horsesArray = array[0].split('|')
    horsesArray = horsesArray.reverse()

    for (i = 1; i < array.length; i++) {
        let currentInfo = array[i].split(' ')

        if (currentInfo.includes('Retake')) {
            let firstHorse = currentInfo[1]
            let secondHorse = currentInfo[2]

            let firstIndex = horsesArray.indexOf(firstHorse)
            let secondIndex = horsesArray.indexOf(secondHorse)

            if (firstIndex > secondIndex) {
                horsesArray[firstIndex] = secondHorse
                horsesArray[secondIndex] = firstHorse
                console.log(`${firstHorse} retakes ${secondHorse}.`)
            }
        } else if (currentInfo.includes('Trouble')) {
            let horse = currentInfo[1]
            let horseIndex = horsesArray.indexOf(horse)

            if (horseIndex != horsesArray.length - 1) {
                let anotherHorse = horsesArray[horseIndex + 1]
                horsesArray[horseIndex] = anotherHorse
                horsesArray[horseIndex + 1] = horse

                console.log(`Trouble for ${horse} - drops one position.`)
            }
        } else if (currentInfo.includes('Rage')) {
            let horse = currentInfo[1]
            let horseIndex = horsesArray.indexOf(horse)

            if (horseIndex == 1) {
                let leaderHorse = horsesArray[0]
                horsesArray[0] = horse
                horsesArray[1] = leaderHorse
            } else if (horseIndex > 1) {
                let leaderHorseIndex = horseIndex - 2
                horsesArray.splice(horseIndex, 1)
                horsesArray.splice(leaderHorseIndex, 0, horse)
            }

            console.log(`${horse} rages 2 positions ahead.`)

        } else if (currentInfo.includes('Miracle')) {
            let lastHorse = horsesArray.pop()
            horsesArray.unshift(lastHorse)
            console.log(`What a miracle - ${lastHorse} becomes first.`)

        } else if (currentInfo.includes('Finish')) {
            let winner = horsesArray[0]
            horsesArray.reverse()
            console.log(horsesArray.join('->'))
            console.log(`The winner is: ${winner}`)
            break;
        }
    }

}
// Inputs:

// solve(['Bella|Alexia|Sugar',
//     'Retake Alexia Sugar',
//     'Rage Bella',
//     'Trouble Bella',
//     'Finish'])

// solve(['Onyx|Domino|Sugar|Fiona',
// 'Trouble Onyx',
// 'Retake Onyx Sugar',
// 'Rage Domino',
// 'Miracle',
// 'Finish'])

// solve(['Fancy|Lilly',
//     'Retake Lilly Fancy',
//     'Trouble Lilly',
//     'Trouble Lilly',
//     'Finish',
//     'Rage Lilly'])

