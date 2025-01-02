function spiceAmountCalculate(amount) {
    days = 0;
    totalAmount = 0.0;

    while (amount >= 100) {
        days++;
        totalAmount += amount;
        amount -= 10;
        totalAmount = workersConsuming(totalAmount);
    }

    totalAmount = workersConsuming(totalAmount);
    console.log(days);
    console.log(totalAmount);
    return;

    function workersConsuming(totalAmount) {
        if (totalAmount < 26) {
            totalAmount = 0;
        } else {
            totalAmount -= 26;
        }
        return totalAmount;
    }
}


// spiceAmountCalculate(36);
// spiceAmountCalculate(450);