function attachGradientEvents() {
    // 1. Getting the box and the output as elements:
    let box = document.getElementById('gradient');
    let outputElement = document.getElementById('result');

    // 2. Adding functions to the box
    box.addEventListener('mousemove', cursorOn);
    box.addEventListener('mouseout', cursorOut)

    // 3. 2 functions:
    function cursorOn(e) {
        let mousePositionX = e.offsetX;
        let boxWidth = box.clientWidth;
        let percent = Math.floor((mousePositionX / boxWidth) * 100);
        outputElement.textContent = percent + '%';
    }

    function cursorOut(e) {
        outputElement.textContent = '';
    }
}