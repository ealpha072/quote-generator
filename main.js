(function() {

    const quotes = [{
            quote: '\"The purpose of our lives is to be happy\"',
            author: '\-Dalai Lama'
        },
        {
            quote: '\"Life is what happens when you are busy making other plans\"',
            author: '\-John Lennon'
        },
        {
            quote: '\"Get busy living or get busy dying\"',
            author: '\-Stephen King'
        },
        {
            quote: '\"You only live once, but if you do it right, once is enough\"',
            author: '\-Mae West'
        },
        {
            quote: '\"If you want to live a happy life, tie it to a goal, not to people or things\"',
            author: '\-Albert Einstein'
        }
    ]

    //constants
    const para = document.getElementById('quoteHolder');
    const button = document.querySelector('button');

    button.addEventListener('click', changeQuote)

    function changeQuote() {
        let randomQuotes = Math.floor(Math.random() * quotes.length);
        para.textContent = quotes[randomQuotes].quote;
        document.getElementById('author').textContent = quotes[randomQuotes].author;
    }

})()