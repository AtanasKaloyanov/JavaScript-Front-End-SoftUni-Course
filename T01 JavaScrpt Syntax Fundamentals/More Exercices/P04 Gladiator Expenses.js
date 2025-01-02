function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let brokenHelmets = Math.floor(lostFights / 2);
    let brokenSwords = Math.floor(lostFights / 3);
    let brokenShields = Math.floor(lostFights / 6);
    let brokenArmors = Math.floor(lostFights / 12);

    let helmetExpenses = brokenHelmets * helmetPrice;
    let swordExpenses = brokenSwords * swordPrice;
    let shieldExpenses = brokenShields * shieldPrice;
    let armorExpenses = brokenArmors * armorPrice;

    let expenses = (helmetExpenses + swordExpenses + shieldExpenses + armorExpenses).toFixed(2);
    
    return `Gladiator expenses: ${expenses} aureus`;
}

/*
Output 1:
   lostFights = 7 
   helmetPrice = 2, helmetCosts = 3 * 2 = 6 
   swordPrice = 3,  swordCosts = 2 * 3 = 6
   shieldPrice = 4, shieldCosts = 1 * 4 = 4
   armorPrice = 5,  armorCosts = 0 * 5 = 0;

                    total      =         16;

 Output 2:
   lostFights = 23 
   helmetPrice = 12.50, helmetCosts = 11 * 12.50 = 137.50 
   swordPrice = 21.50,  swordCosts = 7 * 21.50 = 150.50
   shieldPrice = 40.00, shieldCosts = 3 * 40.00 = 120.00
   armorPrice = 200.00,  armorCosts = 1 * 200.00 = 200.00

                    total           =               608.00;               
*/


// console.log(gladiatorExpenses(7, 2, 3, 4, 5));
// console.log(gladiatorExpenses(23, 12.50, 21.50, 40, 200));
