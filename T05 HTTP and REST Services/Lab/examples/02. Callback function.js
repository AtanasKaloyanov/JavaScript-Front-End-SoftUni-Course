function food() {
    return 'brings food'
}

function cat(owner, food) {          // food is a callback function
  console.log(`${owner} ${food()}.`)
}

cat('Atanas', food)