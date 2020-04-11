
function method(input, result) {
    input.forEach(x => {
        if (Array.isArray(x)) {
            method(x, result);
        } else {
            if (!result){
                result = [];
            }
            result.push(x);
        }
    });
    return result;
}

const problem = `Flatten this array out : [1,2,[3,4,[5,6],7,[8,9]]]
Output should be [1,2,3,4,5,6,7,8,9]

You can ONLY use arr.push(), arr.concat() as library / array functions. Please don't use any other library or array functions.`

const algorithm = ``;

const testCases = [[1,2,[3,4,[5,6],7,[8,9]]]];
const flatten = {
    name: 'Flatten Array',
    problem,
    algorithm,
    method,
    testCases
};

export default flatten;