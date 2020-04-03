const S = 'abcde'
const dict = ['a', 'b', 'cd', 'de'];
// output = [ 'a bc de' ]
const compinations = [[]];


function makeWords(input) {

    for (let i = 0; i < input.length ; i++) {
        if (i >0) compinations.push([]);
        for (let j = i; j < input.length; j++) {
            compinations[i].push(input.substring(i, j + 1))
        }
    }
}


makeWords('ayman');
console.log(compinations);
