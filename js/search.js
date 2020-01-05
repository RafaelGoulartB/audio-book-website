const searchField = document.getElementById('search')
const searchButton = document.getElementById('button-search')

searchButton.addEventListener('click', () => {
  if(searchField.classList.contains('hidden')) {
    searchField.classList.remove('hidden')
  }
  else {
    searchField.classList.add('hidden')
  }
})