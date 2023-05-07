// Fetch request na API do Github
// Fetch API

const username = 'stehmorais'

fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) => {
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data) =>{
    console.log(`O nome do usuário é: ${data.name}`)
}).catch((err) => {
    console.log(`Houve um erro:  + ${err}`)
})