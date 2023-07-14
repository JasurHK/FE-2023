const jokeConteiner = document.getElementById("joke");
const btn = document.getElementById('btn');
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist&type=single';

let getJoke = ()=>{
    jokeConteiner.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeConteiner.textContent = `${item.joke}`;
        jokeConteiner.classList.add("fade");
    });
}
btn.addEventListener("click", getJoke)
getJoke();
