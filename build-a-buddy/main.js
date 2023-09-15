import { getSong } from './scripts/bestSongsDB'

const allSong = getSong()

for (const singleSong of allSong) {
    console.log(singleSong)
}

import { SongList } from './scripts/songList'

const parentHTMLElement = document.querySelector(".song")


parentHTMLElement.innerHTML = SongList()
