/*
Palindrome strings
A palindrome is a word, phrase, number, or other sequence of 
characters which reads the same backward or forward. 
This includes capital letters, punctuation, and word dividers.
Implement a function that checks if something is a palindrome. 
If the input is a number, convert it to string first.
*/

/*
**Pseudocode**
check the type of the argument 
if(the type of the argument is a string) {
(convert the string to an array of individual characters).
(change the order of the characters to reverse).
(combine all the indivual characters into one whole string) and 
return where this modified argument is equal to the original argument received in the function)} 
else (the type of the argument is not a string) {
(convert this argument to a string).
(convert the string to an array of individual characters).
(change the order of the characters to reverse).
(combine all the individual characters into one whole string) and 
return where this modified argument is equal to the original number argument received 
in the function when converted to a string)}
*/


function isPalindrome(input) {
  if (typeof(input) === 'string') {
    return input.split('').reverse().join('') === input;
  }else {
    return input.toString().split('').reverse().join('') === input.toString();
  }
}

console.log(isPalindrome('anna'));
console.log(isPalindrome('walter'));
console.log(isPalindrome(123456));
console.log(isPalindrome(12321));