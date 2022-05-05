import { renderCats, renderComposer } from '../utils.js';
import { catArray } from '../cats.js';
import { composersArray } from './composers.js';  



const test = QUnit.test;

// test('testing displaying cat', (expect) => {
//     //Arrange
//     // Set up your arguments and expectations
//     const expected = `<div class="cats"><h2>Eddie</h2><img src="./assets/eddie.png"><p>Eddie is .5 years old and has a cuteness factor of 8</p></div>`;
    
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const actual = renderCats(catArray[0]);

//     //Expect
//     // Make assertions about what is expected versus the actual result
//     expect.equal(actual.outerHTML, expected);
// });

test('testing composer display', (expect) => {
    const expected = `<div class="composers"><h2>J.S Bach</h2><p>Era: Baroque</p><ul>Hits:<li>Cello Suite in G Major: BWV 1007</li><li>Brandenburg Concerto No. 3: BWV 1048</li><li>Prelude No. 1 in C Major: BWV 846</li></ul></div>`;

    const actual = renderComposer(composersArray[0]);

    expect.equal(actual.outerHTML, expected);
});