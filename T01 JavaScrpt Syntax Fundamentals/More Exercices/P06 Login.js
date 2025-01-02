function login(array) {
    let account = array[0];
    let password = '';

    for (i = account.length - 1; i >= 0; i--) {
        password += account.charAt(i);
    }

    for (let i = 1; i < array.length; i++) {
        let currentWord = array[i];

        if (currentWord === password) {
            console.log(`User ${account} logged in.`);
            return;
        }

        if ((currentWord !== password) && (i != array.length - 1)) {
            console.log('Incorrect password. Try again.');
        }
    }

    console.log(`User ${account} blocked!`)
}

/*
login(['Acer','login','go','let me in','recA']);
console.log();
login(['momo','omom']);
console.log();
login(['sunny','rainy','cloudy','sunny','not sunny']);
*/