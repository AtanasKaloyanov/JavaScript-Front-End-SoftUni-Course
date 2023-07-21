function solve() {
  let textArea = document.getElementById('input')
  let arr = textArea.value.split('.')

  let sentences = arr.filter((currentElement) => {
    return currentElement.trim().length > 0
  })

  let divContainer = document.getElementById('output')


  for (i = 0; i < sentences.length; i += 3) {
    let newParagraph = document.createElement('p')
    let helpArray = []
    for (j = 0; j < 3; j++) {
      if (sentences[i + j]) {
        let currentSentence = sentences[i + j]
        helpArray.push(currentSentence)
      }
    }

    newParagraph.textContent = helpArray.join('. ') + '.'
    divContainer.appendChild(newParagraph)
  }

}



// input - the value from the textarea is the given input. It should be parsed into an array by splitting the given input by '.'. Each element from this array is a different sentence if has at least one character.

// output -  For every 3 sentences -  different paragraph. Each paragraph's textContent = sentences. The paragraphs should be added to the div with id 'output as children'


/*

<head>
    <link rel="stylesheet" href="template.css">
    <script src="solution.js"></script>
    <title>Format the Text</title>
</head>

<body>
    <h4>Create a functionality which formats the given text into paragraphs</h4>
    <div id="exercise">
        <textarea id="input" cols="30" rows="12"></textarea>
        <button type="button" id="formatItBtn" onclick="solve()">Format</button>
        <div id="output"></div>
    </div>

*/