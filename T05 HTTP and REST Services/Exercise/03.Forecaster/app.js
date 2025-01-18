function attachEvents() {
    // 1. Adding the button an event:
    let input = document.getElementById('location');
    let button = document.getElementById('submit');
    button.addEventListener('click', weatherReport);

    let container = document.getElementById('forecast');
    
    function weatherReport() {
        let locatonId = input.value;
        const LOCATIONS_URL = 'http://localhost:3030/jsonstore/forecaster/locations';

        fetch(LOCATIONS_URL)
            .then( (urls) => urls.json())
            .then( (urls) => {
                let searchedLocation = Array.from(urls)
                    .find((element) => element.name === locatonId);
                let code = searchedLocation.code;
              
                container.style.display = 'block';

                const TODAY_FORECASTS = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
            
                fetch(TODAY_FORECASTS)
                    .then( (response) => response.json())
                    .then( (todayForecast) => {
                        let span1 = document.createElement('span');
                        span1.className = 'condition';
                        let span11 = document.createElement('span');
                        span11.className = 'forecast-data';
                        let span12 = document.createElement('span');
                        span12.className = 'forecast-data';
                        let span13 = document.createElement('span');
                        span13.className = 'forecast-data';
                    });

                const UPCOMING_FORECASTS = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

                fetch(UPCOMING_FORECASTS)
                    .then( (response) => response.json())
                    .then( (upcomingForecast) => console.log(upcomingForecast));
            });

    }

    // 2. Getting the today and the upcoming forecasts using the code:
}

attachEvents();


/*

  <div class = 'current'> 
     <div class = 'forecasts'>
       <span class = 'condition'>  
          <span class = 'forecast-data'> 
          <span class = 'forecast-data'>
          <span class = 'forecast-data'>
*/


/*

<body>
    <div id="content">
        <div id="request">
            <input id="location" class='bl' type="text">
            <input id="submit" class="bl" type="button" value="Get Weather">
        </div>
        <div id="forecast" style="display:none">
            <div id="current">
                <div class="label">Current conditions</div>
            </div>
            <div id="upcoming">
                <div class="label">Three-day forecast</div>
            </div>
        </div>
    </div>
    <script src="./app.js"></script>
</body>

*/