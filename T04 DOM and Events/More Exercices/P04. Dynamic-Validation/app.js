function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', change);

    function change(e) {
        let text = input.value;
        if (!text.match('[a-z]@[a-z].[a-z]')) {
            input.className = 'error';
        } else {
            input.className = '';
            input.value = '';
        }
    }
}