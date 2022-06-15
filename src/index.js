module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const arr = str.split('');
  const brackets = Object.fromEntries(bracketsConfig);

  if (arr.length % 2 !== 0) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === brackets[`${stack[stack.length - 1]}`]) {
      stack.pop();
    } else if (brackets.hasOwnProperty(arr[i])) {
      stack.push(arr[i]);
    }
  }

  return stack.length === 0;
}
