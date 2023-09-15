import {getSong} from '../scripts/bestSongsDB'

export const SongList = () => {
    // Invoke the function that you imported from the database module
    const songs = getSong()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="SongList">'

    // Create HTML representations of each fish here
    for (const singleSong of songs) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="Song">
            <div class="Song__name"> Song Title: ${singleSong.songName} </div>
            <div class="Song__performer"> As performed by: ${singleSong.performer} </div>
            <div class="Song__style"> In the style of: ${singleSong.style} </div>
   
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}