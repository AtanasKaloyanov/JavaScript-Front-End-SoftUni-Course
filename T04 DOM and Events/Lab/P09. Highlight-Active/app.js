function focused() {
    let mainDiv = document.getElementsByTagName("div")[0];

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("focus", focus);
    });

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("blur", focusLost);
    });


    function focus(e) {
        let parent = e.target.parentNode;
        parent.classList.add("focused");
    }


    function focusLost(e) {
        let parent = e.target.parentNode;
        parent.classList.remove("focused");
    }

}

/*

<body onload="focused()">
    <div>
        <div>
            <h1>Section 1</h1>
            <input type="text" />
        </div>
        <div>
            <h1>Section 2</h1>
            <input type="text" />
        </div>
        <div>
            <h1>Section 3</h1>
            <input type="text" />
        </div>
        <div>
            <h1>Section 4</h1>
            <input type="text" />
        </div>
    </div>
    <script src="./app.js"></script>

    */
