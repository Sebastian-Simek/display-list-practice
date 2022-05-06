import { catArray } from './cats.js';
import { renderComposer } from './utils.js';
import { renderCats } from './utils.js';
import { composersArray } from './composers.js';

const displayDiv = document.getElementById('cats');
const displayDiv2 = document.getElementById('composers');
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
