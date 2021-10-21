export const zodiacList_div = (zodiac) => {
    return `
        <section class="zodiac-list-card">
            <div class="zodiac-name"><strong>Name:</strong>&nbsp; ${zodiac.name}</div>
            <div class="zodiac-mascot"><strong>Mascot:</strong>&nbsp; ${zodiac.mascot}</div>
            <div class="zodiac-date"><strong>Dates:</strong>&nbsp; ${zodiac.dates}</div>
            <div class="zodiac-element"><strong>Element:</strong>&nbsp; ${zodiac.element}</div>
            <div class="zodiac-animal"><strong>WV Animal:</strong>&nbsp; ${zodiac.wvAnimal}</div>
        </section>
    `
}