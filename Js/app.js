const jokeEl = document.getElementById('joke')
const get_joke = document.getElementById('get_joke')

// Add event listener to the button
get_joke.addEventListener('click',generateJoke);

generateJoke();

async function generateJoke(){
    //call the API
    const jokeRes = await fetch('https://icanhazdadjoke.com/',{
        headers: {
            accept: 'application/json'
        }
    });

    const joke = await jokeRes.json();

    console.log(joke);
    //set a random joke
    jokeEl.innerHTML = joke.joke
}