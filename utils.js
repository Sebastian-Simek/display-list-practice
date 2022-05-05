export function renderCats(booger) {
    
    const div = document.createElement('div');
    div.classList.add('cats');

    const h2 = document.createElement('h2');
    h2.textContent = booger.name;

    const img = document.createElement('img');
    img.src = booger.image;
    
    const p = document.createElement('p');
    p.textContent = `${booger.name} is ${booger.age} years old and has a cuteness factor of ${booger.cutenessFactor}`;
    
    div.append(h2, img, p);
    return div;
}