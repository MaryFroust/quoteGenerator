const search = document.querySelector('#button')
const randomBtn = document.querySelector('.btn')
const input = document.querySelector('#input')
const display = document.querySelector('.display')
const randomURL = "https://api.quotable.io/random"
const authorURL = "https://api.quotable.io/authors"
// const authorURL = (`https://api.quotable.io/quotes?author=${encodeURI(input.value)}?display=${response}`)
const star = document.querySelector('.star')
const read = document.querySelector('.read')
const favorites = document.querySelector('#favorites')
const readLater = document.querySelector('#readLater')
const currentQuote = ''



randomBtn.addEventListener('click', () => {

    fetch(randomURL)
        .then((rawResponse) => {
            return rawResponse.json()
        })
        .then((response) => {
            display.innerText = (`Quote: ${response.content}

                Author: ${response.author}`)

            star.addEventListener('click', () => {
                if (currentQuote !== '')
                    return
                const li = document.createElement('li')
                li.textContent = `Quote: ${response.content} Author: ${response.author}`
                favorites.appendChild(li)
                star.classList.add('selected')
                console.log(response)
            })
            read.addEventListener('click', () => {
                if (currentQuote !== '')
                    return
                const li = document.createElement('li')
                li.textContent = `${response.content} ${response.author}`
                readLater.appendChild(li)
                read.classList.add('selected')
                return response
                
            })
            console.log(response)
        })
})

search.addEventListener('click', () => {
   fetch(authorURL)
        .then((rawResponse) => {
            return rawResponse.json()
        })
        
        .then((response) => {
            console.log(response)
           if(input !== '')
            
        return fetch(`https://api.quotable.io/quotes?author${encodeURI(input.value)}?display=${response.results[0]}`)
        display.innerText = (`Results: ${response.results}`)
               display.innerText = (`Quote: ${response.results[0]}
        // Author: ${response.results[0]}`)
        // return 
        
        })
        
})




// search.addEventListener('click', () => {
//     if(input !== ''){
//         fetch(author)
//         .then((response)=>{
//             return display.innerText
//         })
        
//     }
// })



// const quote = () => {

//     const url = "https://api.quotable.io/random"
//     fetch(url)
//         .then((rawResponse) => {
//             return rawResponse.json()
//         })
//         .then((response) => {
//             display.innerText = response.content
//             console.log(response)
//         })

// }
// quote()



//API:https://api.quotable.io/
// random (quote)
//quotes (Get all quotes matching a given query)
///authors (Get all authors matching the given query)



