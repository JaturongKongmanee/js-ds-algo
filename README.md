# js-ds-algo

## Sorting an array
  - `sort()`
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
  - `reverse()`
  ```javascript
  let m = [2, 5, 6];
  let n = [4444, 333, 22, 1];
  console.log(m.reverse()); // [ 6, 5, 2 ]
  console.log(n.sort()); // [ 1, 22, 333, 4444 ]
  console.log(n.reverse()); // [ 4444, 333, 22, 1 ]

  let z = ['ant', 'Bug', 'cat', 'Dog'];
  console.log(z.reverse(caseInsensitiveSort)); // [ 'Dog', 'cat', 'Bug', 'ant' ]
  ```
 

## Searching an array
  - `indexOf`
  - `lastIndexOf(`
  - `includes()`
  ```javascript
  let s = ['Dill', 'Smile', 'Dill', 'Jon Doe'];
  console.log(s.indexOf('Dill')); // 0
  console.log(s.indexOf('God')); // -1 => no element
  console.log(s.indexOf('Dill', 1)); // 2: searching postion starts at index 1
  
  console.log(s.lastIndexOf('Dill')); // 2
  
  console.log(s.includes('Smith')); // false
  console.log(s.includes('Smile')); // true
  ```

## Basic Array Fucntion 
- **Initiate an array:**
  - `fill()`
  ```javascript
  let k = new Array(5);
  console.log(k); // [ <5 empty items> ]
  console.log(k.fill(0)); // [ 0, 0, 0, 0, 0 ]
  console.log(k.fill(7, 1, 3)); // [ 0, 7, 7, 0, 0 ]
  ```

- **Mutating an array:** 
  - `push()`
  ```javascript
  // Insert an element at the end
  const array = [1, 2, 3, 4]
  array.push(10) // 5 (returns the length of the new array)
  // array = [1, 2, 3, 4, 10]
  ```
  
  - `pop()`
  ```javascript
  // Remove an element from the end
  const array = [1, 2, 3 , 4]
  array.pop() // 4 (pop returns the element removed)
  // array = [1, 2, 3]
  ```
  
  - `unshift()`
  ```javascript
  // Inserts an element in the beginning
  const array = [1, 2, 3, 4]
  array.unshift(9, 10) // 6 returns the length of new array)
  // array = [9, 10, 1, 2, 3, 4] 
  ```
  
  - `shift()`
  ```javascript
  // Remove first element
  const array = [1, 2, 3, 4]
  array.shift() // 1(returns the removed element)
  // array = [2, 3, 4]
  ```

- **Iterating an array:**  NOT MUTATE the original array BUT RETURN A NEW ARRAY.
  - `forEach()` -> params: {element, index, array}
  ```javascript
  // Iterates an array
  const array = [1, 2, 3, 4]
  array.forEach((elemnt, index) => {
     console.log(`Element ${element} at index ${index}`)
  }
  ```
  
  - `filter()`
  ```javascript
  // Iterates an array -> result is a filtered array
  const array = [1, 2, 3, 4]
  const filteredArray = array.filter(element => element % 2)
  // array = [1, 2, 3, 4]
  // filteredArray = [1, 3]
  ```
  
  - `map()`
  ```javascript
  // Iterates an array -> result is a filtered array
  const array = [1, 2, 3, 4]
  const mapArray = array.map(element => element * 2)
  // array = [1, 2, 3, 4]
  // mapArray = [2, 4, 6, 8]
  ```
  
  - `reduce()` -> params: {accumulator, currentElement, index, array}
  ```javascript
  // Reduces an array into a single value 
  const array = [1, 2, 3, 4]
  const result = array.reduce((accumulator, current) => (accumulator + current), 10)
  // array = [1, 2, 3, 4]
  // result = 20
  ```
  
  
- **Manipulating an array:**  NOT MUTAUE the original array BUT RETURN A NEW ARRAY.
  - `slice()` -> params: {startIndex, endIndex}
  ```javascript
  // Returns desired elements in a new array
  const array = [1, 2, 3, 4]
  const slicedArray = array.slice(0, 2)
  // array = [1, 2, 3, 4]
  // slicedArray = [1, 2]
  ```
  
  - `concat()`
  ```javascript
  // Append one or more arrays with given array
  const array = [1, 2, 3, 4]
  const concatArray = array.concat([5, 6, 7, 8])
  // array = [1, 2, 3, 4]
  // concatArray = [1, 2, 3, 4, 5, 6, 7, 8]
  ```
