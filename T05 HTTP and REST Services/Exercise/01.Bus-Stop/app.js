function getInfo() {
    let stopId = document.getElementById('stopId').value;
    const STOPS_URL = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    let buses = document.getElementById('buses');

    fetch(STOPS_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        })
        .then( (stop) => {
            let buses = stop.buses;
            let name = stop.name;
            
        })
        .catch( (error) => { });

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
}