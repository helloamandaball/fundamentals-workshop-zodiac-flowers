export const flowersList_div = (flowers) => {
    return `
        <section class="flowers-list-card">
            <div class="flowers-species"><strong>Species:</strong>&nbsp; ${flowers.species}</div>
            <div class="flowers-name"><strong>Name:</strong>&nbsp; ${flowers.commonName}</div>
            <div class="flowers-fatal"><strong>Fatal:</strong>&nbsp; ${flowers.fatal}</div>
            <div class="flowers-antidote"><strong>Antidote:</strong>&nbsp; ${flowers.antidote}</div>
        </section>
    `
}
