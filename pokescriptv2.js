$(document).ready(function() {
  $('body').hide().fadeIn(2000);
});

let wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'white',
  progressColor: 'grey'
});
wavesurfer.on('ready', function() {
  wavesurfer.play();
});

wavesurfer.setVolume(0.2);
wavesurfer.load('https://aglegaspi.github.io/pokedex/subwayseries.mp3');


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

let chosenOne = document.querySelector('#choosePokemon');
chosenOne.addEventListener('change', function(e) {
  let mainlink = 'https://aglegaspi.github.io/pokedex/';
  let pokepath = chosenOne.value;
  let url = mainlink + pokepath + '.json';

axios.get(url)
  .then(function(response) {

    let hp = document.querySelector('#dispHp');
    hp.innerHTML = response.data.stats[5].base_stat;

    let attack = document.querySelector('#dispAttack');
    attack.innerHTML = response.data.stats[4].base_stat;

    let defense = document.querySelector('#dispDefense');
    defense.innerHTML = response.data.stats[3].base_stat;

    let abilities = document.querySelector('#dispAbilities');
    let abilityNames = [];
    for (x = 0; x < response.data.abilities.length; x++) {
      abilityNames.push(response.data.abilities[x].ability.name);
    }
      abilities.innerHTML = abilityNames.join(', ');;
  });


  function changeImage() {
    let imgValue = choosePokemon.options[e.target.selectedIndex].getAttribute('rel');
    document.getElementById("pokeImgs").src = imgValue;
  };
  changeImage();

});
