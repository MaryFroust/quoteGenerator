const search = document.querySelector('#button')
const randomBtn = document.querySelector('.btn')
const input = document.querySelector('#userInput')
const display = document.querySelector('#quoteSection')
const randomURL = "https://api.quotable.io/random"
const authorURL = "https://api.quotable.io/?author"

const quoteBox=document.querySelector('.quoteBox')

const favorites = document.querySelector('#favorites')
const readLater = document.querySelector('#readLater')
const currentQuote = ''
const sereneAudio = new Audio('mixkit-serene-view-443.mp3')
const villaAudio= new Audio('mixkit-villa-penthouse-339.mp3')
// sereneAudio.loop=true



randomBtn.addEventListener('click', () => {
    sereneAudio.play()
    fetch(randomURL)
        .then((rawResponse) => {
            return rawResponse.json()
        })
        .then((response) => {
            display.innerText = (`Quote: ${response.content}

                Author: ${response.author}`)
    
            console.log(response)
        })
})

search.addEventListener('click', () => {
    villaAudio.play()
    const authorURL = `https://api.quotable.io/quotes?author=${encodeURI(input.value)}`
   fetch(authorURL)
        .then((rawResponse) => {
            console.log(rawResponse)
            return rawResponse.json()  
        })
        .then((response) => {
            if(input.value !== ''){
                if(response.results && response.results.length > 0){
                   display.innerText = ''
                    response.results.forEach((quote)=>{

            const quoteDiv =document.createElement('div')
            quoteDiv.classList.add('quoteCard')

            const text =document.createElement('p')
            text.textContent=`"${quote.content}"`

            const author = document.createElement('p')
            author.textContent=`${quote.author}`
             
            
            const favoriteBtn = document.createElement('button')
            favoriteBtn.textContent = '⭐ Save' 
            favoriteBtn.addEventListener('click', () => {
                   alert(`Saved to Favorites: "${quote.content}"`)

                const favLi = document.createElement('li')
                favLi.textContent = `Quote: ${quote.content} Author: ${quote.author}`
                favorites.appendChild(favLi)
                favoriteBtn.classList.add('selected')
                console.log(response)
                })

                const readBtn = document.createElement('button')
                readBtn.textContent ='⋆.˚📚⋆.˚Read Later'
                readBtn.addEventListener('click', () => {
                   alert(`Saved to Read Later: "${quote.content}"`)

                   const readLi = document.createElement('li')
                   readLi.textContent =`Quote: ${quote.content} Author: ${quote.author}`
                   readLater.appendChild(readLi)
                   readBtn.classList.add('selected')

                   return response
                    
                })

            quoteDiv.appendChild(text)
            quoteDiv.appendChild(author)
            display.appendChild(quoteDiv)
            quoteDiv.appendChild(favoriteBtn)
            quoteDiv.appendChild(readBtn)
            
                    })
                }else{
                    display.innerText="No quotes found for that author"
                }
            }
          console.log(response)
        })
       
})
// ?display=${'response.results'}
// return fetch(`https://api.quotable.io/quotes?author${encodeURI(input.value)}?display=${'response.results[0]'}`)
//  display.innerText = (`Quote: ${response.results}
            // Author: ${response.results}`)


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



