const menus = document.querySelector('.menu--js');
const nav = document.querySelector('.navigation--js');
const pokemonList = document.querySelector('.PokemonList');

menus.addEventListener('click', () =>{ 
    nav.classList.toggle('navigation__open');
})
if(pokemonList)
{
    let max = 899;
 for (i = 0;  i < max; i++) {
     const link = `https://pokeapi.co/api/v2/pokemon/`+`${i}`;
     axios.get(link).then((res) => {
    const  li = document.createElement('li');
     li.innerText = res.data.name;
     const pokemonImg = document.createElement('img');
     pokemonImg.src = res.data.sprites.front_default;
     li.append(pokemonImg);
     pokemonList.appendChild(li);  
     sessionStorage.setItem("pokemon", res.data.name);
     const newA = document.createElement('a');
     newA.href = `/pokemon.html?${link}`;
     newA.innerText = res.data.name;
     li.append(newA);
}).catch((err) => {
    return err;
});
  }  
}

const pokeSection = document.querySelector('.singlePokemon');
if(pokeSection){
 let queryString = location.search.substring(1);
 let a = queryString.split("|");
 let queryName = a[0];
 console.log(queryString);
 axios.get(a[0]).then((res) => {
     console.log(res);
     const single = sessionStorage.getItem("pokemon");
    
    const newSingle = document.createElement('h1');
    newSingle.innerText = res.data.name;
    pokeSection.append(newSingle);
    const newImage = document.createElement('img');
    newImage.src = res.data.sprites.front_default;
    pokeSection.append(newImage);
    const skillSection = document.createElement('h2');
    skillSection.innerText = "Skills";
    skillSection.classList += "skillUl";
    pokeSection.append(skillSection);
    const abilitiesArray = res.data.abilities;
    const skillUl = document.querySelector('.skillUl');
    for(let ability of abilitiesArray){
        const skill = document.createElement('li');
        skill.innerText = ability.ability.name;
        skillUl.append(skill);
    }
 });
}
  



