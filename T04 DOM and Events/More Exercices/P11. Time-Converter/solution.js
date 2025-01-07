function attachEventsListeners() {
    // 1. Getting the input's values and the button elements:
    // 1.1. Input's values:
    let main = document.getElementsByTagName('main')[0];

    let children = main.children;
    let daysInput = children[1].children[1];
    let hoursInput = children[2].children[1];
    let minutesInput = children[3].children[1];
    let secondsInput = children[4].children[1];
    
    /*
        console.log(daysInput);
        console.log(hoursInput);
        console.log(minutesInput);
        console.log(secondsInput);
    */

    // 1.2. Buttons:
    let daysButton = children[1].children[2];
    let hoursButton = children[2].children[2];
    let minutesButton = children[3].children[2];
    let secondsButton = children[4].children[2];

    /*
    console.log(daysButton);
    console.log(hoursButton);
    console.log(minutesButton);
    console.log(secondsButton);
    */

    // 2. Adding events:
    daysButton.addEventListener('click', daysConverter);
    function daysConverter() {
        converting();
    }

    hoursButton.addEventListener('click', hoursConverter);
    function hoursConverter() {
        converting();
    }

    minutesButton.addEventListener('click', minutesConverter);
    function minutesConverter() {
       converting();
    }

    secondsButton.addEventListener('click', secondsConverter);
    function secondsConverter() {
        converting();
    }

    function converting() {
        if (daysInput.value != '') {
            let days = parseFloat(daysInput.value);
            hoursInput.value = (days * 24).toFixed(2);
            minutesInput.value = (days * 1440).toFixed(2); 
            secondsInput.value = (days * 86400).toFixed(2);
        } else if (hoursInput.value != '') {
            let hours = parseFloat(hoursInput.value);
            daysInput.value = (hours / 24).toFixed(2);
            minutesInput.value = (hours * 60).toFixed(2);
            secondsInput.value = (hours * 3600).toFixed(2);
        } else if (minutesInput.value != '') {
            let minutes = parseFloat(minutesInput.value);
            daysInput.value = (minutes / 1440).toFixed(2); 
            hoursInput.value = (minutes / 60).toFixed(2);
            secondsInput.value = (minutes * 60).toFixed(2);
        } else if (secondsInput.value != '') {
            let seconds = parseFloat(secondsInput.value);
            daysInput.value = (seconds / 86400).toFixed(2); 
            hoursInput.value = (seconds / 3600).toFixed(2); 
            minutesInput.value = (seconds / 60).toFixed(2);
        }
    }
}

/*     

<body onload="attachEventsListeners()">
    <main>
        <h1>Time Converter</h1>
        <div>
            <label for="days">Days: </label>
            <input type="text" id="days">
            <input id="daysBtn" type="button" value="Convert">
        </div>
        <div>
            <label for="hours">Hours: </label>
            <input type="text" id="hours">
            <input id="hoursBtn" type="button" value="Convert">
        </div>
        <div>
            <label for="minutes">Minutes: </label>
            <input type="text" id="minutes">
            <input id="minutesBtn" type="button" value="Convert">
        </div>
        <div>
            <label for="seconds">Seconds: </label>
            <input type="text" id="seconds">
            <input id="secondsBtn" type="button" value="Convert">
        </div>
    </main>
</body>

*/