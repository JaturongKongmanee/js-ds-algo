# js-ds-algo

## What is a
<details>
  <summary><b>Closures</b></summary>
  
| **What**        | **When**          |
| :------------- | :------------- | 
| **Closures** - a function defined within another function. The inner function has access to the outer function’s variables and parameters. | =>`Provides object data hiding and encapsulation.`<br>=>`Function Factories` | 

  - **Example 1:** `Data hiding and encapsulation`
  ```javascript
  var makeCounter = function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
    return {
      increment: function() {
        changeBy(1);
      },

      decrement: function() {
        changeBy(-1);
      },

      value: function() {
        return privateCounter;
      }
    }
  };

  var counter1 = makeCounter();
  var counter2 = makeCounter();

  alert(counter1.value());  // 0.

  counter1.increment();
  counter1.increment();
  alert(counter1.value()); // 2.

  counter1.decrement();
  alert(counter1.value()); // 1.
  alert(counter2.value()); // 0.
  ```
  
  - **Example 2:** `Function Factories`
  ```javascript
  function makeAdder(x) {
    return function(y) {
      return x + y;
    };
  }

  var add5 = makeAdder(5);
  var add10 = makeAdder(10);

  console.log(add5(2));  // 7
  console.log(add10(2)); // 12
  ```
  - Reference
    - https://medium.com/@dis_is_patrick/practical-uses-for-closures-c65640ae7304
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
    
</details>  
  
<details>
  <summary><b>Behavior Driven Development (BDD)</b></summary>
  
| **What**        | **When**          |
| :------------- | :------------- | 
| **BDD** - is a guidance in software development.The flow is as follows:<br><br>1. Write the initial spec, then write tests for the basic functionality<br>2. Initially implement the function<br>3. Run the tests<br>4. Refine the implementation to make it works<br>5. Add more use cases, write more tests<br>6. Repeat 3 - 5 until the functionality is ready. | Start to End of the whole project | 

  - **To clarify the problem specification with these ***Edge Cases*****
    - `Empty input`, `null`, `undefined`, `input types`
    - `Negative number`
    - `Array with 1 or 2 elements`
    - `Range of inputs`
    - `Missing arguments`
    - `Duplicated elements`
    - `Sorted` in `ascending`, or `descending`
      
      
  - **Example 1:**
    - **pow()** function
    ```javascript
    function pow(x, n) {
      if (n < 0 || Math.round(n) != n) {
        return NaN;
      }

      let result = 1;

      for (let i = 0; i < n; i++) {
        result *= x;
      }

      return result;
    }
    ```
    
    - **test with specifications**
    ```javascript
    let Mocha = require('mocha');
    let assert = require('assert');
    let mocha = new Mocha()

    mocha.suite.emit('pre-require', this, 'solution', mocha)

    describe('pow', function() {
      it('2 raised to power 3 is 8', function() {
        assert.equal(pow(2, 3), 8);
      });

      it('3 raised to power 3 is 27', function() {
        assert.equal(pow(3, 3), 27);
      });

      it('the result is NaN for a negative n', function() {
        assert.strictEqual(pow(2, -1), NaN);
      });

      it('the result is NaN for a non-integer', function() {
        assert.strictEqual(pow(2, 1.5), NaN);
      });
    });


    mocha.run();
    ```
    - **Output example**
    ```javascript
    pow
    ✓ 2 raised to power 3 is 8
    ✓ 3 raised to power 3 is 27
    ✓ the result is NaN for a negative n
    ✓ the result is NaN for a non-integer


    4 passing (7ms)
    ```
    
    - **Other assertions**
    ```javascript
    assert.deepEqual(obj1, obg2) - check two objects
    assert.strictEqual(val1, val2) - check strict equality `val1 === val2`
    assert.isTrue(value) - check if `value === true`
    assert.isFalse(value) - check if `value === false`
    ```

</details>
  
<details>
  <summary><b>Unit Tests vs. Integration Tests vs. Functional Tests</b></summary>
  
  | **Dos.** |
  | ------------- |
  | **Unit Tests** - ensure that individual components (a method/function) of the app work as expected. |
  | **Integration Tests** - ensure that these individual components of an application work together as expected. Assertions may test component API, UI, or side-effects (such as database I/O, logging, etc…)|
  | **Functional Tests** - ensure that the app works as expected from the user’s perspective. Assertions primarily test the user interface.|
  
</details>
  
 ---

## Sorting an array
  - `sort()` - sorts the elements of an array IN PLACE (mutate) and RETURN THE SORTED ARRAY.
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
  
  - `reverse()` - reverses the elements of an array IN PLACE (mutate) and RETURN THE SORTED ARRAY.
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
  
  ## Object
  <details>
    <summary><b>Fundamental operators</b></summary>
  
    - `obj.property` - dot notation
    - `obj["property"]` - square brackets notation
    - `obj[varWithKey]` - take the key from a variable
    - `delete obj.property` - to delete a property
    - `"key" in obj` - to check if a property with the given key exists
    - `for (let key in obj)` - to iterate over an object
    - `Object.assign()` - to make a real copy (clone)
    ```javascript
      let user = {
      name: "Dill",
      sizes: {
        height: 5.7,
        weight: 120
      }
    }

    let user2 = {
      name: "Smile",
      sizes: {
        height: 5.4,
        weight: 120
      }
    }

    let clone = Object.assign({}, user);

    console.log(user === clone) // false
    console.log(user.sizes === clone.sizes) // true

    let clone2 = Object.assign({}, [user, user2])
    console.log(clone2) 
    /* {
          0: {
            name: "Dill",
            sizes: { ... }
          },
          1: {
            name: "Smile",
            sizes: { ... }
          }
        }*/
    ```
  </details>
