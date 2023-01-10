const getpokemonURL = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`


const generatePokemonPromisses = () => Array(151).fill()
    .map((_,index) => fetch(getpokemonURL(index + 1)).then(response => response.json()));


const generateHTML = pokemons => pokemons.reduce((acc, { name, id, types}) =>{
    const elementTypes = types.map(typeInfo => typeInfo.type.name).join(' | ');

    acc+=`
    <li class="card ${elementTypes[0]}">
     <img class="card-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png">
        <h2 class="card-title">${name}</h2>
        <p class="card-subtitle">${elementTypes}</p>
    </li>`

        return acc;
},'')

const insertPokemonsIntoPage = pokemons => {
    const ul = document.querySelector('[data-js="pokedex"]');
    ul.innerHTML = pokemons;
}

const PokemonPromises = generatePokemonPromisses();

Promise.all(PokemonPromises)
 .then(generateHTML)
 .then(insertPokemonsIntoPage)


//Condições para "esconder as divs dos outros pokemons"

//  if (hide1 == 09){
//     $("div.tipo1.classList.remove".#hide1);
//    }
   
//    if (HelpCenter.user.role=="end_user"){
//     $("div.end_user").show();
//    }
   
//    if (HelpCenter.user.role=="agent"){
//     $("div.agent").show();
//    }
   
//    if (HelpCenter.user.role=="manager"){
//     $("div.manager").show();
//    }