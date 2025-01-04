function solve() {
  // 1. Getting the words and the case from the inputs:  
  let input1 = document.getElementById('text');
  let input2 = document.getElementById('naming-convention');
  let words = input1.value.toLowerCase().split(' ');
  let namingConvention = input2.value;

  // 2. Converting the words depending on the case:
  let result = '';
  switch (namingConvention) {
    case 'Camel Case':
      result += words[0];

      for (let i = 1; i < words.length; i++) {
        let word = words[i];
        result += toUpperC(word);
      }
      break;

    case 'Pascal Case':
      Array.from(words).forEach((word) => {
        word = toUpperC(word);
        result += word;
      });
      break;

    default:
      result = 'Error!';
      break;
  }

  // 3. Getting the final container and adding the result to the it:
  let resultContainer = document.getElementById('result');
  resultContainer.textContent = result;

  function toUpperC(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
  }
}

/*

<body>
    <form>
        <div>
            <label for="text">Text: </label>
            <input type="text" id="text">
        </div>
        <div>
            <label for="naming-convention">Naming Convention: </label>
            <input type="text" id="naming-convention">
        </div>

        <input type="button" onclick="solve()" value="Transform">
    </form>
    <div class="result-container">Result: <span id="result"></span></div>
</body>
    
*/