function solve() {
    let info = document.getElementsByClassName('info')[0];
    let departButton = document.getElementById('depart');
    let arriveButton = document.getElementById('arrive');
    
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let stopId = 'depot';
    let name = null;

    function depart() {
        fetch(`${BASE_URL}${stopId}`)
            .then((busStop) => busStop.json())
            .then((busStop) => {
                name = busStop.name;
                info.textContent = `Next stop ${name}`;
                stopId = busStop.next;
            });

        departButton.disabled = true;
        arriveButton.disabled = false;
    }

    async function arrive() {
        info.textContent = `Arriving at ${name}`;
        departButton.disabled = false;
        arriveButton.disabled = true;
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();

/*

<body>
    <div id="schedule">
        <div id="info">
            <span class="info">Not Connected</span>
        </div>
        <div id="controls">
            <input id="depart" value="Depart" type="button" onclick="result.depart()">
            <input id="arrive" value="Arrive" type="button" onclick="result.arrive()" disabled="true">
        </div>
    </div>
    <script src="./app.js"></script>
</body>

*/