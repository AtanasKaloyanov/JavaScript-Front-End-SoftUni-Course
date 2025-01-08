function encodeAndDecodeMessages() {
    // 1. Getting both of the containers and both of the textAreas::
    let textAreas = document.getElementsByTagName('textarea');
    let textArea1 = textAreas[0];
    let textArea2 = textAreas[1];
    // 2. Getting the button1 and adding to it function1:
    let buttons = document.getElementsByTagName('button');
    let button1 = buttons[0];
    button1.addEventListener('click', encodeAndSend);

    function encodeAndSend() {
        let textArea1Value = textArea1.value;
        textArea2.textContent = encode(textArea1Value);
        textArea1.value = '';
    }

    function encode(text) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let currentChar = text.charAt(i);
            let newChar =  String.fromCharCode(currentChar.charCodeAt(0) + 1);
            result += newChar
        }
        return result;
    }

    // 3. Getting the button2 and adding function2:
    let button2 = buttons[1];
    button2.addEventListener('click', decodeAndRead);

    function decodeAndRead() {
         let textArea1Value = textArea2.value;
         let decodedInfo = decode(textArea1Value);
         textArea2.value = decodedInfo;
    }

    function decode(text) {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let currentChar = text.charAt(i);
            let newChar =  String.fromCharCode(currentChar.charCodeAt(0) - 1);
            result += newChar
        }
        return result;
    }
}

/*

<body>
    <div id="container">
        <main id="main">
            <div>
                <p>Message</p>
                <textarea placeholder="Write your message here..."></textarea>
                <button>Encode and send it</button>
            </div>
            <div>
                <p>Last received message</p>
                <textarea disabled placeholder="No messages..."></textarea>
                <button>Decode and read it</button>
            </div>
        </main>
    </div>
    <script src="./app.js"></script>
    <script>
        window.onload = encodeAndDecodeMessages();
    </script>
</body>

*/