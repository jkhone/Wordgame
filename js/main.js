$(document).ready(function() {
    // All the words being filtered to 3 or more in length
    var validWords = commonWords.filter(word => word.length >= 3)
    console.log(validWords)
    var letters = 'abcdefghijklmnopqrstuvwxyz'
    var lives = 10
    var gameWord = validWords[Math.floor(Math.random() * validWords.length)]
    var letter = gameWord.split('')
    var underScore = letter.map(l => "_")
    var buttons = ''
    var score = 0
    console.log(gameWord)
    letters.split('').forEach(l => {
        buttons += `<button>${l.toUpperCase()}</button>`
    })
    $('#buttons').html(buttons)
    $("#letters").html(underScore.join(""))
    
    man.innerHTML =`You have ${lives} chance(s) left`
    outcome.innerHTML = ''

    // Setup function for the game to restart
    function setUp() {
        // Choosing word and replacing it with underscores
        gameWord = validWords[Math.floor(Math.random() * validWords.length)]
        var letter = gameWord.split('')
        var underScore = letter.map(l => "_")
        console.log(underScore)

        $("#letters").html(underScore.join(""))
        console.log(gameWord)
        lives = 10
        man.innerHTML =`You have ${lives} chance(s) left`
        outcome.innerHTML = ''
        $('#buttons').html(buttons).show()
        $('#buttons').attr("enabled", true)
        score = 0
    }


    // Restart button
    document.getElementById("restart").onclick = setUp
    
    // Prevent default button, submitting actual answers
    $('#buttons').on('click', 'button', function(e) {
        e.preventDefault()
        var guess = $(this).html().toLowerCase()
        $(this).attr("disabled", true)
        if(letter.includes(guess)){
            underScore = underScore.map((u, i) =>{
                if (u === '_'){
                    if(letter[i] === (guess)){
                        return letter[i]
                    }else{
                        return "_"
                    }
                }else {
                    return u
                }
            })
            $("#letters").html(underScore.join(" "))
            outcome.innerHTML = 'Keep Going!'
            score += 1
            console.log(guess)
            console.log(letter)
            console.log(score)
        } else {
            lives--
            man.innerHTML =`You have ${lives} chance(s) left`
            outcome.innerHTML = 'You lost a life!'
            console.log(guess)
            console.log(letter)
        }
        if (lives === 0) {
            outcome.innerHTML = 'You lose!'
        }
        if (score === gameWord.length) {
            outcome.innerHTML = 'You win!'
            $("#letters").html(letter.join(''))
            $('#buttons').html(buttons).hide()
        }
    })
})



