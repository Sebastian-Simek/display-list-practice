import { renderCats } from '../utils.js';
import { catArray } from '../cats.js';

const test = QUnit.test;

test('testing displaying cat', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="cats"><h2>Eddie</h2><img src="./assets/eddie.png" <p="">Eddie is .5 years old and has a cuteness factor of 8<p></p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderCats(catArray[0]);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
