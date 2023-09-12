let nombrespoke = document.getElementById('btn');
let container = document.getElementById('container');

nombrespoke.addEventListener('click', () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
        .then(response => response.json())
        .then(data => {
            let pokemons = data.results;
            let pokemonNames = [];

            for (let i = 0; i < pokemons.length; i++) {
                fetch(pokemons[i].url)
                    .then(response => response.json())
                    .then(pokemonData => {
                        let pokemonName = pokemonData.name;
                        pokemonNames.push(pokemonName);
                            container.innerHTML = `<p>${pokemonNames.join(', ')}</p>`;
                        
                    })
                    .catch(error => {
                        container.innerHTML = `<p>Error: ${error.message}</p>`;
                    });
            }
        })
    })