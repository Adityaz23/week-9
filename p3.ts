// Problem 3 - Return true or false based on if a user is 18+
// Thing to learn - Type inference
// Function name - isLegal

function isLegal(age: number) {
  if (age > 18) {
    return 'true'
  }
  else {
    return 'false'
  }
}
console.log(isLegal(20));