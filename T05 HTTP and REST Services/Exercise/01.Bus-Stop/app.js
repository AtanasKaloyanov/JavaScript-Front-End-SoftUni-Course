function getInfo() {
    let stopId = document.getElementById('stopId').value;
    const STOPS_URL = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    let stopNameContainer = document.getElementById('stopName');
    let busesContainer = document.getElementById('buses');
    stopNameContainer.textContent = '';
    busesContainer.textContent = '';

    fetch(STOPS_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        })
        .then((stop) => {
            // Bus {busId} arrives in {time} minutes
            let name = stop.name;
            let buses = stop.buses;
            stopNameContainer.textContent = name;
            console.log(buses);
            Object.entries(buses)
                .forEach( ([busN, time]) => {
                    let li = document.createElement('li');
                    li.textContent = `Bus ${busN} arrives in ${time} minutes`;
                    busesContainer.append(li);
                })

        })
        .catch( () => { 
            stopNameContainer.textContent = 'Error';
        });
}
/*

<body>
<div id="stopInfo" style="width:20em">
<div>
    <label for="stopId">Stop ID: </label>
    <input id="stopId" type="text">
    <input id="submit" type="button" value="Check" onclick="getInfo()"></div>
<div id="result">
    <div id="stopName"></div>
    <ul id="buses"></ul>
</div>
</div>
<script src="./app.js"></script>
</body>

*/
