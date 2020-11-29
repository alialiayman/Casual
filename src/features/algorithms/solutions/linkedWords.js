const { forEach } = require("lodash");

const algorithm = `// create a result string ==> result = ''
// Create lookup ==> new Map()
// Loop input array and populate lookup ==> lookup.set(input[i].Key, input[i].value)
// Identify head item -- not sure how. initialize output ==> output = LA
// identify next item - easy next = lookup.get('A') ==> output += next.value;
`;


let result = '';
const keyLookup = new Map();
const valueLookup = new Map();
const input = ["S>P", "P>A", "A>I", "I>N"];
input.forEach(element => {
    const elementParts = element.split('>')
    keyLookup.set(elementParts[0], { value: elementParts[1], origin: element });
    valueLookup.set(elementParts[1], { origin: element });
});

const firstElement = () => {

    for (let i = 0; i < input.length; i++) {
        const parts = input[i].split('>');
        const key = parts[0];
        if (!valueLookup.has(key)) {
            return keyLookup.get(key);
        }
    }
    return '';
}
// OUTPUT:  SPAIN
function solve(input) {

    if (input.length === 0) {
        return;
    }

    let nextElement = firstElement() // {value: 'P', origin: "S>P"} //Find element with Key not used as a value
    if (!nextElement) {
        return;
    }
    result = nextElement.origin.split('>')[0] + nextElement.value// SP
    while (true) {
        nextElement = keyLookup.get(nextElement.value);
        if (nextElement){
            result += nextElement.value;
        } else {
            break;
        }
    }
    console.log(result);
}

solve(input);

const problem = `You have an array of N strings.

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

const testCases = [['M>P', 'L>A', 'A>M']];
const method = () => { }
const linkedWords = {
    name: 'Linked Words',
    problem,
    algorithm,
    method,
    testCases
};

// export default linkedWords;