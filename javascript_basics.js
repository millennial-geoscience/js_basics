function createDict(nums){
    memory = {}
    for(let i=0; i < nums.length; i++){
        memory[nums[i]] = i
        console.log("hello");
    }
    console.log(memory)
};

function ifEqualsThree(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 3) {
            console.log("Three found.");  // Log "Ta" when 3 is found
            return nums[i];     // Return the value 3
        }
    }
    return null;
}

// nums = [1, 2, 3]
// b = ifEqualsThree(nums)
// if (b);{
//    console.log(b);  // Outputs "Ta" and 3
// } optional curley brackets when single condition

function doubleforloop(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null;  // Return null if no pair is found
}

// let answer = doubleforloop([1, 2, 3, 4, 5, 6], 99);
// if (answer) {
//     console.log(answer);  // Will not execute since answer is null
// } else {
//     console.log(false);    // Outputs false
// }

function ternaryFirst(nums,cutoff) {
    first = null
    for (let i=0; i < nums.length; i++) {
        first = nums[i] < cutoff ? nums[i] : null
        return first
    }
}
// console.log(  ternaryFirst([1,2,3,4,5], 2) )

function multipleTernary(nums) {
    let first = null; // Declare first in the outer scope
    for (let i = 0; i < nums.length; i++) {
        first = nums[i] > 4 ? nums[i] : (nums[i] > 3 ? -1 : 0);
        console.log(first)
    }
    return first; // Return the result
}
// multipleTernary([1,2,3,4,5])


function argMin(arr, val) {
    let best_idx = null;
    let closest= Infinity;
    for (let i = 0; i < arr.length; i++) {
        closest = (Math.abs(arr[i] - val) < Math.abs( closest - val)) ? arr[i] : closest
        best_idx = (Math.abs(arr[i] - val) <= Math.abs(closest - val)) ? i : best_idx
    }
    return ["Closest value", closest, 'Best index', best_idx]
}
console.log( argMin([1,2,3,4,5], 3) )


// Arrays
function sineWave(frequency, amplitude, sampleRate, duration) {
    const totalSamples = sampleRate * duration;
    const sineWave = new Array(totalSamples);

    for (let i = 0; i < totalSamples; i++) {
        const t = i / sampleRate; // in seconds
        sineWave[i] = amplitude * Math.sin(2 * Math.PI * frequency * t)
    }
    return sineWave;
}

const frequency = 2; // Frequency in Hz
const amplitude = 1;
const sampleRate = 100; // sample rate hz (s/second)
const duration = 2; // secs

const sineWaveArray = sineWave(frequency, amplitude, sampleRate, duration);
console.log(sineWaveArray.slice(0, 20));

// Operators

// JavaScript Operators Cheatsheet

// 1. Assignment Operator
// =: Assigns a value to a variable.
// let a = 10; // a is now 10

// 2. Arithmetic Operators
// +: Addition
// let sum = a + b; // sum of a and b
// -: Subtraction
// let difference = a - b; // difference of a and b
// *: Multiplication
// let product = a * b; // product of a and b
// /: Division
// let quotient = a / b; // quotient of a divided by b
// %: Modulus (remainder)
// let remainder = a % b; // remainder of a divided by b
// ++: Increment (adds 1)
// let increment = ++a; // increases a by 1
// --: Decrement (subtracts 1)
// let decrement = --b; // decreases b by 1

// 3. Comparison Operators
// ==: Equality (coerces types)
// a == b; // true if a is equal to b
// ===: Strict equality (does not coerce types)
// a === b; // true if a is equal to b and same type
// !=: Inequality (coerces types)
// a != b; // true if a is not equal to b
// !==: Strict inequality
// a !== b; // true if a is not equal to b or different type
// >: Greater than
// a > b; // true if a is greater than b
// <: Less than
// a < b; // true if a is less than b
// >=: Greater than or equal to
// a >= b; // true if a is greater than or equal to b
// <=: Less than or equal to
// a <= b; // true if a is less than or equal to b

// 4. Logical Operators
// &&: Logical AND
// x && y; // true if both x and y are true
// ||: Logical OR
// x || y; // true if at least one of x or y is true
// !: Logical NOT
// !x; // true if x is false

// 5. Bitwise Operators
// &: Bitwise AND
// bitA & bitB; // compares bits of bitA and bitB
// |: Bitwise OR
// bitA | bitB; // combines bits of bitA and bitB
// ^: Bitwise XOR
// bitA ^ bitB; // true if bits are different
// ~: Bitwise NOT
// ~bitA; // inverts bits of bitA
// <<: Left Shift
// bitA << 1; // shifts bits of bitA to the left
// >>: Right Shift
// bitA >> 1; // shifts bits of bitA to the right

// 6. Ternary Operator
// ?: Ternary operator for conditional expressions
// let result = (condition) ? valueIfTrue : valueIfFalse;

// 7. Nullish Coalescing Operator
// ?? : Returns the right-hand operand when the left-hand operand is null or undefined.
// let value = x ?? y; // value is x if x is not null/undefined, otherwise y




// JavaScript Array Methods Cheatsheet

// 1. Array Creation
// []: Creates a new array.
// let arr = []; // Creates an empty array

// 2. Adding Elements
// .push(): Adds one or more elements to the end of an array.
// arr.push(1); // Adds 1 to the end of arr

// .unshift(): Adds one or more elements to the beginning of an array.
// arr.unshift(0); // Adds 0 to the start of arr

// 3. Removing Elements
// .pop(): Removes the last element from an array and returns it.
// let last = arr.pop(); // Removes the last element from arr

// .shift(): Removes the first element from an array and returns it.
// let first = arr.shift(); // Removes the first element from arr

// 4. Accessing Elements
// []: Accesses an element by index.
// let element = arr[0]; // Gets the first element of arr

// 5. Finding Elements
// .indexOf(): Returns the first index at which a given element can be found.
// let index = arr.indexOf(1); // Finds the index of the element 1

// .includes(): Determines whether an array includes a certain value.
// let exists = arr.includes(1); // true if 1 is in arr

// 6. Iterating Over Elements
// .forEach(): Executes a provided function once for each array element.
// arr.forEach((item) => { console.log(item); }); // Logs each element

// 7. Mapping Elements
// .map(): Creates a new array with the results of calling a provided function on every element.
// let doubled = arr.map((item) => item * 2); // Doubles each element

// 8. Filtering Elements
// .filter(): Creates a new array with all elements that pass the test implemented by the provided function.
// let evens = arr.filter((item) => item % 2 === 0); // Gets even numbers

// 9. Reducing Elements
// .reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
// let sum = arr.reduce((acc, item) => acc + item, 0); // Sums all elements

// 10. Sorting Elements
// .sort(): Sorts the elements of an array in place and returns the sorted array.
// arr.sort((a, b) => a - b); // Sorts arr in ascending order
// arr.sort((a, b) => b - a); // Sorts arr in descending order

// 11. Slicing Elements
// .slice(): Returns a shallow copy of a portion of an array into a new array object.
// let newArr = arr.slice(0, 2); // Gets elements from index 0 to 1

// 12. Splicing Elements
// .splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements.
// arr.splice(1, 1, 99); // Removes 1 element at index 1 and adds 99

// 13. Joining Elements
// .join(): Joins all elements of an array into a string.
// let str = arr.join(", "); // Creates a string from arr elements
