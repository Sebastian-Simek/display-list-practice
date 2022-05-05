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

export function renderComposer(booger) {
    const div = document.createElement('div');
    div.classList.add('composers');

    const h2 = document.createElement('h2');
    h2.textContent = booger.name;

    const p = document.createElement('p');
    p.textContent = `Era: ${booger.era}`;

    const ul = document.createElement('ul');
    ul.textContent = 'Hits';

    const li = document.createElement('li');
    for (let music of booger.hits) {
        li.textContent = music.pieceName;
        ul.append(li);
    }


    div.append(h2, p, ul);
    return div;
}