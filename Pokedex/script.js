const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};

const URL = " https://pokeapi.co/api/v2/pokemon/";
const card = document.querySelector('#card');
const btn = document.querySelector('#btn');

async function getPokemon(id) {
    const resp = await fetch(URL + id);
    const respData = await resp.json();
    createPokeCard(respData);
}

function createPokeCard(pokemon) {
    const hp = pokemon.stats[0].base_stat;
    const statAttack = pokemon.stats[1].base_stat;
    const statDefense = pokemon.stats[2].base_stat;
    const statSpeed = pokemon.stats[5].base_stat;
    const imgSrc = pokemon.sprites.other.dream_world.front_default;
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    card.innerHTML = `
                <p class="hp">
                <span>HP</span>
                ${hp}
                </p>
                <img src="${imgSrc}">
                <h2 class="poke-name">${pokeName}</h2>
                <div class="types">
                </div>
                <div class="stats">
                    <div>
                        <h3>${statAttack}</h3>
                        <p>Attack</p>
                    </div>
                    <div>
                        <h3>${statDefense}</h3>
                        <p>Defense</p>
                    </div>
                    <div>
                        <h3>${statSpeed}</h3>
                        <p>Speed</p>
                    </div>
                </div>
    `;
    appendTypes(pokemon.types);
    const themeColor = typeColor[pokemon.types[0].type.name];
    styleCard(themeColor);
}

function appendTypes(types) {
    types.forEach(item => {
        let span = document.createElement('span');
        span.innerText = item.type.name;
        document.querySelector('.types').append(span);
    });
}

function styleCard(color) {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, white 36%)`;
    card.querySelectorAll('.types span').forEach(type => {
        type.style.backgroundColor = color;
    })
}

btn.addEventListener('click', () => {
    let id = Math.floor(Math.random() * 150) + 1;
    getPokemon(id);
});

window.addEventListener('load', () => {
    let id = Math.floor(Math.random() * 150) + 1;
    getPokemon(id);
})