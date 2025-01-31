function lockedProfile() {
    // 0. Getting the main and deleting the old information:
    let main = document.getElementById('main');
    while (main.firstChild) {
        main.removeChild(main.firstChild);
    }

    // 1. Get request and adding every element to the main:
    const URL = 'http://localhost:3030/jsonstore/advanced/profiles';
    fetch(URL)
        .then((response) => response.json())
        .then((people) => {
            let everyPerson = Object.entries(people);

            for (let i = 0; i < everyPerson.length; i++) {
                let person = everyPerson[i];
                let currentPerson = person[1];
                //2. Getting the data
                let age = currentPerson.age;
                let email = currentPerson.email;
                let username = currentPerson.username;
                let id = currentPerson._id;
                // 3. Creating a structure:
                //    3.1. person main:
                let personCont = document.createElement('div');
                personCont.className = 'profile';
                //    3.1.1. img:
                let img = document.createElement('img');
                img.src = './iconProfile2.png';
                img.className = 'userIcon';
                //    3.1.2. label 1:
                let label1 = document.createElement('label');
                label1.textContent = 'Lock';
                //    3.1.3. input 1:
                let input1 = document.createElement('input');
                input1.type = 'radio';
                input1.name = `user${i + 1}Locked`;
                input1.value = 'lock';
                input1.checked = true;
                //    3.1.4. label 2:
                let label2 = document.createElement('label');
                label2.textContent = 'Unlock';
                //    3.1.5. input 2:
                let input2 = document.createElement('input');
                input2.type = 'radio';
                input2.name = `user${i + 1}Locked`;
                input2.value = 'unlock';
                //    3.1.6. br:
                let br = document.createElement('br');
                //    3.1.7. hr:
                let hr = document.createElement('hr');
                //    3.1.8. label 3:
                let label3 = document.createElement('label');
                label3.textContent = 'Username';
                //    3.1.9. input 3:
                let input3 = document.createElement('input');
                input3.type = 'text';
                input3.name = `user${i + 1}Username`;
                input3.value = username;
                input3.disabled = true;
                input3.readOnly = true;

                // 3.1.10 Creating the new container and the other elements:
                let newInfoCont = document.createElement('div');
                newInfoCont.id = `user${i + 1}HiddenFields`;
                // 3.1.10.1 hr:
                let hrIn = document.createElement('hr');
                // 3.1.10.2 label1:
                let label1In = document.createElement('label');
                label1In.textContent = 'Email:';
                // 3.1.10.3 input1:
                let input1In = document.createElement('input');
                input1In.type = 'email';
                input1In.name = `user${i + 1}Email`;
                input1In.value = email;
                input1In.disabled = true;
                input1In.readOnly = true;
                // 3.1.10.4 label2:
                let label2In = document.createElement('label');
                label2In.textContent = 'Age';
                // 3.1.10.5 input2: 
                let input2In = document.createElement('input');
                input2In.type = 'email';
                input2In.name = `user${i + 1}Age`;
                input2In.value = age;
                input2In.disabled = true;
                input2In.readOnly = true;

                // 3.1.11. Adding the elements to the container and the container to its container:
                newInfoCont.appendChild(hrIn);
                newInfoCont.appendChild(label1In);
                newInfoCont.appendChild(input1In);
                newInfoCont.appendChild(label2In);
                newInfoCont.appendChild(input2In);

                //     3.1.12. show button:
                let button = document.createElement('button');
                button.textContent = 'Show more';
                button.addEventListener('click', (event) => showMoreInfo(event, newInfoCont));
                
                //      4. Adding the elements to the person main and the person main to its main:
                personCont.appendChild(img);
                personCont.appendChild(label1);
                personCont.appendChild(input1);
                personCont.appendChild(label2);
                personCont.appendChild(input2);
                personCont.appendChild(br);
                personCont.appendChild(hr);
                personCont.appendChild(label3);
                personCont.appendChild(input3);
                personCont.appendChild(button);

                main.appendChild(personCont);
            }

            // 5. Describing the showMoreInfo:
            function showMoreInfo(event, newInfoCont) {
                console.log(newInfoCont);
                // 5.1. Getting the lockedInput and if it is checked  
                let button = event.currentTarget;
                let container = button.parentElement;
                let elements = container.children;
                let lockedInput = elements[2];

                if (lockedInput.checked) {
                    return
                }

                container.insertBefore(newInfoCont, button);

                // 5.4. Removing the function on the button, 
                button.textContent = 'Hide it';
                button.removeEventListener('click', (event) => showMoreInfo(event, newInfoCont));
                button.addEventListener('click', (event) => remInfo(event, newInfoCont))
            }

            function remInfo(event, newInfoCont) {
                console.log(newInfoCont);
                let button = event.currentTarget;
                let container = button.parentElement;
                let elements = container.children;
                let lockedInput = elements[2];

                if (lockedInput.checked) {
                    return
                }

                button.textContent = 'Show it';
                container.remove(newInfoCont);
                button.removeEventListener('click', (event) => remInfo(event, newInfoCont));
                button.addEventListener('click', (event) => showMoreInfo(event, newInfoCont))
                
            }

        })
}

/*

<div id="main">
        <main id="main">

            <div class="profile">
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user1Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user1Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user1Username" value="" disabled readonly />
                <div class="user1Username">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user1Email" value="" disabled readonly />
                    <label>Age:</label>
                    <input type="text" name="user1Age" value="" disabled readonly />
                </div>
            	
                <button>Show more</button>
            </div>

        </main>
    </div>

*/