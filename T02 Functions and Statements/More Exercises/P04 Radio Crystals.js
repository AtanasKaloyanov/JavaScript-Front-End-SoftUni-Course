function crystalProcessing(crystals) {
    let desiredThickness = crystals[0]

    crystals.shift()

    crystals.forEach((currentCrystalThickness) => {
        let cutCounter = 0
        let lapCounter = 0
        let grindCounter = 0
        let etchCounter = 0

        // 1.  Starting processing of a new crystal
        console.log(`Processing chunk ${currentCrystalThickness} microns`)

        // 2. Cut operation
        while (currentCrystalThickness * 0.25 >= desiredThickness) {
            currentCrystalThickness *= 0.25
            cutCounter++
        }

        if (cutCounter > 0) {
            console.log(`Cut x${cutCounter}`)

            currentCrystalThickness = transportingAndWashing(currentCrystalThickness)
        }

        if (desiredThicknessCheck(currentCrystalThickness, desiredThickness)) {
            return
        }

        // 3. Lap operation
        while (currentCrystalThickness * 0.80 >= desiredThickness) {
            currentCrystalThickness *= 0.80
            lapCounter++
        }

        if (lapCounter > 0) {
            console.log(`Lap x${lapCounter}`)
            currentCrystalThickness = transportingAndWashing(currentCrystalThickness)
        }

        if (desiredThicknessCheck(currentCrystalThickness, desiredThickness)) {
            return
        }

        // 4. Grind operation
        while (currentCrystalThickness - 20 >= desiredThickness) {
            currentCrystalThickness -= 20
            grindCounter++
        }

        if (grindCounter > 0) {
            console.log(`Grind x${grindCounter}`)
            currentCrystalThickness = transportingAndWashing(currentCrystalThickness)
        }

        if (desiredThicknessCheck(currentCrystalThickness, desiredThickness)) {
            return
        }

        // 5. Etch operation
        while (currentCrystalThickness - 2 >= desiredThickness - 1) {
            currentCrystalThickness -= 2
            etchCounter++
        }

        if (etchCounter > 0) {
            console.log(`Etch x${etchCounter}`)
            currentCrystalThickness = transportingAndWashing(currentCrystalThickness)
        }

        // 6. X-ray operation
        if (currentCrystalThickness == desiredThickness - 1) {
            currentCrystalThickness += 1
            console.log('X-ray x1')
        }

        console.log(`Finished crystal ${currentCrystalThickness} microns`)
    })

    function transportingAndWashing(currentCrystalThickness) {
        console.log('Transporting and washing')

        return Math.floor(currentCrystalThickness)
    }

    function desiredThicknessCheck(currentCrystalThickness, desiredThickness) {
        if (currentCrystalThickness == desiredThickness) {
            console.log(`Finished crystal ${currentCrystalThickness} microns`)
            return true
        }
    }
}

// Cut -> the thickness of the crystal = 0.25 * the former thickness
// Lap -> the thickness of the crystal = 0.80 * the former thickness
// Grind -> the thickness of the crystal = the former thickness - 20
// Etch -> the thickness of the crystal = the former thickness - 2
// X-ray -> the thickness of the crystal = the former thickness + 1 (This can be used only ones)
// Transporting and washing -> removes any unperfections smaller than 1 micron (round down the number)


