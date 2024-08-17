/*
const loadJoke = async () => {
    const joke = document.getElementById('joke')

    await fetch('https://api.chucknorris.io/jokes/random')
        .then(res => res.json())
        .then(data => {
            joke.innerHTML = data.value
        })
        .catch((error) => console.log(error))
}
*/

const loadJoke = async () => {
    try {
        const jokeFetch = await fetch('https://api.chucknorris.io/jokes/random')
        const joke = await jokeFetch.json()
        document.getElementById('joke').innerHTML = joke.value
    } catch (error) {
        console.log(error)
    }
}

document.getElementById('load-joke-btn').addEventListener('click', loadJoke)