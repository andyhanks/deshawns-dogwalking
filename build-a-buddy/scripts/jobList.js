import {getJob} from '../scripts/worstJobsDB'

export const JobList = () => {
    // Invoke the function that you imported from the database module
    const jobs = getJob()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="JobList">'

    // Create HTML representations of each fish here
    for (const singleJob of jobs) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="Job">
            <div class="Job__place>One of Colin's least favorite jobs: ${singleJob.jobName}" /></div>
            <div class="Job__name"> He was a ${singleJob.title} </div>
            <div class="Job__info"> Reason for leaving: ${singleJob.reason} </div>
   
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}