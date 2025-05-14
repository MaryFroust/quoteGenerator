const search = document.querySelector('#button')
const display = document.querySelector('.display')
const input = document.querySelector('#input')


const quote = () => {

    const url = "https://api.quotable.io/random"
    fetch(url)
        .then((rawResponse) => {
            return rawResponse.json()
        })
        .then((response) => {
            display.innerText = response.content
            console.log(response)
        })

}
quote()

button.addEventListener('click', () => {
    const url = "https://api.quotable.io/random"
    fetch(url)
    .then((rawResponse)=>{
        return input.value
        
    })
    console.log(button)
})


//API:https://api.quotable.io/
// random (quote)
//quotes (Get all quotes matching a given query)
///authors (Get all authors matching the given query)



