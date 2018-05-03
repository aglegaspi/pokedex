class Trainer {
  constructor(name) {
    this.name = name;
    this.pokemon = [];
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
let Vernancio = new Trainer('Vernancio');

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

function getPokemonStats(name) {
  axios.get('https://aglegaspi.github.io/pokedex/' + name + '.json')
    .then(function(myResponse) {
      let abilitiesArr = [];
      let abilitiesApi = myResponse.data.abilities;
      for (let i = 0; i < abilitiesApi.length; i++) {
        abilitiesArr.push(abilitiesApi[i].ability.name);
      }
      let stats = {
        'name': myResponse.data.name,
        'hp': myResponse.data.stats[5].base_stat,
        'attack': myResponse.data.stats[4].base_stat,
        'defense': myResponse.data.stats[3].base_stat,
        'abilities': abilitiesArr
      }
      Vernancio.pokemon.push(stats);
    })
}

getPokemonStats('lugia');
getPokemonStats('blastoise');
getPokemonStats('jigglypuff');

let name = document.querySelector('.name');
let hp = document.querySelector('.hp');
let attack = document.querySelector('.attack');
let defense = document.querySelector('.defense');
let abilities = document.querySelector('.abilities');
let stats = document.querySelector('.stats');
let trainerName = document.querySelector('.trainer-name');

trainerName.innerHTML = Vernancio.name;

let messageElement;

function showStats(pokemon) {
  let myPokemon = Vernancio.get(pokemon);
  name.innerText = myPokemon.name;
  hp.innerText = myPokemon.hp;
  attack.innerText = myPokemon.attack;
  defense.innerText = myPokemon.defense;
  abilities.innerText = myPokemon.abilities;
  stats.classList.remove('stats');
  let messageAll = document.querySelectorAll('.message');
  for (let i = 0; i < messageAll.length; i++) {
    messageAll[i].style.display = 'none';
  }
  messageElement = document.querySelector(`.message.${pokemon}-info`);
  messageElement.style.display = 'block';
}

myPokemon1.addEventListener('mouseover', function() {
  showStats('lugia');
});

myPokemon2.addEventListener('mouseover', function() {
  showStats('blastoise');
});

myPokemon3.addEventListener('mouseover', function() {
  showStats('jigglypuff');
});
