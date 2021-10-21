import { useZodiac } from "./ZodiacDataProvider.js"
import { zodiacList_div } from "./Zodiac.js"

export const zodiacList = () => {
    const contentElement = document.querySelector("#zodiac-list-container")
    const zodiacList_groupArray = useZodiac()

    let zodiacHTMLRepresentation = ""
    for (const zodiacList_singleObject of zodiacList_groupArray) {
        zodiacHTMLRepresentation += zodiacList_div(zodiacList_singleObject)
    }

    contentElement.innerHTML += `
        <div class="zodiac-heading">
            <h1>Zodiac List</h1>
        </div>
        <div class="zodiac-list">
            ${zodiacHTMLRepresentation}
        </div>
    `
}