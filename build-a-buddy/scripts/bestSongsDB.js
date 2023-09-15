const database = {
    songs:[
        {
            songName:"SITTING ON THE DOCK OF THE BAY",
            performer:"OTIS REDDING",
            songStyle:"R&B/SOUL",
        },
        {
            songName:"ALL ALONG THE WATCHTOWER",
            performer:"JIMI HENDRIX",
            songStyle:"HARD ROCK/PSYCHEDELIC ROCK",
        },
        {
            songName:"A CHANGE IS GONNA COME",
            performer:"SAM COOKE",
            songStyle:"SOUL",
        }
    ]
}
export const getSong = () => {
    return database.songs.map(copyOfSingleSongObject => ({...copyOfSingleSongObject}))
}   