const arr = [1,2,[3,4,[5,6],7,[8,9]]]

const result = [];

function flatten(input){
    input.forEach(x=> {
        if (Array.isArray(x))
        {
            flatten(x);
        } else {
            result.push(x);
        }

    })
}

flatten(arr);

console.log(result);

`Problem 2

Flatten this array out : [1,2,[3,4,[5,6],7,[8,9]]]
Output should be [1,2,3,4,5,6,7,8,9]

You can ONLY use arr.push(), arr.concat() as library / array functions. Please don't use any other library or array functions.`
