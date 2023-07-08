function armies(array) {
    let army = {}

    array.forEach((currentString) => {
        if (currentString.includes('arrives')) {
            let array = currentString.split(' arrives')
            let leader = array[0]
            army[leader] = {}
        } else if (currentString.includes(':')) {
            let outerArray = currentString.split(': ')
            let leader = outerArray[0]

            if (army.hasOwnProperty(leader)) {
                let innerArray = outerArray[1].split(', ')
                let armyName = innerArray[0]
                let armyCount = Number.parseFloat(innerArray[1])
                army[leader][armyName] = armyCount
            }

        } else if (currentString.includes('+')) {
            let array = currentString.split(' + ')
            let armyName = array[0]
            let armyCount = Number.parseFloat(array[1])

            for (let leader in army) {
                if (army[leader].hasOwnProperty(armyName)) {
                    army[leader][armyName] += armyCount
                }
            }
        } else if (currentString.includes('defeated')) {
            let array = currentString.split(' defeated')
            let defeatedLeader = array[0]

            for (let currentLeader in army) {
                if (currentLeader == defeatedLeader) {
                    delete army[defeatedLeader]
                }
            }
        }
    })

    Object.entries(army).sort( (firstEntry, secondEntry) => {
        let firstLeaderArmySum = Object.values(firstEntry[1]).reduce((a, b) => a + b, 0)
        let secondLeaderArmySum = Object.values(secondEntry[1]).reduce((a, b) => a + b, 0)

        return secondLeaderArmySum - firstLeaderArmySum
    }).forEach( (currentEntry) => {
        let currentLeaderArmySum = Object.values(currentEntry[1]).reduce((a, b) => a + b, 0)
        console.log(currentEntry[0] + ': ' + currentLeaderArmySum)

        Object.entries(currentEntry[1])
            .sort( (a, b) => b[1] - a[1])
            .forEach( (entry) => {
              console.log(`>>> ${entry[0]} - ${entry[1]}`)
            })
    })
}

// Input:

// armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])

// armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])

// key  (String)           value
// leader     :     {armyName : armyCount
//                   armyName : armyCount
//                      ...       ...
//                                       }
//
// secondLeader   :   {armyName : armyCount}
//                     armyName : armyCount
//                      ...           ...
//                                       }

// the input is an array of strings. The string can be:

// 1. {leader} arrives - adding the leader without army. The leader is a key of an assotiative array
// 2. {leader}: {army name}, {army count}
// 3. {army name} + {army count}
// 4. {leader} defeated

// armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])

// armies(['Rick Burr arrives', 'Findlay arrives', 'Rick Burr: Juard, 1500', 'Wexamp arrives', 'Findlay: Wexamp, 34540', 'Wexamp + 340', 'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'])