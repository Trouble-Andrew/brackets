module.exports = function check(str, bracketsConfig) {
  let flag = true;

  function removeBrackets() {
    flag = false;
    for (const brackets of bracketsConfig) {
        let bracketsPair = `${brackets[0]}${brackets[1]}`;
        while (str.indexOf(bracketsPair) >= 0) {
            str = str.replace(bracketsPair, '');
            flag = true;
        }
    }

    if (str.length > 0 && flag === true) {
        removeBrackets();
    }        
  }

  removeBrackets();
  return flag;
}
