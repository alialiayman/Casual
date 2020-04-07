import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const LinkedWords = () => {
    return (
        <React.Fragment>

       
        <ExpansionPanel expanded>
            <ExpansionPanelSummary>
                <Typography >Solution</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>


            </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
            <ExpansionPanelSummary>
                <Typography >Problem</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>{problem}</Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </React.Fragment>
    )
};

export default LinkedWords;

const randWords = ['M>P', 'L>A', 'A>M'];
const result = [];


// create a result array and add first item into it, splitt into two items
// Loop input array from 0 to end with index
// split array[index] into head and tail
// find head and tail in result if head found, then add the tail after the head, remove the item from the input array
//  if tail found, then add the head before the found 
// If non found skip to next item


function makeWord(input) {

    if (input.length == 0) {
        return;
    }

    if (result.length == 0) {
        result.push(input[0][0]);
        result.push(input[0][2]);
        input.shift();
    };

    while (input.length > 0) {
        const inputCopy = [...input];
        inputCopy.forEach(x => {
            if (processEntry(x)) {
                input.splice(input.indexOf(x), 1);
            }
        })
    }

}

function processEntry(item) {
    const headIndex = result.findIndex(x => x == item[0]);
    if (headIndex > 0 && headIndex < result.length - 1) {
        result.splice(headIndex + 1, 0, item[2]);
        return true;
    } else if (headIndex == result.length - 1) {
        result.push(item[2]);
        return true;
    }

    const tailIndex = result.findIndex(x => x == item[2]);
    if (tailIndex > -1 && tailIndex < result.length - 1) {
        result.splice(tailIndex, 0, item[0]);
        return true;
    }
    return false;
}

makeWord(randWords);
console.log(result.join(''));

const problem =
    `Problem 3

You have an array of N strings.

Eg: [“S>P”,”P>A”,”A>I”,”I>N”]

You need to combine these strings in an array to form a word.

OUTPUT:  SPAIN

Eg 2 : [“E>N”, “P>E”]

Output: PEN

Eg 3: [“M>P”,”L>A”,”A>M”]

Output: LAMP

Note:

The strings in an array can be in any random order.
Eg: [“E>N”, “P>E”] -> PEN
Assume no letter in any word is repeated (You will never have two same letters in a word in any of the test cases)
`