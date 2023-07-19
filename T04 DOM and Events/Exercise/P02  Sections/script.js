function create(words) {
   const cont = document.getElementById('content')

   words.forEach( (currentString) => {
      const p = document.createElement('p')
      p.textContent = currentString
      p.style.display = 'none'
      const div = document.createElement('div')
      div.appendChild(p)
      div.addEventListener('click', onclick)

      function onclick(e) {
         const div = e.currentTarget
         const p = div.children[0]
         p.style.display = ''
      }

      cont.appendChild(div)
   })

   console.log(cont)
}

// the input is an array of String
// for each string create -> div > a > currentString

/*

<head>
    <meta charset="UTF-8">
    <title>Sections</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body onload="create(['Section 1', 'Section 2', 'Section 3', 'Section 4']);">
    <div id="content">
    </div>
    
</body>

*/