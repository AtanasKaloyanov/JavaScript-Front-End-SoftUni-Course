function colorize() {
    let element = document.getElementsByTagName('tbody')[0]

    let rows = Array.from(element.children)

      for (let index = 0; index < rows.length; index++) {
          if ( (index + 1) % 2 == 0) {
              rows[index].style.backgroundColor = "Teal"
          }
      }
    }
        
/*
<body>
    <table>
        <tr>
            <th>Name</th>
            <th>Town</th>
        </tr>
        <tr>
            <td>Eve</td>
            <td>Sofia</td>
        </tr>
        <tr>
            <td>Nick</td>
            <td>Varna</td>
        </tr>
        <tr>
            <td>Didi</td>
            <td>Ruse</td>
        </tr>
        <tr>
            <td>Tedy</td>
            <td>Varna</td>
        </tr>
    </table>

    <button onclick="colorize()">Colorize</button>
    <script src="ColorizeTable.js"></script>
</body>
*/