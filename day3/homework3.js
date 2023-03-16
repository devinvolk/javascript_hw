// setting up the submit buttons action
const formData = document.querySelector('#form-data')
console.log(formData)
formData.addEventListener('submit', (event) => {
    event.preventDefault()
    const name = formData.name.value
    pokemonData(name.toLowerCase())
    abilityShow(name.toLowerCase())
})

// creating the async function to query the api and generate the card to display the data retrieved
async function pokemonData(name){
    url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url)
    const data = await response.json()
    const searchDiv = document.querySelector('#searchDiv')
    searchDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${data.sprites.front_shiny}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${data.name.toUpperCase()}</h5>
      </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Abilities:</li>
      <div id="displayAbilities">
      </div>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Add to Team</a>
      <a href="#" class="card-link">Release</a>
    </div>
  </div>
  `
  // creating a loop to generate the list item for the ability of the queried pokemon
  // will display every ability
    let display = ``
    for (index in data.abilities){
      display += `<li class="list-group-item">${data.abilities[index].ability.name}</li>`
  }
    // const displayAbilities = document.querySelector('#displayAbilities')
    displayAbilities.innerHTML = display
}