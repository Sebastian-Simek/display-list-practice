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

export function renderComposer(composer) {
    const div = document.createElement('div');
    div.classList.add('composers');

    const h2 = document.createElement('h2');
    h2.textContent = composer.name;

    const p = document.createElement('p');
    p.textContent = `Era: ${composer.era}`;

    const ul = document.createElement('ul');
    ul.textContent = 'Hits:';

    for (let music of composer.hits) {
        const li = document.createElement('li');
        li.textContent = `${music.pieceName}: ${music.Classification}`;
        ul.append(li);
    }
    div.append(h2, p, ul);
    return div;
}

export function renderApple(apples) {
    const div = document.createElement('div');
    div.classList.add('apples');

    const h3 = document.createElement('h3');
    h3.textContent = apples.name;

    const p = document.createElement('p');
    p.textContent = apples.state;

    const ul = document.createElement('ul');
    ul.textContent = 'Tasting Notes:';

    for (let apple of apples.tastingNotes) {
        const li = document.createElement('li');
        li.textContent = apple;
        ul.append(li);
    }
    div.append(h3, p, ul);
    return div;
}