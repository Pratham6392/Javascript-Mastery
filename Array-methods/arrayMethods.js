// Add/remove items

// We already know methods that add and remove items from the beginning or the end:

//     arr.push(...items) – adds items to the end,
//     arr.pop() – extracts an item from the end,
//     arr.shift() – extracts an item from the beginning,
//     arr.unshift(...items) – adds items to the beginning.

let items = ['item1', 'item2', 'item3', 'item4', 'item5'];
items.unshift('item0');
console.log(items); // ['item0', 'item1', 'item2', 'item3', 'item4', 'item5']
items.unshift('raman','shyam');
console.log(items); // ['raman', 'shyam', 'item0', 'item1', 'item2', 'item3', 'item4', 'item5']
items.shift('raman');
console.log(items); // ['shyam', 'item0', 'item1', 'item2', 'item3', 'item4', 'item5']

// The arr.splice method is a Swiss army knife for arrays. It can do everything: insert, remove and replace elements.

// The syntax is:

// arr.splice(start[, deleteCount, elem1, ..., elemN])

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", "dance");

alert( arr ) // now ["Let's", "dance", "right", "now"]

let arr2 = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr2.splice(0, 2);

alert( removed ); // "I", "study" <-- array of removed elements

// The splice method is also able to insert the elements without any removals. For that, we need to set deleteCount to 0:

let arr3 = ["I", "study", "JavaScript"];

// from index 2
// delete 0
// then insert "complex" and "language"
arr3.splice(2, 0, "complex", "language");

alert( arr3 ); // "I", "study", "complex", "language", "JavaScript"






// slice

// The method arr.slice is much simpler than the similar-looking arr.splice.

// The syntax is:

// arr.slice([start], [end])

// It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.

// It’s similar to a string method str.slice, but instead of substrings, it makes subarrays.

// For instance:

let arr4 = ["t", "e", "s", "t"];

alert( arr4.slice(1, 3) ); // e,s (copy from 1 to 3)

alert( arr4.slice(-2) ); // s,t (copy from -2 till the end)

// We can also call it without arguments: arr.slice() creates a copy of arr. That’s often used to obtain a copy for further transformations that should not affect the original array.




//inderOF, lastIndexOf, includes
let arr5 = [1, 0, false];

alert( arr5.indexOf(0) ); // 1
alert( arr5.indexOf(false) ); // 2
alert( arr5.indexOf(null) ); // -1

alert( arr5.includes(1) ); // true
