$(document).ready(function() {

    // All the words being filtered to 3 or more in length
    var validWords = commonWords.filter(word => word.length >= 3)

    console.log(validWords)


    // Setup for the game
    function setUp() {

        letters = 'abcdefghijklmnopqrstuvwxyz'
        lives = 10
        words = validWords
        messages = {
            win: 'You Win!',
            lose: 'You Suck!',
            guessed: 'You already put that idiot',
            validLetter: 'Put a letter from A-Z'
        }
    }

    // Choosing word and replacing it with underscores
    // gameWord = words[Math.floor(Math.random() * words.length)]
    gameWord = validWords[Math.floor(Math.random() * validWords.length)]

    $('#letters').html(gameWord.replace(/[a-z]/gi, '_ '))
    console.log(gameWord)

    // Variables for html, non-input
    var outcome = $('#outcome').html()
    var lives = $('#lives').html()
    var guessInput = $('#letter').html()

    lives.innerHTML = `You have ${lives} chance(s) left`
    outcome.innerHTML = ''

    
})



