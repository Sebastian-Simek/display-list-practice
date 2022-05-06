import { catArray } from './cats.js';
import { renderComposer, renderCats, renderApple } from './utils.js';
import { composersArray } from './composers.js';
import { appleArray } from './apples.js';

const displayDiv = document.getElementById('cats');
const displayDiv2 = document.getElementById('composers');
const displayDiv3 = document.getElementById('apples');
// let state


// set event listeners 
for (let cat of catArray) {
    const catOutput = renderCats(cat);
    displayDiv.append(catOutput);
}

for (let composer of composersArray) {
    const composerOutput = renderComposer(composer);
    displayDiv2.append(composerOutput);
}

for (let apple of appleArray) {
    const appleOutput = renderApple(apple);
    displayDiv3.append(appleOutput);
}
