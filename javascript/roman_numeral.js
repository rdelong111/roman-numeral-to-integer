function romanNumeral(string) {
  const rn = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
  };
  let ans = 0;

  for (let i = string.length - 1; i >= 0; i--) {
    if (i === 0 || rn[string[i - 1]] >= rn[string[i]]) {
      ans += rn[string[i]];
    }
    else {
      ans += rn[string[i]] - rn[string[i - 1]];
      i--;
    }
  }

  return ans;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

/*
Store the values of roman numerals, 'I, V, X, L, C, D, M' in an object called rn
Initialize a variable called ans set its current value to 0

Iterate through string starting from the back
  If the loop is on the last iteration or if the value of the next iteration is greater than the value of the current
    Add the value of the current iteration to 'ans'
  If the value of the next iteration is less than the value of the current
    Add the value of the current iteration minus the value of the next iteration
    Skip over the next iteration

Return 'ans'
*/

/*
The object 'rn' stores the values of the single roman numerals.
The variable 'ans' stores the total value of the string.
The FOR loop iterates through 'string' from the back to add the small numbers first.
The IF checks if the loop is on the last iteration or if the current iteration is less than or equal to the next. If so, then the current iteration value is added to 'ans'.
If the current iteration value is greater than the next, then the value of current iteration minus the next is added to 'ans'.
When the FOR loop is complete, the 'ans' is returned.
*/