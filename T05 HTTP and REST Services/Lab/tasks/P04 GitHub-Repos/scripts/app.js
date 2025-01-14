function loadRepos() {
   // 1. Getting the repos container:
   let reposContainer = document.getElementById('res');
  
   fetch('https://api.github.com/users/testnakov/repos')
    .then( (res) => res.text())
    .then( (res) => reposContainer.textContent = res)
    .catch( (error) => console.log(error)) 
}