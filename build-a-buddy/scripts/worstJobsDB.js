const database = {
    jobs:[
        {
            jobName:"NATIVE NEW YORKER",
            title:"BUS/DISHWASHER",
            reason:"Disliked it because of late nights and bad management"
        },
        {
            jobName:"EDDIE BAUER",
            title:"SALES ASSOCIATE",
            reason:"Got real good at pretending to talk to people. Dislikes headsets."
        },
        {
            jobName:"EVERGREEN STATE COLLEGE",
            title:"PARKING BOOTH ATTENDANT",
            reason:"Started at 5am. Had to play frogger to deal with 'personal' issues."
        }
    ]
}
export const getJob = () => {
    return database.jobs.map(copyOfSingleJobObject => ({...copyOfSingleJobObject}))
}   