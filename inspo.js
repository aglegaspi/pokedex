class PokemonAll {
    constructor() {
      this.all = []
    }

    add(pokemon){
      this.all.push(pokemon)
    }

    get(name) {
      for (let i = 0; i < this.all.length; i++) {
          if (name == this.all[i].name) {
              return this.all[i]
            }
        }
    }

  }
    class Venancio {
      constructor(name, hp, attack, defense, abilities = []) {
          this.name = name.toString()
          this.hp = hp.toString()
          this.attack = attack.toString()
          this.defense = defense.toString()
          this.abilities = abilities
       }
     }

    let allPokemon = new PokemonAll()

      function callAxiosVenancio(callback) {
        let url1 = "https://aglegaspi.github.io/pokedex/jynx.json"
        let url2 = "https://aglegaspi.github.io/pokedex/buzzwole.json"
        let url3 = "https://aglegaspi.github.io/pokedex/phermosa.json"

        axios.all([
            axios.get(url1),
            axios.get(url2),
            axios.get(url3)
        ])
            .then(responses => {
                responses.forEach(response => {
                    let data = response.data
                    let pokemon = new Venancio(
                        data.name,
                        data.stats[5].base_stat,
                        data.stats[4].base_stat,
                        data.stats[3].base_stat,
                    )

                    data.abilities.forEach((item) => {
                        pokemon.abilities.push(item.ability.name);
                      })

                    allPokemon.add(pokemon)
                })
                callback(allPokemon)
            })
    }
