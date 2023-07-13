function calc() {
   let firstInput = document.getElementsByTagName('input')[0]
   let secondInput = document.getElementsByTagName('input')[1]
   let thirdInput = document.getElementsByTagName('input')[2]

   thirdInput.value = Number(firstInput.value) + Number(secondInput.value)
}
