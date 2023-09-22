import { getWalkers, getWalkerCities } from "./database.js"
import { CityList } from "./CityList.js"
const cities = CityList()
const walkers = getWalkers()
const walkerCities = getWalkerCities()
// First, define a function that will get all objects in the walkerCities array that are for the walker that was clicked on. It should return an array of all matching objects.

// Then, define a function that take in the array of matching objects, and use the cityId property on each one to find the matching city name. It should return a string containing all the city names.\/\/\/\\//

document.addEventListener(
    "click", 
    (clickEvent) => {

        const itemClicked = clickEvent.target


        if (itemClicked.id.startsWith("walker")) {


            const [,walkerId] = itemClicked.id.split("--")

            let matchingWalker = null
            for (const walker of walkers) {
               

                if (parseInt(walkerId) === walker.id) {
                    matchingWalker = walker
                }
            }

            let matchingWalkerCity = null
            for (const walkerCity of walkerCities) {
                if(walkerCity.walkerId === matchingWalker.id) {
                    matchingWalkerCity = walkerCity
                }
                window.alert(`${matchingWalker.name} services ${matchingCity.name} `)
            }
        }
    } 
)


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}

