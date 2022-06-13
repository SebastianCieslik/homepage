const menus = document.querySelector('.menu--js');
const nav = document.querySelector('.navigation--js');
const pokemonList = document.querySelector('.PokemonList');
const text = document.querySelector('.title');
const button = document.querySelector('.search');
const filmList = document.querySelector('.filmlist');

menus.addEventListener('click', () =>{ 
    nav.classList.toggle('navigation__open');
})

function pad(num, size) {
    const s = "0000000" + num;
    return s.substr(s.length-size);
}


button.addEventListener('click', () =>{
    const lookFor = text.value;
    for(a=1; a<100; a++) {
        const zeroNumber = pad(a, 7)
        console.log(`tt${zeroNumber}`);
        const fetchData = async (zeroNum) => {
            const response = await axios.get('http://www.omdbapi.com/', {
                params: {
                    apikey:'f930da40',
                   // s: text.value,
                    i: `tt${zeroNum}`
                }            
            })
            console.log(response.data);
            const  li = document.createElement('li');
            li.innerText = response.data.Title;
            const filmImg = document.createElement('img');
            filmImg.src = response.data.Poster;
            li.append(filmImg);
            filmList.appendChild(li);  
        }
        fetchData(zeroNumber);
    }
});
