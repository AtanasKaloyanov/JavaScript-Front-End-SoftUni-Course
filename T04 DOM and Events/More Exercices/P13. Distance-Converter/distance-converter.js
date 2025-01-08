// document.addEventListener('DOMContentLoaded', solve);

function solve() {
    // 1. Getting the button and adding to the button an event:
    let button = document.getElementById('convert');
    button.addEventListener('click', convert);
    
    // 2. The function:
    function convert() {
        // 2.1. Getting the input and the output options values:
        let selectInput = document.getElementById('inputUnits');
        let inputIndex = selectInput.selectedIndex;
        let inputOptionValue = selectInput.options[inputIndex].value;

        let selectOutput = document.getElementById('outputUnits');
        let outputIndex = selectOutput.selectedIndex;
        let outputOptionValue = selectOutput.options[outputIndex].value;
        // 2.2. Getting the input number and converting via separate function:
    
        let inputTag = document.getElementById('inputDistance');
        let inputNumber = inputTag.value;
        let result = convert(inputNumber, inputOptionValue, 
            outputOptionValue);
    
        // 2.3. Getting the output field:
        let outputTag = document.getElementById('outputDistance');
        outputTag.disabled = false;
        outputTag.value = result;
    
        function convert(givenNumber, inputOptionValue, outputOptionValue){
            let result = 0;
            switch (inputOptionValue) {
                case 'km':
                    switch (outputOptionValue) {
                        case 'km':
                            result = givenNumber;
                            break;
                        case 'm':
                            result = givenNumber * 1000;
                            break;
                        case 'cm':
                            result = givenNumber * 1000 / 0.01;
                            break;
                        case 'mm':
                            result = givenNumber * 1000 / 0.001;
                            break;
                        case 'mi':
                            result = givenNumber * 1000 / 1609.34;
                            break;
                        case 'yrd':
                            result = givenNumber * 1000/  0.9144;
                            break;
                        case 'ft':
                            result = givenNumber * 1000 / 0.3048;
                            break;
                        case 'in':
                            result = givenNumber * 1000 / 0.0254;
                            break;
                    }
                    break;
                case 'm':
                    switch (outputOptionValue) {
                        case 'km':
                            result = givenNumber / 1000;
                            break;
                        case 'm':
                            result = givenNumber;
                            break;
                        case 'cm':
                            result = givenNumber / 0.01;
                            break;
                        case 'mm':
                            result = givenNumber / 0.001;
                            break;
                        case 'mi':
                            result = givenNumber / 1609.34;
                            break;
                        case 'yrd':
                            result = givenNumber / 0.9144;
                            break;
                        case 'ft':
                            result = givenNumber / 0.3048;
                            break;
                        case 'in':
                            result = givenNumber / 0.0254;
                            break;
                    }
                    break;
                case 'cm':
                    switch (outputOptionValue) {
                        case 'km':
                            result = givenNumber * 0.01 / 1000;
                            break;
                        case 'm':
                            result = givenNumber * 0.01;
                            break;
                        case 'cm':
                            result = givenNumber;
                            break;
                        case 'mm':
                            result = givenNumber * 0.01 / 0.001;
                            break;
                        case 'mi':
                            result = givenNumber * 0.01 / 1609.34;
                            break;
                        case 'yrd':
                            result = givenNumber * 0.01 / 0.9144;
                            break;
                        case 'ft':
                            result = givenNumber * 0.01 / 0.3048;
                            break;
                        case 'in':
                            result = givenNumber * 0.01 / 0.0254;
                            break;
                    }
                    break;
                case 'mm':
                    switch (outputOptionValue) {
                        case 'km':
                            result = givenNumber * 0.001 / 1000;
                            break;
                        case 'm':
                            result = givenNumber * 0.001;
                            break;
                        case 'cm':
                            result = givenNumber * 0.001 / 0.01;
                            break;
                        case 'mm':
                            result = givenNumber;
                            break;
                        case 'mi':
                            result = givenNumber * 0.001 / 1609.34;
                            break;
                        case 'yrd':
                            result = givenNumber * 0.001 / 0.9144;
                            break;
                        case 'ft':
                            result = givenNumber * 0.001 / 0.3048;
                            break;
                        case 'in':
                            result = givenNumber * 0.001 / 0.0254;
                            break;
                    }
                    break;
                case 'mi':
                    switch (outputOptionValue) {
                        case 'km':
                            result = givenNumber * 1609.34 / 1000;
                            break;
                        case 'm':
                            result = givenNumber * 1609.34;
                            break;
                        case 'cm':
                            result = givenNumber * 1609.34 / 0.01;
                            break;
                        case 'mm':
                            result = givenNumber * 1609.34 / 0.001;
                            break;
                        case 'mi':
                            result = givenNumber;
                            break;
                        case 'yrd':
                            result = givenNumber * 1609.34 / 0.9144;
                            break;
                        case 'ft':
                            result = givenNumber * 1609.34 / 0.3048;
                            break;
                        case 'in':
                            result = givenNumber * 1609.34 / 0.0254;
                            break;
                    }
                    break;
                case 'yrd':
                    switch (outputOptionValue) {
                        case 'km':
                            result = givenNumber * 0.9144 / 1000;
                            break;
                        case 'm':
                            result = givenNumber * 0.9144;
                            break;
                        case 'cm':
                            result = givenNumber * 0.9144 / 0.01;
                            break;
                        case 'mm':
                            result = givenNumber * 0.9144 / 0.001;
                            break;
                        case 'mi':
                            result = givenNumber * 0.9144 / 1609.34;
                            break;
                        case 'yrd':
                            result = givenNumber;
                            break;
                        case 'ft':
                            result = givenNumber * 0.9144 / 0.3048;
                            break;
                        case 'in':
                            result = givenNumber * 0.9144 / 0.0254;
                            break;
                    }
                    break;
                case 'ft':
                    switch (outputOptionValue) {
                        case 'km':
                            result = givenNumber * 0.3048 / 1000;
                            break;
                        case 'm':
                            result = givenNumber * 0.3048;
                            break;
                        case 'cm':
                            result = givenNumber * 0.3048 / 0.01;
                            break;
                        case 'mm':
                            result = givenNumber * 0.3048 / 0.001;
                            break;
                        case 'mi':
                            result = givenNumber * 0.3048 / 1609.34;
                            break;
                        case 'yrd':
                            result = givenNumber * 0.3048 / 0.9144;
                            break;
                        case 'ft':
                            result = givenNumber;
                            break;
                        case 'in':
                            result = givenNumber * 0.3048 / 0.0254;
                            break;
                    }
                    break;
                case 'in':
                    switch (outputOptionValue) {
                        case 'km':
                            result = givenNumber * 0.0254 / 1000;
                            break;
                        case 'm':
                            result = givenNumber * 0.0254;
                            break;
                        case 'cm':
                            result = givenNumber * 0.0254 / 0.01;
                            break;
                        case 'mm':
                            result = givenNumber * 0.0254 / 0.001;
                            break;
                        case 'mi':
                            result = givenNumber * 0.0254 / 1609.34;
                            break;
                        case 'yrd':
                            result = givenNumber * 0.0254 / 0.9144;
                            break;
                        case 'ft':
                            result = givenNumber * 0.0254 / 0.3048;
                            break;
                        case 'in':
                            result = givenNumber;
                            break;
                    }
                    break;
            }
            return result;
        }

    }

}

/*

 <main>
        <h1>Distance Converter</h1>
        <div>
            <input type="text" id="inputDistance">

            <select id="inputUnits">
                <option value="km">Kilometers</option>
                <option value="m">Meters</option>
                <option value="cm">Centimeters</option>
                <option value="mm">Millimeters</option>
                <option value="mi">Miles</option>
                <option value="yrd">Yards</option>
                <option value="ft">Feet</option>
                <option value="in">Inches</option>
            </select>
        
            <label for="outputDistance">To:</label>
    
            <select id="outputUnits">
                <option value="km">Kilometers</option>
                <option value="m">Meters</option>
                <option value="cm">Centimeters</option>
                <option value="mm">Millimeters</option>
                <option value="mi">Miles</option>
                <option value="yrd">Yards</option>
                <option value="ft">Feet</option>
                <option value="in">Inches</option>
            </select>

            <label> = </label>

            <input type="text" id="outputDistance" disabled="disabled">

        </div>

        <input type="button" id="convert" value="Convert">
    </main>

    */