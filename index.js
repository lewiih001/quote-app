const text=document.getElementById("quote");
const author=document.getElementById("author");
const getPrevQuote = (indx) =>{
console.log(`${indx} `

    )
    
}
const getNewQuote = async () =>
{
    //api for showing quotes
    var url="https://type.fit/api/quotes";    
   //generating random quote from api
    const response=await fetch(url);
    console.log(typeof response);
    const allQuotes = await response.json();

    let indx = Math.floor(Math.random()*allQuotes.length);
    getPrevQuote(indx)

    let quote=allQuotes[indx].text;

    const auth=allQuotes[indx].author;

    if(auth==null)
    {
        author = "Anonymous";
    }

    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

}
getNewQuote();
getPrevQuote();