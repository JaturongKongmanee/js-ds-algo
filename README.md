# js-ds-algo

## Sorting - *sort()* and *reverse()*
```javascript
// sorts the elements of an array in place and returns the sorted array.
let a = ['banana', 'cherry', 'apple'];
let b = a.sort();

console.log(b); // [ 'apple', 'banana', 'cherry' ]
console.log(a); // [ 'apple', 'banana', 'cherry' ]
```
  
```javascript
let c = [1111, 4, 222, 33];
// alphabetic order
console.log(c.sort()); // [ 1111, 222, 33, 4 ]
// numerical order
console.log(c.sort((a, b) => a - b)); // [ 4, 33, 222, 1111 ]
// reverse numerical order
console.log(c.sort((a, b) => b - a)); // [ 1111, 222, 33, 4 ]
```

```javascript
let d = ['ant', 'Bug', 'cat', 'Dog'];
// case-sensitive sort
console.log(d.sort()); // [ 'Bug', 'Dog', 'ant', 'cat' ]

const caseInsensitiveSort = (s, t) => {
  let a = s.toLowerCase();
  let b = t.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

console.log(d.sort(caseInsensitiveSort)); // [ 'ant', 'Bug', 'cat', 'Dog' ]
```

```javascript
let m = [2, 5, 6];
let n = [4444, 333, 22, 1];
console.log(m.reverse()); // [ 6, 5, 2 ]
console.log(n.sort()); // [ 1, 22, 333, 4444 ]
console.log(n.reverse()); // [ 4444, 333, 22, 1 ]

let z = ['ant', 'Bug', 'cat', 'Dog'];
console.log(z.reverse(caseInsensitiveSort)); // [ 'Dog', 'cat', 'Bug', 'ant' ]
```
 

## Searching - *indexOf*, *lastIndexOf()*, and *includes()*
```javascript
let s = ['Dill', 'Smile', 'Dill', 'Jon Doe'];
console.log(s.indexOf('Dill')); // 0
console.log(s.lastIndexOf('Dill')); // 2
console.log(s.indexOf('God')); // -1 => no element
console.log(s.indexOf('Dill', 1)); // 2: searching postion starts at index 1

console.log(s.includes('Smith')); // false
console.log(s.includes('Smile')); // true
```

## Basic Array Fucntion - *fill()*
```javascript
let k = new Array(5);
console.log(k); // [ <5 empty items> ]
console.log(k.fill(0)); // [ 0, 0, 0, 0, 0 ]
console.log(k.fill(7, 1, 3)); // [ 0, 7, 7, 0, 0 ]
```
