const formData = document.querySelector('#form-data')
console.log(formData)
formData.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log(event)
    const name = formData.name.value
    pokemonData(name.toLowerCase())
})

async function pokemonData(name){
    url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    const searchDiv = document.querySelector('#searchDiv')
    searchDiv.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="${data.sprites.front_shiny}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${data.name.toUpperCase()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Abilities:</li>
      <li class="list-group-item">${data.abilities[0].ability.name}</li>
      <li class="list-group-item">${data.abilities[1].ability.name}</li>
    </ul>
    <div class="card-body">
      <a href="#" class="card-link">Add to Team</a>
      <a href="#" class="card-link">Release</a>
    </div>
  </div>
  `
}

