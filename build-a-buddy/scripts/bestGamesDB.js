const database = {
    games:[
        {
            gameName:"NBA 2K SERIES",
            developer:"EA",
            reason:"Is an excellent way to play basketball without subjecting yourself to injury."
        },
        {
            gameName:"NBA JAM",
            developer:"MIDWAY",
            reason:"Balls of fire!"
        },
        {
            gameName:"GTA SERIES",
            developer:"ROCKSTAR",
            reason:"A nice relaxing driving sim."
        }
    ]
}
export const getGame = () => {
    return database.games.map(copyOfSingleGameObject => ({...copyOfSingleGameObject}))
}   