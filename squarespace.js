// Odkazy na obrázky pro každou barvu
const images = {
    default: 'https://images.squarespace-cdn.com/content/65319686e6fb0c67c8ae528c/797e9f9e-7322-4df4-81a2-8fda187c45fd/X+DESKA+START.png?content-type=image%2Fpng',
    blue: 'https://images.squarespace-cdn.com/content/65319686e6fb0c67c8ae528c/e487fa9d-9a1c-4052-a029-75da112be6ac/X+DECK+BLUE.png?content-type=image%2Fpng',
    yellow: 'https://images.squarespace-cdn.com/content/65319686e6fb0c67c8ae528c/d879902c-5c2f-44a6-a9ac-20a365fa21f1/X+DECK+YELLOW.png?content-type=image%2Fpng',
    orange: 'https://images.squarespace-cdn.com/content/65319686e6fb0c67c8ae528c/f1ef33b9-2418-477a-ba7f-460710ba36e4/X+DECK+ORANGE.png?content-type=image%2Fpng',
    green: 'https://images.squarespace-cdn.com/content/65319686e6fb0c67c8ae528c/06279eac-bdd4-438b-805f-43b560d4ee50/X+DECK+GREEN.png?content-type=image%2Fpng'
};

// Změna obrázku při výběru barvy
function updateImage(color) {
    const imgElement = document.getElementById('deck-image');
    imgElement.src = images[color] || images.default;
}

// Kontrola, zda jsou všechna pole vyplněná
function checkFormComplete() {
    const radios = document.querySelectorAll('input[type="radio"]');
    let isComplete = Array.from(radios).some(radio => radio.checked);
    document.querySelector('.submit-btn').disabled = !isComplete;
}

// Odeslání formuláře
function submitForm() {
    let data = new FormData(document.getElementById('custom-form'));
    let params = new URLSearchParams(data).toString();
    fetch("mailto:ahajek20@gmail.com?" + params);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', (event) => {
            updateImage(event.target.value);
            checkFormComplete();
        });
    });
    document.getElementById('submit-btn').addEventListener('click', submitForm);
});
