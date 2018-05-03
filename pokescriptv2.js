$(document).ready(function() {
  $('body').hide().fadeIn(2000);
});

class Trainer {
  constructor(name, pokemon) {
    this.name = name;
    this.pokemon = pokemon;
  }

  all() {
    return this.pokemon;
  }

  get(name) {
    for (let i = 0; i < this.pokemon.length; i++) {
      let pokemonName = this.pokemon[i].name;
      if (pokemonName === name) {
        return this.pokemon[i];
      }
    }
    return false;
  }
}

class Pokemon {
  constructor(name, hp, attack, defense, abilities) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}

let jynx = new Pokemon('jynx');
let buzzwole = new Pokemon('buzzwole');
let pheromosa = new Pokemon('pheromosa');
let Vernancio = new Trainer('Vernancio', jynx, buzzwole, pheromosa);

let chosenOne = document.querySelector('#choosePokemon');
chosenOne.addEventListener('change', function(e) {

      function getPokemonStats(pokemon) {
        let mainlink = 'https://aglegaspi.github.io/pokedex/';
        let url = mainlink + pokemon.name + '.json';

        axios.get(url)
          .then(function(response) {
            pokemon.hp = response.data.stats[5].base_stat;
            pokemon.attack = response.data.stats[4].base_stat;
            pokemon.defense = response.data.stats[3].base_stat;

            let abilityNames = [];
            let abilitiesApi = response.data.abilities;
            for (let x = 0; x < abilitiesApi.length; x++) {
              abilityNames.push(abilitiesApi[x].ability.name);
            }
            pokemon.abilities = abilityNames.join(', ');

            if (pokemon.name == chosenOne.value) {
              showStats(pokemon);
            }
          })
      };


      getPokemonStats(jynx);
      getPokemonStats(buzzwole);
      getPokemonStats(pheromosa);

      function showStats(pokemon) {
        hp.innerHTML = pokemon.hp;
        attack.innerText = pokemon.attack;
        defense.innerText = pokemon.defense;
        abilities.innerText = pokemon.abilities;
      }

function changeImage() {
  let imgValue = choosePokemon.options[e.target.selectedIndex].getAttribute('rel');
  document.getElementById("pokeImgs").src = imgValue;
  };
changeImage(); });

let hp = document.querySelector('#dispHp');
let attack = document.querySelector('#dispAttack');
let defense = document.querySelector('#dispDefense');
let abilities = document.querySelector('#dispAbilities');
