function crystalProcessing(crystals) {
    let desiredThickness = crystals[0]

    crystals.shift()

    crystals.forEach( (currentCrystalThickness) => {
        let cutCounter = 0
        let lapCounter = 0
        let grindCounter = 0
        let etchCounter = 0

        console.log(`Processing chunk ${currentCrystalThickness} microns`)

        // 1. cut
        currentCrystalThickness = cut(currentCrystalThickness, cutCounter, desiredThickness)

        if (desireThicknessAchieved(currentCrystalThickness, desiredThickness)){
            currentCrystalThickness = transportingAndWashing(currentCrystalThickness)

            finalPrinting(currentCrystalThickness)
            return
        } 

        currentCrystalThickness = transportingAndWashing(currentCrystalThickness);

        // 2. lap 
        currentCrystalThickness = lap(currentCrystalThickness, lapCounter, desiredThickness)

        if (desireThicknessAchieved(currentCrystalThickness, desiredThickness)){
            currentCrystalThickness = transportingAndWashing(currentCrystalThickness)

            finalPrinting(currentCrystalThickness)
            return
        } 

        currentCrystalThickness = transportingAndWashing(currentCrystalThickness)

        // 3. grind
        currentCrystalThickness = grind(currentCrystalThickness, grindCounter, desiredThickness)

        if (desireThicknessAchieved(currentCrystalThickness, desiredThickness)){
            currentCrystalThickness = transportingAndWashing(currentCrystalThickness)

            finalPrinting(currentCrystalThickness)
            return
        } 

        currentCrystalThickness = transportingAndWashing(currentCrystalThickness);

        // 4. etch 
        currentCrystalThickness = etch(currentCrystalThickness, etchCounter, desiredThickness)

        if (desireThicknessAchieved(currentCrystalThickness, desiredThickness)){
            currentCrystalThickness = transportingAndWashing(currentCrystalThickness)

            finalPrinting(currentCrystalThickness)
            return
        } 

        currentCrystalThickness = transportingAndWashing(currentCrystalThickness)

        // 5. x-Ray
        currentCrystalThickness = xRay(currentCrystalThickness)
        finalPrinting(currentCrystalThickness)
    })

    function cut(thickness, counter, desiredThickness) {
        if (thickness * 0.25 < desiredThickness) {
            console.log(`Cut x${counter}`)
            return thickness
        }

        thickness = 0.25 * thickness
        counter++
    
        return cut(thickness, counter, desiredThickness)
    }
    
    function lap(thickness, counter, desiredThickness) {
        if (thickness * 0.80 < desiredThickness) {
            console.log(`Lap x${counter}`)
            return thickness
        }

        thickness = 0.80 * thickness
        counter++
    
        return lap(thickness, counter, desiredThickness)
    }
    
    function grind(thickness, counter, desiredThickness) {
        if (thickness - 20 < desiredThickness) {
            console.log(`Grind x${counter}`)
            return thickness
        }

        thickness = thickness - 20
        counter++
    
        return grind(thickness, counter, desiredThickness)
    }
                                                                           
    function etch(thickness, counter, desiredThickness) {    
        if (thickness - 2 < desiredThickness - 1) {
            console.log(`Etch x${counter}`)
            
            return thickness
        }

        thickness = thickness - 2
        counter++
    
        return etch(thickness, counter, desiredThickness)
    }
    
    function xRay(thickness) {
        console.log('X-ray x1')
        return  thickness + 1
    }
    
    function transportingAndWashing(thickness) {
        console.log('Transporting and washing')
        return thickness = Math.floor(thickness)
    }
    
    function desireThicknessAchieved(thickness, desiredThickness) {
        return thickness == desiredThickness
    }
      
    function finalPrinting(thickness) {
        console.log(`Finished crystal ${thickness} microns`)
    }
}

// Cut -> the thickness of the crystal = 0.25 * the former thickness
// Lap -> the thickness of the crystal = 0.80 * the former thickness
// Grind -> the thickness of the crystal = the former thickness - 20
// Etch -> the thickness of the crystal = the former thickness - 2
// X-ray -> the thickness of the crystal = the former thickness + 1 (This can be used only ones)
// Transporting and washing -> removes any unperfections smaller than 1 micron (round down the number)


