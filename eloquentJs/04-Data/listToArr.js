function arrayToList(arr) {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--){
       list = {value: arr[i], rest: list};
    }
    return list;
}

// The second portion of this for is the condition to be tested to see if another iteration of the loop should be carried out. When a single value is used (node here), it simply evaluates the variable and converts it to a Boolean. If the result is true, the loop goes again. if false it doesn't.

// function listToArray(list) {
//     let array = [];
//     for (let node = list; node; node = node.rest) {
//         array.push(node.value);
//     }
//     return array;
// }


function listToArray(list) {
let array = [];
for (let i = list;i; i = i.rest) {
    array.push(i.value);
}

return array;             
}
  
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]

function prepend(value, list) {
    return {value, rest: list};
}
  
function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20