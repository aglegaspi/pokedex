axios.all([
    axios.get('https://pokeapi.co/api/v2/pokemon/124/'),
    axios.get('https://pokeapi.co/api/v2/pokemon/794/'),
    axios.get('https://pokeapi.co/api/v2/pokemon/795/')
  ])
  .then(axios.spread((jynxResponse, buzzwoleResponse, pheromosaResponse) => {
    // do something with all responses

    // console.log(jynxResponse.data.abilities[0].ability.name) // abilitiy name
    // console.log(jynxResponse.data.stats[5].stat.name) // hp
    // console.log(jynxResponse.data.stats[5].base_stat) // hp val
    // console.log(jynxResponse.data.stats[4].stat.name) // attack
    // console.log(jynxResponse.data.stats[4].base_stat) // attack val
    // console.log(jynxResponse.data.stats[3].stat.name) // defense
    // console.log(jynxResponse.data.stats[3].base_stat) // defense val
    let jynx = new Pokemon(jynxResponse);
    console.log(jynx);
    let buzzwole = new Pokemon(buzzwoleResponse);
    console.log(buzzwole);
    let pheromosa = new Pokemon(pheromosaResponse);
    console.log(pheromosa);
    let response = jynx + buzzwole + pheromosa;
  }));


  class Pokemon {
    constructor(response) {
      this.hp = response.data.stats[5].base_stat;
      this.attack = response.data.stats[4].base_stat;
      this.defense = response.data.stats[3].base_stat;
      // this.abilities = [];
     };
   };
console.log(Pokemon);








//

//
//
//

/*Instructions:


Welcome to the poke showcase! If you are not familiar with Pokemon please skim
thru this website       (https://www.pokemon.com/us/) . Imagine yourself as an
up and coming pokemon trainer. In order to raise brand awareness you have decided
to create a website showcasing your pokemon. However, all the pokemon information
you need to access is stored in a server.
Use the Pokemon API       (https://pokeapi.co/) to gather information regarding
your chosen pokemon using ajax calls. This website will house your roster of at
least three pokemon and at least four of their statistics to display to other
trainers. Please keep your code understandable and clean because this is a
precursor the to next project which has you work in a group.
Be creative in your presentation of the information.

Instructor: Take note of the provided sign­up sheet. Have students choose 3
different pokemon from the list. It’s important they all be different because
this will be used in the group project after this one.


Challenge:
Try showing extra pieces of information such as:


-move related information
-priority power accuracy


and have this information be hidden by default and then have it display on a
button click use an animation with the reveal

Completion Requirements:
A completed assignment should:
represent a fictitious trainer name
be deployed to Github pages
have each pokemon stored within a Pokemon object and have properties for:

- hp ­ integer
- attack ­ integer
- defense ­ integer
- abilities ­ array of strings

have all pokemon stored within a container object named after your trainer
name have a method named all accepts no parameters returns an array of
Pokemon objects have a method named get accepts 1 parameter called name
returns a Pokemon object housing information for the pokemon it found have
relevant information presented on at least 3 different pokemon retrieve pokemon
information via the

Pokemon API
retrieve information using javascript ajax calls.
display information regarding the pokemon’s:
	-hp
-attack
-defense
-abilities


*/
