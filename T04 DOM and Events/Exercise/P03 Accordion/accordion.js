function toggle() {
    const button = document.getElementsByClassName('button')[0]
    const loremContainer = document.getElementById('accordion').children[1]

    if (button.innerHTML = 'More') {
        button.innerHTML = 'Less'
        loremContainer.id = 'notExtra'
    } else if (button.innerHTML = 'Less') {
        button.innerHTML = 'More'
        loremContainer.id = 'extra'
    }
    
 }

// By clicking the button should change to LESS and the content should be revealing
// By second clicking the button should change to MORE and the content should be hidden


/* <body>
    <div id="accordion">
        <div class="head">DOM Manipulations Exercise
            <span class="button" onclick="toggle()">More</span>
        </div>
        <div id="extra">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div>
    <script src="accordion.js"></script>
</body> */

