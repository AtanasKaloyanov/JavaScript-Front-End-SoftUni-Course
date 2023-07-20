function lockedProfile() {
    // Step 1 -  every button should have an click event
    let buttons = document.getElementsByTagName('button')

    Array.from(buttons)
        .forEach( (currentButton) =>
            currentButton.addEventListener('click', onClick))

            // Step 2 - function onClick description
    function onClick(e) {
        const button = e.currentTarget   
        const parentDiv = button.parentElement
        
        const firstInput = parentDiv.children[2]
        

        if (firstInput.checked == false) {                 
            const searchedDiv = parentDiv.children[9]
            
            if (button.textContent == 'Show more') {
               button.textContent = 'Hide it'
               searchedDiv.style.display = 'block'
            } else if (button.textContent == 'Hide it') {
                button.textContent = 'Show more'
                searchedDiv.style.display = 'none'
            }
 
        }

    }
}


// When the button with text content "Show more" is clicked,
// 1. if the profile is not locked (input with value unlock == checked)

// 1. 1.  the hidden information should be shown ( hillden elements by id: #user1HiddenFields, #user2HiddenFields, #user3HiddenFields   .style.display = 'block')
// 1. 2.   button.textContent = 'Hide it'

// 2. if the hidden information is diplayed (#user1HiddenFields, #user2HiddenFields, #user3HiddenFields   .style.display = 'block') and the profile is not locked (input with value unlock = checked)

// 2.1 hillden elements by id: #user1HiddenFields, #user2HiddenFields, #user3HiddenFields   .style.display = 'none'
// 2.2. button.textContent = 'Show more'




/*
<body>
    <div id="container">
        <main id="main">

            <div class="profile">
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user1Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user1Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user1Username" value="User 1 Userov" disabled readonly />
                <div id="user1HiddenFields">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user1Email" value="user1-userov@users.bg" disabled readonly />
                    <label>Age:</label>
                    <input type="email" name="user1Age" value="18" disabled readonly />
                </div>
                <button>Show more</button>
            </div>

            <div class="profile">
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user2Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user2Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user2Username" value="User 2 Userov" disabled readonly />
                <div id="user2HiddenFields">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user2Email" value="user2-userov@users.bg" disabled readonly />
                    <label>Age:</label>
                    <input type="email" name="user2Age" value="25" disabled readonly />
                </div>
                <button>Show more</button>
            </div>

            <div class="profile">
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user3Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user3Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user3Username" value="User 3 Userov" disabled readonly />
                <div id="user3HiddenFields">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user3Email" value="user3-userov@users.bg" disabled readonly />
                    <label>Age:</label>
                    <input type="email" name="user3Age" value="23" disabled readonly />
                </div>
                <button>Show more</button>
            </div>
        </main>
    </div>
    <script src="./app.js"></script>
    <script>
        window.onload = lockedProfile();
    </script>
</body>
*/