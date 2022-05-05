import { catArray } from './cats.js';
import { renderCats } from './utils.js';

const displayDiv = document.getElementById('cats');
const displayDiv2 = document.getElementById('composers');
// let state


// set event listeners 
for (let cat of catArray) {
    const catOutput = renderCats(cat);
    displayDiv.append(catOutput);
}
