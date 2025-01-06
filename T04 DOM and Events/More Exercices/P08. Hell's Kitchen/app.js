function solve() {

    //1. Getting the text from the textArea
    let textArea = document.getElementsByTagName('textarea')[0];
    let lines = textArea.value.split('\n');
    let workersInfoByRestaurant = {};

    // 2. Adding the information to an associative array:
    for (let i = 0; i < lines.length; i++) {
        let text = lines[i];
        let infoArray = JSON.parse(text);

        for (let i = 0; i < infoArray.length; i++) {
            let restaurantWithWorkers = infoArray[i];
            let restaurantWithWorkersArray = restaurantWithWorkers.split(' - ');
            let restaurantName = restaurantWithWorkersArray[0];

            if (!workersInfoByRestaurant.hasOwnProperty(restaurantName)) {
                workersInfoByRestaurant
                [restaurantName] = [];
            }

            let workersInfo = restaurantWithWorkersArray[1];
            let workersInfoArray = workersInfo.split(', ');

            for (let i = 0; i < workersInfoArray.length; i++) {
                let tuple = workersInfoArray[i];
                let tupleArray = tuple.split(' ');
                let workerName = tupleArray[0];
                let workerSalary = Number(tupleArray[1]);
                let newWorker = {};
                newWorker.name = workerName;
                newWorker.salary = workerSalary;
                workersInfoByRestaurant[restaurantName].push(newWorker);
            }
        }
    }
    // 3. Finding the best restaurant by sorting them by average salary:
    let bestRestaurant = Object.entries(workersInfoByRestaurant)
        .sort(([key1, value1], [key2, value2]) => {
            let salaryAVG1 = avgSalary(value1);
            let salaryAVG2 = avgSalary(value2);
            return salaryAVG2 - salaryAVG1;
        })[0];

    // 4. Print variables preparing:
    let bestRestaurantName = bestRestaurant[0];
    let workers = bestRestaurant[1];
    let bestAvgSalary = avgSalary(workers);
    workers.sort((worker1, worker2) => worker2.salary - worker1.salary);
    let bestWorkerSalary = workers[0].salary;
    let workersFormatted = '';
    workers.forEach((worker) => workersFormatted += `Name: ${worker.name} With Salary: ${worker.salary} `);

    // 5. Getting the output elements:
    let bestRestaurantElement = document.querySelector('#outputs #bestRestaurant p');
    let bestWorkersElement = document.querySelector('#outputs #workers p')
    bestRestaurantElement.textContent = `Name: ${bestRestaurantName} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${bestWorkerSalary.toFixed(2)}`;
    bestWorkersElement.textContent = `${workersFormatted}`;

    // Calculating of the average salary:
    function avgSalary(workers) {
        let totalSum = workers.reduce((sum, person) => sum + person.salary, 0);
        let number = workers.length;
        return totalSum / number;
    }
}
//}

/*
<body onload="solve()">
    <section class="restaurant-race-class">
        <div id="inputs">
            <h2>Add workers</h2>
            <textarea></textarea>
            <br>
            <button type="submit" id="btnSend">Send</button>
        </div>
        <div id="outputs">
            <div id="bestRestaurant">
                <h2>Best Restaurant</h2>
                <span></span>
                <p></p>
            </div>
            <div id="workers">
                <h2>Best Restaurant's workers</h2>
                <span></span>
                <p></p>
            </div>
        </div>

    </section>
    <script src='app.js'></script>
</body>
*/