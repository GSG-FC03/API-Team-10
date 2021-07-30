const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const btn = document.querySelector('.btn')

btn.addEventListener("click", getQuote )


function getQuote(){
    fetch("https://api.quotable.io/random")
    .then((response)=>{
        if(response.status !== 200){
            console.log(`Looks like there was aproblem. status code : ${response.status}`)
        }else{
              return response.json()
        }
    })
    .then(data =>{
        quote.innerHTML = data.content;
        author.innerHTML= data.author;
    })
}
