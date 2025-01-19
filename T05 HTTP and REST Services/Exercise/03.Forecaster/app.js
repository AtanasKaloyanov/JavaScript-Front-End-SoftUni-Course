function attachEvents() {
    let input = document.getElementById('location');
    let button = document.getElementById('submit');
    button.addEventListener('click', weatherReport);

    let container = document.getElementById('forecast');
    container.style.display = 'block';
    let currentContainer = document.getElementById('current');
    let upcomingContainer = document.getElementById('upcoming');

    function weatherReport() {
        removeOldForecasts(currentContainer);
        removeOldForecasts(upcomingContainer);

        let locatonId = input.value;
        const LOCATIONS_URL = 'http://localhost:3030/jsonstore/forecaster/locations';

        fetch(LOCATIONS_URL)
            .then((urls) => urls.json())
            .then((urls) => {
                let searchedLocation = Array.from(urls)
                    .find((element) => element.name === locatonId);
                let code = searchedLocation.code;

                const TODAY_FORECASTS = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

                fetch(TODAY_FORECASTS)
                    .then((response) => response.json())
                    .then(showTodayForecast());

                const UPCOMING_FORECASTS = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

                fetch(UPCOMING_FORECASTS)
                    .then((response) => response.json())
                    .then(showUpcomingForecast());

                function showUpcomingForecast() {
                    return (upcomingForecast) => {
                        let forecasts = upcomingForecast.forecast;
                        let div = document.createElement('div');
                        for (let i = 0; i < forecasts.length; i++) {
                            let currentDayForecast = forecasts[i];
                            let condition = currentDayForecast.condition;
                            let low = currentDayForecast.low;
                            let high = currentDayForecast.high;

                            div.className = 'forecast-info';
                            let span1 = document.createElement('span');
                            span1.className = 'upcoming';
                            let span11 = document.createElement('span');
                            span11.className = 'symbol';
                            span11.innerHTML = getWeatherSign(condition);
                            let span12 = document.createElement('span');
                            span12.className = 'forecast-data';
                            span12.innerHTML = `${low}&#176;/${high}&#176;`;
                            let span13 = document.createElement('span');
                            span13.className = 'forecast-data';
                            span13.innerHTML = condition;

                            span1.appendChild(span11);
                            span1.appendChild(span12);
                            span1.appendChild(span13);
                            div.appendChild(span1);
                        }

                        upcomingContainer.appendChild(div);
                    };
                }

                function showTodayForecast() {
                    return (todayForecast) => {
                        let name = todayForecast.name;
                        let forecast = todayForecast.forecast;
                        let condition = forecast.condition;
                        let condtionSign = getWeatherSign(condition);
                        let low = forecast.low;
                        let high = forecast.high;
                        let div = document.createElement('div');
                        div.className = 'forecasts';

                        let span1 = document.createElement('span');
                        span1.className = 'condition symbol';
                        span1.innerHTML = condtionSign;
                        let span2 = document.createElement('span');
                        span2.className = 'condition';
                        let span21 = document.createElement('span');
                        span21.className = 'forecast-data';
                        span21.textContent = name;
                        let span22 = document.createElement('span');
                        span22.className = 'forecast-data';
                        span22.innerHTML = `${low}&#176;/${high}&#176;`;
                        let span23 = document.createElement('span');
                        span23.className = 'forecast-data';
                        span23.textContent = condition;

                        div.append(span1);
                        span2.appendChild(span21);
                        span2.appendChild(span22);
                        span2.appendChild(span23);
                        div.appendChild(span2);
                        currentContainer.appendChild(div);
                    };
                }

                function getWeatherSign(weather) {
                    let conditionSign = '';
                    switch (weather) {
                        case 'Sunny':
                            conditionSign = '&#x2600;';
                            break;
                        case 'Partly sunny':
                            conditionSign = '&#x26C5;';
                            break;
                        case 'Overcast':
                            conditionSign = '&#x2601;';
                            break;
                        case 'Rain':
                            conditionSign = '&#x2614;';
                            break;
                    }
                    return conditionSign;
                }

            });

        function removeOldForecasts(conatiner) {
            let children = conatiner.children;
            if (children.length == 2) {
                container.removeChild(children[1]);
            }
        }
    }

}

attachEvents();

/*

  <div class = 'current'> 
     <div class = 'forecasts'>
       <span class = 'condition'>  
          <span class = 'forecast-data'> 
          <span class = 'forecast-data'>
          <span class = 'forecast-data'>

          <div class = 'forecast-info'>
                          <span class = 'upcoming'>
                             <span class = 'symbol'>
                             <span class = 'forecast-data'>
                             <span class = 'forecast-data' 
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
