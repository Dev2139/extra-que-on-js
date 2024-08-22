// //////Beginner Friendly Questions

// 1. **Print "Hello, World!"**  
//    - Task: Write a function that prints "Hello, World!" to the console.

function callhw(a){
    console.log(a)
}
callhw("hello,world!!")

   
// 2. **Add Two Numbers**  
//    - Task: Write a function that takes two numbers and returns their sum.  
//    - Test: `sum(3, 5)`  
//    - Expected Output: `8`
function sum(a,b){
    console.log(a+b)
}
sum(3,5)
// 3. **Find the Largest Number**  
//    - Task: Write a function that takes three numbers and returns the largest.  
//    - Test: `findLargest(2, 8, 5)`  
//    - Expected Output: `8`

function findlargest(a,b,c){

    if( b>a ||b>c){
        console.log(b," is largest")
    }
    else if(a>b||a>c){
        console.log(a," is largest")
    }
    else{
        console.log(c," is largest")
    }
}   
findlargest(2,8,5)

// 4. **Check if a Number is Even or Odd**  
//    - Task: Write a function that checks if a number is even or odd.  
//    - Test: `isEven(4)`  
//    - Expected Output: `true`
function iseven(x){
    if(x%2==0){
        console.log(x,"is an even no")
    }
    else{
        console.log(X,"is not even")
    }
}
iseven(4)
// 5. **Calculate the Factorial of a Number**  
//    - Task: Write a function that returns the factorial of a number.  
//    - Test: `factorial(5)`  
//    - Expected Output: `120`
function factorial(a){
    let fact=1;
    for(var i=a;i>1;i--){
        fact=fact*i;
        }
        {console.log(fact)
    }
}
factorial(5)

// 6. **Reverse a String**  
//    - Task: Write a function that takes a string and returns it reversed.  
//    - Test: `reverseString('hello')`  
//    - Expected Output: `'olleh'`
let b="";
function reverseString(a){
    for(var i=(a.length)-1;i>=0;i--){
        // console.log(a[i])
        b+=a[i]

    }
    console.log(b)
}
reverseString("hello")


// 7. **Check for Palindrome**  
//    - Task: Write a function that checks if a given string is a palindrome.  
//    - Test: `isPalindrome('madam')`  
//    - Expected Output: `true`

var c="";
function ispalindrome(b){
    for(var i=(b.length)-1;i>=0;i--){
        c+=b[i]
        }
    if(c===b){
        console.log("true")
    }
    else  {
        console.log("false")
    }

    // console.log(b)
}
ispalindrome("madam")


// 8. **Find the Minimum Number in an Array**  
//    - Task: Write a function that takes an array and returns the smallest number.  
//    - Test: `findMin([3, 1, 4, 1, 5])`  
//    - Expected Output: `1`
function findmin(a){
    let min;
    min=a[0];
    for(i=0;i<=a.length;i++){
        if(a[i]<=min){
            min=a[i];
        }
    }console.log(min)
}
findmin([3, 1, 4, 1, 5])
// 9. **Sort an Array**  
//    - Task: Write a function that sorts an array of numbers in ascending order.  
//    - Test: `sortArray([3, 1, 4, 1, 5])`  
//    - Expected Output: `[1, 1, 3, 4, 5]`

function sortarray(a){
    console.log(a.sort())
}
sortarray([3, 1, 4, 1, 5])

// 10. **Check if a String Contains a Substring**  
//     - Task: Write a function that checks if a string contains another substring.  
//     - Test: `containsSubstring('hello world', 'world')`  
//     - Expected Output: `true`

// function containsSubstring(a,b){
//    ;
//     let fullword=0;
//     for(i=0;i<=a.length;i++){
//         fullword+=i;
//         if(b==fullword){
//             console.log("true")
//         }
//         else{
//             console.log("false")
//         }

//     }

// }
// containsSubstring('hello world', 'world')


// 11. **Sum All Elements in an Array**  
//     - Task: Write a function that returns the sum of all numbers in an array.  
//     - Test: `sumArray([1, 2, 3, 4, 5])`  
//     - Expected Output: `15`
function sumarray(a){
    let sum=0;
    for(i=0;i<=a.length;i++){
        sum=sum+i;
        
    }
    console.log(sum)
}
sumarray([1, 2, 3, 4, 5])

// 12. **Generate Fibonacci Sequence**  
//     - Task: Write a function that generates the first `n` Fibonacci numbers.  
//     - Test: `fibonacci(5)`  
//     - Expected Output: `[0, 1, 1, 2, 3]`
function fibonacci(a){
    let f=0;
    let b=1;
    console.log(f);
    console.log(b);
    for(i=0;i<(a-2);i++){
        c=f+b
        console.log(c)
        f=b
        b=c
    }
}
fibonacci(5)

// 13. **Check if a Number is Prime**  
//     - Task: Write a function that checks if a number is prime.  
//     - Test: `isPrime(7)`  
//     - Expected Output: `true`
function isPrime(a){
    let count=0;
    for(i=2;i<a;i++){
        if(a%i==0){
        count+=1}
    }
    if (count>0){
        console.log("not a prime no")
    }
    else{
        console.log(" prime number")
    }
}
isPrime(7)



// 14. **Count the Number of Vowels in a String**  
//     - Task: Write a function that counts the number of vowels in a given string.  
//     - Test: `countVowels('hello')`  
//     - Expected Output: `2`
function countVowels(a){
    let cnt=0;
    for(i=0;i<(a.length);i++){
        if(a[i]=="a" || a[i]=="e" || a[i]=="i" || a[i]=="o" || a[i]=="u"){
            cnt+=1;
        }
    // console.log(cnt,"no of vowels")
}
console.log(cnt,"no of vowels")
}
    
countVowels("hello")


// 15. **Find the Index of an Element in an Array**  
//     - Task: Write a function that returns the index of a given element in an array. If the element is not found, return -1.  
//     - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
//     - Expected Output: `2`
function  findIndex(a,b){
    console.log(a.indexOf(b))
}
findIndex([1, 2, 3, 4, 5], 3)


// 16. **Remove Duplicates from an Array**  
//     - Task: Write a function that removes duplicate elements from an array.  
//     - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//     - Expected Output: `[1, 2, 3, 4, 5]`
function removeDuplicates(a){
let arr=a
let arrset = new Set( arr )
console.log([...arrset])
}
removeDuplicates([1, 2, 2, 3, 4, 4, 5])


// 17. **Find the Intersection of Two Arrays**  
//     - Task: Write a function that returns an array of the common elements in two arrays.  
//     - Test: `findIntersection([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[2, 3]`
function findIntersection(a, b) {
    let intersection = []; // Array to hold the common elements

    for (var i = 0; i < a.length; i++) {
        var element = a[i];
        // Check if the element is present in b and not already added to the intersection
        if (b.indexOf(element) !== -1 && intersection.indexOf(element) === -1) {
            intersection.push(element);
        }
    }

    console.log(intersection)
}
 findIntersection([1, 2, 3], [2, 3, 4] )

// 18. **Check if Two Strings are Anagrams**  
//     - Task: Write a function that checks if two strings are anagrams of each other.  
//     - Test: `areAnagrams('listen', 'silent')`  
//     - Expected Output: `true`

// function areAnagrams(a,b){
//     for(i=0;i=(a.length)/2;i++)

// }


// 19. **Capitalize the First Letter of Each Word**  
//     - Task: Write a function that capitalizes the first letter of each word in a string.  
//     - Test: `capitalizeWords('hello world')`  
//     - Expected Output: `'Hello World'`
function capitalizeWords(str) {
    var words = str.split(' '); 
    var result = ''; 

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > 0) {
            // Capitalize the first letter and concatenate the rest of the word
            var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
            // Add the capitalized word to the result string with a space
            result += (i > 0 ? ' ' : '') + capitalizedWord;
        }
    }

    console.log(result,) // Return the final result string
}
capitalizeWords("hellow world") 




// 20. **Flatten a Nested Array**  
//     - Task: Write a function that flattens a nested array (an array of arrays) into a single array.  
//     - Test: `flattenArray([1, [2, 3], [4, [5, 6]]])`  
//     - Expected Output: `[1, 2, 3, 4, 5, 6]`




// 21. **Generate a Random Number within a Range**  
//     - Task: Write a function that generates a random number between a given range.  
//     - Test: `randomNumber(1, 10)`  
//     - Expected Output: `A random number between 1 and 10`


// 22. **Check if a String is a Valid Email**  
//     - Task: Write a function that checks if a given string is a valid email address.  
//     - Test: `isValidEmail('test@example.com')`  
//     - Expected Output: `true`
function isValidEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
isValidEmail('test@example.com')

// 23. **Convert Celsius to Fahrenheit**  
//     - Task: Write a function that converts a temperature from Celsius to Fahrenheit.  
//     - Test: `celsiusToFahrenheit(0)`  
//     - Expected Output: `32`
function celsiusToFahrenheit(a){
    console.log(a*(9/5)+32)
}
celsiusToFahrenheit(0)

// 24. **Remove a Specific Element from an Array**  
//     - Task: Write a function that removes a specific element from an array.  
//     - Test: `removeElement([1, 2, 3, 4, 5], 3)`  
//     - Expected Output: `[1, 2, 4, 5]`
function removeElement(a,b){
    let z=a.indexOf(b)
    let d=a.splice(z,1)
    console.log(a)
}
removeElement([1, 2, 3, 4, 5], 3)

// 25. **Find the Second Largest Number in an Array**  
//     - Task: Write a function that returns the second largest number in an array.  
//     - Test: `secondLargest([1, 2, 3, 4, 5])`  
//     - Expected Output: `4`
function secondLargest(a){
    let len=a.length;
    let k=a.sort()
    // console.log(k)
    for(i=0;i<k.length;i++){
        // console.log(a[len-1])
    }
    console.log(a[len-2])
} 
secondLargest([1,2,3,4,5])

// 28. **Find the Longest Word in a String**  
//     - Task: Write a function that returns the longest word in a string.  
//     - Test: `longestWord('The quick brown fox jumped over the lazy dog')`  
//     - Expected Output: `'jumped'`

function longestWord(a){
    for(i=0;i<=a.length;i++){   
        console.log()
    }
}

// 29. **Find the Missing Number in an Array**  
//     - Task: Write a function that finds the missing number in a sequence from 1 to n.  
//     - Test: `findMissingNumber([1, 2, 4, 5, 6])`  
//     - Expected Output: `3`
function findMissingNumber(a){
    let n=a.length+1;
    let sum=0;
    const totalsum=(n*(n+1))/2
    for(i=0;i<a.length;i++){
        sum+=a[i];
    }
    // console.log(sum)
    // console.log(totalsum)
    console.log(totalsum - sum)
    
}

findMissingNumber([1, 2, 4,3, 6])

// 30. **Calculate the GCD of Two Numbers**  
//     - Task: Write a function that calculates the greatest common divisor (GCD) of two numbers.  
//     - Test: `gcd(12, 18)`  
//     - Expected Output: `6`
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    console.log(a);
}
gcd(12,18)

// 31. **Calculate the LCM of Two Numbers**  
//     - Task: Write a function that calculates the least common multiple (LCM) of two numbers.  
//     - Test: `lcm(4, 6)`  
//     - Expected Output: `12`
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    // console.log(a,"hehe1");
}
gcd(4,6)

function lcm(a, b) {
        console.log(Math.abs(a * b) / gcd(a, b));
}
    
lcm(4, 6)
    


// 33. **Check for Balanced Parentheses**  
//     - Task: Write a function that checks if a string has balanced parentheses.  
//     - Test: `isBalanced('()')`  
//     - Expected Output: `true`



// 34. **Rotate an Array**  
//     - Task: Write a function that rotates an array by k steps.  
//     - Test: `rotateArray([1, 2, 3, 4, 5], 2)`  
//     - Expected Output: `[4, 5, 1, 2, 3]`

function rotateArray(a, k) {
    if (a.length === 0) {
        return a; // Return the empty array as is
    }
    const n = a.length;
    k = k % n; 
    return a.slice(-k).concat(a.slice(0, -k));
}
console.log(rotateArray([1, 2, 3, 4, 5], 2)); 

// 4. **Find the First Non-Repeated Character in a String**
//    - Task: Write a function that finds the first non-repeated character in a string.
//    - Test:
//      ```javascript
//      console.log(firstNonRepeatedCharacter("swiss"));
//      ```
//    - Expected Output: `"w"`

// function firstNonRepeatedCharacter(a){
//     let a=""

// }

// 5. **Count the Number of Words in a String**
//    - Task: Write a function that counts the number of words in a string. Assume words are separated by spaces.
//    - Test:
//      ```javascript
//      console.log(countWords("This is a test string"));
//      ```
//    - Expected Output: `5`
function countWords(a) {
    var count = 0;
    var inWord = false;

    for (var i = 0; i < a.length; i++) {
        var r = a[i];
        
        if (r !== ' ' && r !== '\t' && r !== '\n') { // If the character is not a space, tab, or newline
            if (!inWord) {
                count++; // Found the start of a new word
                inWord = true; // We are inside a word
            }
        } else {
            inWord = false; // We are outside a word
        }
    }

    console.log(count)
}
countWords("This is a test string")

// **Replace All Spaces in a String with Hyphens**
//    - Task: Write a function that replaces all spaces in a string with hyphens (`-`).
//    - Test:
//      ```javascript
//      console.log(replaceSpaces("Hello World"));
//      ```
//    - Expected Output: `"Hello-World"`
function replaceSpaces(a){
    let d='';
    for(i=0;i<a.length;i++){
        if(a[i]===' '){
            d+="-";
        }
        else {
            d+= a[i];
       
    }
     
}
console.log(a)

}
replaceSpaces("Hello World")

// *Convert a String to Title Case**
//    - Task: Write a function that converts a string to title case (capitalizes the first letter of each word).
//    - Test:
//      ```javascript
//      console.log(toTitleCase("this is a test string"));
//      ```
//    - Expected Output: `"This Is A Test String"`

function capitalizeWords(str) {
    var words = str.split(' '); 
    var result = ''; 

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > 0) {
            // Capitalize the first letter and concatenate the rest of the word
            var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
            // Add the capitalized word to the result string with a space
            result += (i > 0 ? ' ' : '') + capitalizedWord;
        }
    }

    console.log(result,) // Return the final result string
}
capitalizeWords("this is a test string") 



// 9. **Check if a String Contains Only Digits**
//    - Task: Write a function that checks if a string contains only numeric digits.
//    - Test:
//      ```javascript
//      console.log(isNumeric("12345"));
//      console.log(isNumeric("123a5"));
//      ```
//    - Expected Output:
//      ```javascript
//      true
//      false
//      ```

function isNumeric(str) {
    return /^\d+$/.test(str);
}
// ^\d+$ is a regular expression where:
// ^ asserts the position at the start of the string.
// \d+ matches one or more digits.
// $ asserts the position at the end of the string.
console.log(isNumeric("12345")); 
console.log(isNumeric("123a5")); 

// 10. **Remove Duplicates Characters from a String**
//     - Task: Write a function that removes duplicate characters from a string.
//     - Test:
//       ```javascript
//       console.log(removeDuplicates("programming"));
//       ```
//     - Expected Output: `"progamin"`


//      **Capitalize the First Letter of Each Word in a String**
//     - Task: Write a function that capitalizes the first letter of each word in a string.
//     - Test:
//       ```javascript
//       console.log(capitalizeFirstLetters("javascript is fun"));
//       ```
//     - Expected Output: `"Javascript Is Fun"`
function capitalizeWords(a) {
    var words = a.split(' '); 
    var result = ''; 

    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > 0) {
            // Capitalize the first letter and concatenate the rest of the word
            var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
            // Add the capitalized word to the result string with a space
            result += (i > 0 ? ' ' : '') + capitalizedWord;
        }
    }

    console.log(result,) // Return the final result string
}
capitalizeWords("Javascript Is Fun") 



// 13. **Repeat a String N Times**
//     - Task: Write a function that repeats a given string `n` times.
//     - Test:
//       ```javascript
//       console.log(repeatString("abc", 3));
//       ```
//     - Expected Output: `"abcabcabc"`
function repeatString(a, b){
  let repeat='';
  for (i=0;i<b;i++){
    repeat+=a
    
  }
console.log(repeat)  
} 
repeatString("abc", 3)

// **Convert a String to an Array of Words**
//     - Task: Write a function that converts a string to an array of words.
//     - Test:
//       ```javascript
//       console.log(stringToWords("This is a test"));
//       ```
//     - Expected Output: `["This", "is", "a", "test"]`
function stringToWords(a) {
    // Split the string by spaces to get an array of words
    return a.split(' ');
}
console.log(stringToWords("This is a test")); 


// 16. **Truncate a String**
//     - Task: Write a function that truncates a string to a specified length and adds "..." at the end.
//     - Test:
//       ```javascript
//       console.log(truncateString("This is a long string", 10));
//       ```
//     - Expected Output: `"This is a..."`
function truncateString(a, b){
    let tru='';
    for(i=0;i<b;i++){
        tru+=a[i]
    }
    console.log(tru,"...")
}
truncateString("This is a long string", 10)

// 17. **Check if a String Starts with a Specific Substring**
//     - Task: Write a function that checks if a string starts with a given substring.
//     - Test:
//       ```javascript
//       console.log(startsWith("hello world", "hello"));
//       console.log(startsWith("hello world", "world"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```
function startsWith(a, b) {
    return a.startsWith(b);
}

// Test the function
console.log(startsWith("hello world", "hello")); 
console.log(startsWith("hello world", "world")); 


// 18. **Check if a String Ends with a Specific Substring**
//     - Task: Write a function that checks if a string ends with a given substring.
//     - Test:
//       ```javascript
//       console.log(endsWith("hello world", "world"));
//       console.log(endsWith("hello world", "hello"));
//       ```
//     - Expected Output:
//       ```javascript
//       true
//       false
//       ```
function startsWith(a, b) {
    // Use the startsWith method to check if str starts with substring
    return a.endsWith(b);
}

// Test the function
console.log(startsWith("hello world", "hello")); // Expected Output: true
console.log(startsWith("hello world", "world")); // Expected Output: false

// 19. **Insert a Substring at a Specific Position in a String**
//     - Task: Write a function that inserts a substring at a specific position in a string.
//     - Test:
//       ```javascript
//       console.log(insertSubstring("Hello World", "Beautiful ", 6));
//       ```
//     - Expected Output: `"Hello Beautiful World"`
function insertSubstring(str, substring, position) {
    // Ensure position is within the bounds of the string
    if (position < 0) position = 0;
    if (position > str.length) position = str.length;

    // Insert the substring at the specified position
    return str.slice(0, position) + substring + str.slice(position);
}

// Test the function
console.log(insertSubstring("Hello World", "Beautiful ", 6));


// 20. **Remove All Instances of a Substring**
//     - Task: Write a function that removes all instances of a substring from a string.
//     - Test:
//       ```javascript
//       console.log(removeSubstring("This is a test. This is only a test.", "test"));
//       ```
//     - Expected Output: `"This is a . This is only a ."`

function removeSubstring(str, substring) {
    // Create a regular expression to match all instances of the substring
    const regex = new RegExp(substring, 'g');
    // Replace all instances of the substring with an empty string
    return str.replace(regex, '');
}

// Test the function
console.log(removeSubstring("This is a test. This is only a test.", "test")); 

// 1. **Sum All Elements in an Array**  
//    - Task: Write a function that returns the sum of all numbers in an array.  
//    - Test: `sumArray([1, 2, 3, 4, 5])`  
//    - Expected Output: `15`


// 2. **Find the Largest Number in an Array**  
//    - Task: Write a function that returns the largest number in an array.  
//    - Test: `findLargest([1, 5, 3, 9, 2])`  
//    - Expected Output: `9`


// 3. **Find the Smallest Number in an Array**  
//    - Task: Write a function that returns the smallest number in an array.  
//    - Test: `findSmallest([1, 5, 3, 9, 2])`  
//    - Expected Output: `1`
function findSmallest(a){
    let x=a.sort();
    console.log(x[0])
}
findSmallest([1, 5, 3, 9, 2])

// 4. **Sort an Array in Ascending Order**  
//    - Task: Write a function that sorts an array in ascending order.  
//    - Test: `sortArray([5, 2, 9, 1, 5, 6])`  
//    - Expected Output: `[1, 2, 5, 5, 6, 9]`
function sortArray(a){
    let y=a.sort()
    
    console.log(y)
}
sortArray([5, 2, 9, 1, 5, 6])




// 5. **Sort an Array in Descending Order**  
//    - Task: Write a function that sorts an array in descending order.  
//    - Test: `sortArrayDescending([5, 2, 9, 1, 5, 6])`  
//    - Expected Output: `[9, 6, 5, 5, 2, 1]`
// function sortArray(a){
//     let y=a.sort()
//     let res=[]
//     for (i=y.length;i>0;i--){
//         res+=i
//     }
//     console.log(array[res])
// }
// sortArray([5, 2, 9, 1, 5, 6])


// 6. **Reverse an Array**  
//    - Task: Write a function that reverses the elements of an array.  
//    - Test: `reverseArray([1, 2, 3, 4, 5])`  
//    - Expected Output: `[5, 4, 3, 2, 1]`



// 7. **Check if an Array Contains a Specific Element**  
//    - Task: Write a function that checks if an array contains a specific element.  
//    - Test: `containsElement([1, 2, 3, 4, 5], 3)`  
//    - Expected Output: `true`
function containsElement(a,b){
    let cnt=0;
    for(i=0;i<a.length;i++){
        if(a[i]==b){
            cnt+=1
}
}
if(cnt+=1){
    console.log("true")
}
else{
 console.log("false")
}
}
containsElement([1, 2, 3, 4, 5], 3)

// 8. **Find the Index of a Specific Element in an Array**  
//    - Task: Write a function that returns the index of a specific element in an array. If the element is not found, return -1.  
//    - Test: `findIndex([1, 2, 3, 4, 5], 3)`  
//    - Expected Output: `2`



// 9. **Remove Duplicates from an Array**  
//    - Task: Write a function that removes duplicate elements from an array.  
//    - Test: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])`  
//    - Expected Output: `[1, 2, 3, 4, 5]`



// 10. **Merge Two Arrays**  
//     - Task: Write a function that merges two arrays into one.  
//     - Test: `mergeArrays([1, 2, 3], [4, 5, 6])`  
//     - Expected Output: `[1, 2, 3, 4, 5, 6]`
function mergeArrays(a,b){
    console.log(a.concat(b))  
}
mergeArrays([1, 2, 3], [4, 5, 6])

function mergeArray(a,b){
    c=[];
    for(i=0;i<a.length;i++){
        c.push(a[i])
    }
    for (i=0;i<b.length;i++){
        c.push(b[i])
    }
    console.log(c)

}
mergeArrays([1, 2, 3], [4, 5, 6])


// 11. **Find the Intersection of Two Arrays**  
//     - Task: Write a function that returns the intersection of two arrays.  
//     - Test: `findIntersection([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[2, 3]`




// 12. **Find the Union of Two Arrays**  
//     - Task: Write a function that returns the union of two arrays.  
//     - Test: `findUnion([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1, 2, 3, 4]`


// 13. **Check if an Array is Sorted**  
//     - Task: Write a function that checks if an array is sorted in ascending order.  
//     - Test: `isSorted([1, 2, 3, 4, 5])`  
//     - Expected Output: `true`
function isSorted(a){
    x=a.sort()
    if(x===a){
        console.log("true")
    }
    else{
        console.log("false")
    }
}
isSorted([1, 2, 3, 4, 5])

// 14. **Find the Difference of Two Arrays**  
//     - Task: Write a function that returns the difference of two arrays (elements in the first array that are not in the second array).  
//     - Test: `findDifference([1, 2, 3], [2, 3, 4])`  
//     - Expected Output: `[1]`



// 15. **Rotate an Array by K Positions**  
//     - Task: Write a function that rotates an array by `k` positions.  
//     - Test: `rotateArray([1, 2, 3, 4, 5], 2)`  
//     - Expected Output: `[4, 5, 1, 2, 3]`

// 16. **Find the Maximum Difference Between Two Elements in an Array**  
//     - Task: Write a function that finds the maximum difference between any two elements in an array.  
//     - Test: `maxDifference([2, 3, 10, 6, 4, 8, 1])`  
//     - Expected Output: `8`


// 17. **Find the Second Largest Element in an Array**  
//     - Task: Write a function that returns the second largest element in an array.  
//     - Test: `secondLargest([1, 2, 3, 4, 5])`  
//     - Expected Output: `4`
function secondLargest(a){
    x=a.sort()
    console.log(a[a.length-2])
}
secondLargest([1, 2, 3, 4, 5])

// 18. **Find the Pair of Elements with the Maximum Sum in an Array**  
//     - Task: Write a function that finds the pair of elements with the maximum sum in an array.  
//     - Test: `maxSumPair([1, 2, 3, 4, 5])`  
//     - Expected Output: `[4, 5]`
function maxSumPair(a){
    b=a.sort()
    let c=[b[b.length-2],b[b.length-1]]
    console.log(c)
}
maxSumPair([1, 2, 3, 4, 5])

// 19. **Find the Pair of Elements with the Minimum Sum in an Array**  
//     - Task: Write a function that finds the pair of elements with the minimum sum in an array.  
//     - Test: `minSumPair([1, 2, 3, 4, 5])`  
//     - Expected Output: `[1, 2]`
function minSumPair(a){
    let c=[]
    b=a.sort()
    c=[b[0],b[1]]
    console.log(c)
}
minSumPair([1, 2, 3, 4, 5])


// 20. **Move All Zeros to the End of an Array**  
//     - Task: Write a function that moves all zeros in an array to the end, preserving the order of the other elements.  
//     - Test: `moveZeros([0, 1, 0, 3, 12])`  
//     - Expected Output: `[1, 3, 12, 0, 0]`
function moveZeros(a){
    let arr=[]
    cnt=0;
    for(i=0;i<a.length;i++){
        if(a[i]!=0){
            console.log(arr.push(a[i]))
        }
        else if(a[i]==0)
            cnt+=1
    }
    for(i=0;i<cnt;i++){
        arr.push(0)}
    console.log(arr) 
}
moveZeros([0, 1, 0, 3, 12])




// 21. **Count the Frequency of Each Element in an Array**  
//     - Task: Write a function that counts the frequency of each element in an array.  
//     - Test: `countFrequency([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `{1: 1, 2: 2, 3: 3}`
function countFrequency(a){
    
}
countFrequency([1, 2, 2, 3, 3, 3])


// 22. **Find the Most Frequent Element in an Array**  
//     - Task: Write a function that finds the most frequent element in an array.  
//     - Test: `mostFrequent([1, 2, 2, 3, 3, 3])`  
//     - Expected Output: `3`



// 23. **Find the Longest Increasing Subsequence in an Array**  
//     - Task: Write a function that finds the longest increasing subsequence in an array.  
//     - Test: `longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80])`  
//     - Expected Output: `[10, 22, 33, 50, 60, 80]`



// 24. **Find the Longest Consecutive Sequence in an Array**  
//     - Task: Write a function that finds the longest consecutive sequence in an array.  
//     - Test: `longestConsecutive([100, 4, 200, 1, 3, 2])`  
//     - Expected Output: `4` (sequence is `[1, 2, 3, 4]`)


// Object Questions

// 1. **Create a Simple Object**
//    - Task: Create an object representing a person with properties `name`, `age`, and `city`.
//    - Test:
//      ```javascript
//      const person = createPerson("John", 25, "New York");
//      console.log(person);
//      ```
//    - Expected Output: `{ name: 'John', age: 25, city: 'New York' }`



// 2. **Access Object Properties**
//    - Task: Write a function that returns the value of a given property from an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(getProperty(obj, 'name'));
//      ```
//    - Expected Output: `'Alice'`

// 3. **Add a New Property to an Object**
//    - Task: Write a function that adds a new property to an object.
//    - Test:
//      ```javascript
//      const car = { brand: 'Toyota', model: 'Corolla' };
//      addProperty(car, 'year', 2020);
//      console.log(car);
//      ```
//    - Expected Output: `{ brand: 'Toyota', model: 'Corolla', year: 2020 }`

// 4. **Delete a Property from an Object**
//    - Task: Write a function that deletes a property from an object.
//    - Test:
//      ```javascript
//      const user = { username: 'john_doe', password: '12345' };
//      deleteProperty(user, 'password');
//      console.log(user);
//      ```
//    - Expected Output: `{ username: 'john_doe' }`

// 5. **Check if an Object has a Property**
//    - Task: Write a function that checks if an object has a specific property.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30 };
//      console.log(hasProperty(obj, 'age'));
//      ```
//    - Expected Output: `true`

// 6. **Merge Two Objects**
//    - Task: Write a function that merges two objects into one.
//    - Test:
//      ```javascript
//      const obj1 = { a: 1, b: 2 };
//      const obj2 = { b: 3, c: 4 };
//      console.log(mergeObjects(obj1, obj2));
//      ```
//    - Expected Output: `{ a: 1, b: 3, c: 4 }`

// 7. **Clone an Object**
//    - Task: Write a function that creates a deep clone of an object.
//    - Test:
//      ```javascript
//      const original = { name: 'Alice', details: { age: 30, city: 'NYC' } };
//      const clone = cloneObject(original);
//      clone.details.city = 'LA';
//      console.log(original.details.city);
//      console.log(clone.details.city);
//      ```
//    - Expected Output:
//      ```
//      'NYC'
//      'LA'
//      ```

// 8. **Loop Through Object Properties**
//    - Task: Write a function that loops through all the properties of an object and prints them.
//    - Test:
//      ```javascript
//      const user = { name: 'John', age: 30, city: 'New York' };
//      printProperties(user);
//      ```
//    - Expected Output:
//      ```
//      name: John
//      age: 30
//      city: New York
//      ```

// 9. **Count the Number of Properties in an Object**
//    - Task: Write a function that counts the number of properties in an object.
//    - Test:
//      ```javascript
//      const obj = { name: 'Alice', age: 30, city: 'NYC' };
//      console.log(countProperties(obj));
//      ```
//    - Expected Output: `3`

// 10. **Convert Object to Array of Keys**
//     - Task: Write a function that converts an object to an array of its keys.
//     - Test:
//       ```javascript
//       const obj = { name: 'Alice', age: 30, city: 'NYC' };
//       console.log(objectKeysToArray(obj));
//       ```
//     - Expected Output: `['name', 'age', 'city']`

// 11. **Convert Object to Array of Values**
//     - Task: Write a function that converts an object to an array of its values.
//     - Test:
//       ```javascript
//       const obj = { name: 'Alice', age: 30, city: 'NYC' };
//       console.log(objectValuesToArray(obj));
//       ```
//     - Expected Output: `['Alice', 30, 'NYC']`

// 12. **Convert an Array of Objects to a Single Object**
//     - Task: Write a function that converts an array of objects into a single object. Assume each object in the array has a unique `key` property.
//     - Test:
//       ```javascript
//       const arr = [{ key: 'a', value: 1 }, { key: 'b', value: 2 }];
//       console.log(arrayToObject(arr));
//       ```
//     - Expected Output: `{ a: 1, b: 2 }`

// 13. **Group Objects by a Property**
//     - Task: Write a function that groups an array of objects by a specific property.
//     - Test:
//       ```javascript
//       const users = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 30 }
//       ];
//       console.log(groupBy(users, 'age'));
//       ```
//     - Expected Output:
//       ```javascript
//       {
//         20: [{ name: 'Bob', age: 20 }],
//         30: [{ name: 'Alice', age: 30 }, { name: 'Charlie', age: 30 }]
//       }
//       ```

// 14. **Find the Object with the Maximum Value of a Property**
//     - Task: Write a function that finds the object with the maximum value of a given property in an array of objects.
//     - Test:
//       ```javascript
//       const users = [
//         { name: 'Alice', age: 30 },
//         { name: 'Bob', age: 20 },
//         { name: 'Charlie', age: 35 }
//       ];
//       console.log(findMax(users, 'age'));
//       ```
//     - Expected Output: `{ name: 'Charlie', age: 35 }`

// 15. **Sum the Values of a Specific Property in an Array of Objects**
//     - Task: Write a function that sums the values of a specific property in an array of objects.
//     - Test:
//       ```javascript
//       const items = [
//         { name: 'item1', price: 10 },
//         { name: 'item2', price: 15 },
//         { name: 'item3', price: 20 }
//       ];
//       console.log(sumProperty(items, 'price'));
//       ```
//     - Expected Output: `45`






