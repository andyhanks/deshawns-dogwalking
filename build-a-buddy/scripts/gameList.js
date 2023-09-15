import {getGame} from '../scripts/bestGamesDB'

export const GameList = () => {
    // Invoke the function that you imported from the database module
    const games = getGame()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="GameList">'

    // Create HTML representations of each fish here
    for (const singleGame of games) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="Game">
            <div class="Game__name"> Game:${singleGame.gameName}</div>
            <div class="Game__name"> Developed by: ${singleGame.developer} </div>
            <div class="Game__info"> Is the best because: ${singleGame.reason} </div>
   
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}