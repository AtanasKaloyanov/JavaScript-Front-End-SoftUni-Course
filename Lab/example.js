let a = 22;
let adulthood;

switch (a) {
    case 14 :{
        adulthood = 'No!'
    }  break;

    case 18 : {
        adulthood = 'In America No!'
    } break;

    case 21 : {
        adulthood = 'Yes!'
    } break;

    default : {
        adulthood = 'There is not such number!'
    }
}

console.log(adulthood);
