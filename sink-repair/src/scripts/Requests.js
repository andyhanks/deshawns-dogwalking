
import { deleteRequest, getRequests , getPlumbers, sendCompletion} from "./dataAccess.js"

export const convertRequestToListElement = (request) => {
    const plumbers = getPlumbers()
 let html =
     `<li>
    ${request.description}

    <select class="plumbers" id="plumbers">
    <option value="">Choose</option>
    ${
        plumbers.map(
            plumber => {
                return `<option value="${request.id}--${plumber.id}">${plumber.name}</option>`
            }
        ).join("")
    }
</select>
    
    <button class="request__delete"
    id="request--${request.id}">
Delete
</button>
    </li>`
        return html
}
export const Requests = () => {
    const requests = getRequests()


    let html = `
        <ul>
            ${
                requests.map(convertRequestToListElement).join("")
            }
            
        </ul>
    `

    return html
}
const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})

mainContainer.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "plumbers") {
            const [requestId, plumberId] = event.target.value.split("--")
    
            /*
                This object should have 3 properties
                   1. requestId
                   2. plumberId
                   3. date_created
            */
                   const completion = {
                    serviceRequestId: parseInt(requestId),
                    plumberId: parseInt(plumberId),
                    date_completed: Date.now()
                 }

            /*
                Invoke the function that performs the POST request
                to the `completions` resource for your API. Send the
                completion object as a parameter.
             */
                 sendCompletion(completion)
        }
    }
)