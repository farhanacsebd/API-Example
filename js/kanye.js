const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}
const displayQuotes = quote => {
    const dislayElement = document.getElementById('quote');
    dislayElement.innerText = quote.quote;
}
