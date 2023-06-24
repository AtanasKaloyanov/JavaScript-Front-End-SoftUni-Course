function vacationCost(peopleNumber, groupType, dayType) {
    let price = 0;
    let peopleWhoPay = 0;

    switch (groupType) {
        case 'Students': {
            switch (dayType) {
                case 'Friday': {
                    price = 8.45;
                } break;

                case 'Saturday': {
                    price = 9.80;
                } break;

                case 'Sunday': {
                    price = 10.46;
                } break;
            }

            if (peopleNumber >= 30) {
                price = 0.85 * price;
            }

            peopleWhoPay = peopleNumber;
        } break;

        case 'Business': {
            switch (dayType) {
                case 'Friday': {
                    price = 10.90;
                } break;

                case 'Saturday': {
                    price = 15.60;
                } break;

                case 'Sunday': {
                    price = 16;
                } break;
            }

            if (peopleNumber >= 100) {
                peopleWhoPay = peopleNumber - 10;
            } else {
                peopleWhoPay = peopleNumber;
            }
        } break;

        case 'Regular': {
            switch (dayType) {
                case 'Friday': {
                    price = 15;
                } break;

                case 'Saturday': {
                    price = 20;
                } break;

                case 'Sunday': {
                    price = 22.50;
                } break;
            }

            if (peopleNumber >= 10 && peopleNumber <= 20) {
                price = 0.95 * price
            }

            peopleWhoPay = peopleNumber;
        } break;
    }

    let totalPrice = peopleWhoPay * price;
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

