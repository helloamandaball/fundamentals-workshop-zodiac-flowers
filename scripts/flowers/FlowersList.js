import { useFlowers } from "./flowersDataProvider.js"
import { flowersList_div } from "./Flowers.js"

export const flowersList = () => {
    const contentElement = document.querySelector("#flowers-list-container")
    const flowersList_groupArray = useFlowers()

    let flowersHTMLRepresentation = ""
    for (const flowersList_singleObject of flowersList_groupArray) {
        flowersHTMLRepresentation += flowersList_div(flowersList_singleObject)
    }

    contentElement.innerHTML += `
        <div class="flowers-heading">
            <h1>Flowers List</h1>
        </div>
        <div class="flowers-list">
            ${flowersHTMLRepresentation}
        </div>
    `
}