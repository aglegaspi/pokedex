$(document).ready(function () {
  $('body').hide().fadeIn(2000);
});

let audio = document.getElementById("myaudio");
audio.volume = 0.05;

let chosenOne = document.querySelector('#choosePokemon');
chosenOne.addEventListener('change', function (e) {
let mainlink = 'https://aglegaspi.github.io/pokedex/';
let pokepath = chosenOne.value;
let url = mainlink + pokepath + '.json';

  axios.get(url)
    .then(function (response) {

      let pokeHp = document.querySelector('#dispHp');
      pokeHp.innerHTML = response.data.stats[5].base_stat;

      let pokeAttack = document.querySelector('#dispAttack');
      pokeAttack.innerHTML = response.data.stats[4].base_stat;

      let pokeDefense = document.querySelector('#dispDefense');
      pokeDefense.innerHTML = response.data.stats[3].base_stat;

      let pokeAbilities = document.querySelector('#dispAbilities');
      let abilityNames = [];
      for (x = 0 ; x < response.data.abilities.length; x++) {
        abilityNames.push(response.data.abilities[x].ability.name);
      }
      pokeAbilities.innerHTML = abilityNames.join(', ');;
        }
    );

    function changeImage() {
      let imgValue = choosePokemon.options[e.target.selectedIndex].getAttribute('rel');
      document.getElementById("pokeImgs").src = imgValue;
    }
    changeImage();
});



























// a wonderfule world
