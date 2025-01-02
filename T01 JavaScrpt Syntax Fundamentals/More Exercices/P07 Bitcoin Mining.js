function solve(array) {
    const gramPrice = 67.51;
    const bitcoinPrice = 11949.16;
    let totalSum = 0.0;
    let days = 0;
    let firstBitcoinDay = 0;
    let haveBitcoin = false;
    let bitcoins = 0;

    for (i = 0; i < array.length; i++) {
        days++;
        let currentGrams = array[i];

        if (days % 3 == 0) {
            currentGrams *= 0.7;
        }

        let currentSum = currentGrams * gramPrice;
        totalSum += currentSum;

        while (totalSum >= bitcoinPrice) {
            if (!haveBitcoin) {
                firstBitcoinDay = days;
                haveBitcoin = true;
            }

            totalSum -= bitcoinPrice;
            bitcoins++;
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (haveBitcoin) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }
    console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
}

/*
solve([100, 200, 300]);
console.log();
solve([50, 100]);
console.log();
solve([3124.15, 504.212, 2511.124])
*/