 function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   let textArea = document.getElementsByTagName('textarea')[0];
   function onClick () {
      //1. Parsing the input:
      let text = textArea.value;
      let infoArray = JSON.parse(text);
      
      // 2. Creating an asociative array and adding information:
      let restaurantBook = {};
      for (let i = 0; i < infoArray.length; i++) {
         let restaurantWithWorkers = infoArray[i];
         let restaurantWithWorkersArray = restaurantWithWorkers.split(' - ');
         let restaurantName = restaurantWithWorkersArray[0];

         // 2.1. 
         if (!restaurantBook.hasOwnProperty(restaurantName)) {
            restaurantBook[restaurantName] = [];
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
            restaurantBook[restaurantName].push(newWorker);
         }
      }
   
       
   }
 
}

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