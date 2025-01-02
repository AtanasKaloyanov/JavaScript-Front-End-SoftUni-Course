function buildPyramid(baseWidth, increment) {
    stages = 1;
    stones = 0;
    marbles = 0;
    lapis = 0;
    gold = 0;

    while (baseWidth > 2) {
        area = baseWidth ** 2;
        currentStones = (baseWidth - 2) ** 2;
        stones += currentStones;
        currentJuwellery = area - currentStones;

        if (stages % 5 == 0) {  
            lapis += currentJuwellery;
        } else {
             marbles += currentJuwellery;
        }

        baseWidth -= 2;
        stages++;
    }

    gold += baseWidth;

    console.log(`Stone required: ${Math.ceil(stones * increment)}`);
    console.log(`Marble required: ${Math.ceil(marbles * increment)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis * increment)}`);
    console.log(`Gold required: ${Math.ceil(gold * gold * increment)}`);
    console.log(`Final pyramid height: ${Math.floor(stages * increment)}`);
}

/*
buildPyramid(11, 1);
console.log();
buildPyramid(11, 0.75);
console.log();
buildPyramid(12, 1);
console.log();
buildPyramid(23, 0.5);
*/
