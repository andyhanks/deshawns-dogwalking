import { getCities, getWalkerCities, getWalkers } from "./database.js" //left over
const walkers = getWalkers() // left over
const cities = getCities()
const  walkerCities = getWalkerCities()

// The function need the walker information, so define a parameter
const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
    const assignments = []
    // Iterate the array value of walkerCities
    for (let assignment of walkerCities) {
    // Check if the primary key of the walker equals the foreign key on the assignment
    if (assignment.walkerId === walker.id) {
    // If it does, add the current object to the array of assignments
        assignments.push(assignment)
    // After the loop is done, return the assignments array
    return assignments
}
}
}
 const assignedCityNames = (assignments) => {
    let cityNames = [];
    for (const assignment of assignments) {
        for (const city of cities) {
            if (assignment.cityId === city.id) {
             cityNames.push(city.name)
            }
        }
    }
    cityNamesJoined = cityNames.join(" and ")
    return cityNamesJoined
}


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li id="city--${city.id}">${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}
//  document.addEventListener(
//     "click", 
// (e) => {
//     for (const walker of walkers) {
//         if (walker.id === parseInt(walker)) {
//             const assignments = filterWalkerCitiesByWalker(walker.name)
//             const cities = assignedCityNames(assignments)
    
//             window.alert(`${walker.name} services ${cities}`)
//         }
//     }
// })
//  document.addEventListener(
//     "click",  
//     (clickEvent) => {

//         const itemClicked = clickEvent.target
//         for (const city of cities) {   
//         //const cityByWalker = filterWalkerCitiesByWalker(city)
//        // const citiesNames = assignedCityNames(cityByWalker)
//         if (itemClicked.id.startsWith("city")) {
//             const [,cityId] = itemClicked.id.split("--")
//             for (const walkerCity of walkerCities) {
//                 if (cityId === walkerCity.cityId) {
//                     const thisWalker = walkerCity.walkerId
//                     for (const walker of walkers) {
//                         if (walker.id === thisWalker) {
//                             window.alert(`${walker.name} services ${city.name}`)
//                         }
//                     }
//                 }
//             }
//         }
//     }
// })     This bit is not working
