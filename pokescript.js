hpPower = document.querySelector('.hpData');;
attackPower = document.querySelector('.attackData');
defensePower = document.querySelector('.defenseData');
abilitiesPower = document.querySelector('.abilitiesData');

class PokemonAll {
  constructor(response) {
    this.all = []
    };

    get(name) {
      for(x = 0 ; x < this.all.length ; x++ ) {
        if (name == this.all[x].name);
      }

    }
};

class Trainer {
  constructor() {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
    }
}
console.log(Trainer);

axios.all([
    axios.get('https://pokeapi.co/api/v2/pokemon/124/'),
    axios.get('https://pokeapi.co/api/v2/pokemon/794/'),
    axios.get('https://pokeapi.co/api/v2/pokemon/795/')
  ])
  .then(axios.spread((response1, response2, response3) => {

    let pName = response.data.name;
    let pHp = response.data.stats[5].base_stat;
    let pAttack = response.data.stats[4].base_stat;
    let pDefense = response.data.stats[3].base_stat;
    let pAbilities = response.data.abilities;


    let jynx = new Trainer(response1);
    let buzzwole = new Trainer(response2);
    let pheromosa = new Trainer(response3);

    })
  );



  // console.log(jynxResponse.data.abilities[0].ability.name) // abilitiy name
  // console.log(jynxResponse.data.stats[5].stat.name) // hp
  // console.log(jynxResponse.data.stats[5].base_stat) // hp val
  // console.log(jynxResponse.data.stats[4].stat.name) // attack
  // console.log(jynxResponse.data.stats[4].base_stat) // attack val
  // console.log(jynxResponse.data.stats[3].stat.name) // defense
  // console.log(jynxResponse.data.stats[3].base_stat) // defense val
