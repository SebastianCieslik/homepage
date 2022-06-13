const menus = document.querySelector('.menu--js');
const nav = document.querySelector('.navigation--js');
const peopleMainSection = document.querySelector('.main-people');
const planetsMainSection = document.querySelector('.main-planets');
const starshipsMainSection = document.querySelector('.main-people');

menus.addEventListener('click', () =>{ 
    nav.classList.toggle('navigation__open');
})


//if(peopleMainSection)
// {
//     const ul = document.createElement('ul');
//     peopleMainSection.append(ul);
//     let max = 83;
//  for (i = 1;  i < max; i++) {
//         const link = `https://swapi.dev/api/people/`+`${i}`;
//         axios.get(link).then((res) => {
//       //  console.log(res.data);
//         const li = document.createElement('li');
//         const newA = document.createElement('a');
//         newA.href = `/singleStar.html?${link}`;
//         newA.innerText = res.data.name;
//         li.append(newA);
//         ul.appendChild(li);

// }).catch((err) => {
//     return err;
// });
//   }
// }



// if(planetsMainSection)
// {
//     let max = 61;
//     const ul = document.createElement('ul');
//     planetsMainSection.appendChild(ul);
//  for (i = 1;  i < max; i++) {
//      const link = `https://swapi.dev/api/planets/`+`${i}/`;
//      axios.get(link).then((res) => {
//        //  console.log(res.data);
//      const li = document.createElement('li');
//      li.innerText = res.data.name;
//     //  const pokemonImg = document.createElement('img');
//     //  pokemonImg.src = res.data.sprites.front_default;
//     //  li.append(pokemonImg);

//     ul.appendChild(li);  
//     const newA = document.createElement('a');
//     newA.href = `${link}`;
//     newA.innerText = res.data.name;
//     li.append(newA);
// }).catch((err) => {
//     return err;
// });
//   }  
// }

if(starshipsMainSection)
{
    let max =76;
    const ul = document.createElement('ul');
    starshipsMainSection.appendChild(ul);
 for (i = 1;  i < max; i++) {
     const link = `https://swapi.dev/api/starships/${i}/`;
     axios.get(link).then((res) => {
         console.log(res.data);
         const {name, model,starship_class} = res.data;
     const li = document.createElement('li');
     li.innerText = name;
     const h5 = document.createElement('p');
     const h4 = document.createElement('p');
     h5.innerText = model;
     h4.innerText = starship_class;
     li.append(h5);
   li.append(h4);
    //  const pokemonImg = document.createElement('img');
    //  pokemonImg.src = res.data.sprites.front_default;
    //  li.append(pokemonImg);

    ul.appendChild(li);  
    const newA = document.createElement('a');
    newA.href = `${link}`;
    newA.innerText = name;
    li.append(newA);
}).catch((err) => {
    return err;
});
  }  
}





function getData(link) {
axios.get(link).then((res) => {
    console.log(res.data);
//  const li = document.createElement('li');
//  li.innerText = res.data.name;
//  const pokemonImg = document.createElement('img');
//  pokemonImg.src = res.data.sprites.front_default;
//  li.append(pokemonImg);
//  pokemonList.appendChild(li);  
//  sessionStorage.setItem("pokemon", res.data.name);
//  const newA = document.createElement('a');
//  newA.href = `/pokemon.html?${link}`;
//  newA.innerText = res.data.name;
//  li.append(newA);
}).catch((err) => {
return err;
});
}