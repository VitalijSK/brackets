module.exports = function check(str, bracketsConfig) {

  const bracketsStack = [];
  const openBracket = [];
  const openBracketEqual = [];

  bracketsConfig.forEach( brackets => {
      let bracket = brackets[0];
      if (brackets[0] === brackets[1]) {
        openBracketEqual.push(bracket);
      } 
      openBracket.push(bracket);
   
  });

  for (let i = 0, n = str.length; i < n; i++) {
    const index = openBracket.indexOf(str[i]);

    if (openBracketEqual.includes(str[i])) {
        if (bracketsStack.length > 0) {
            const bracket = bracketsStack.pop();

            if (bracketsConfig[bracket][1] !== str[i]) {
                bracketsStack.push(bracket);
                bracketsStack.push(index);
            }

        } else {
            bracketsStack.push(index);
        }
        
        
    } else if (index !== -1) {
        bracketsStack.push(index);
    } else if (bracketsStack.length > 0) {
        const bracket = bracketsStack.pop();

        if (bracketsConfig[bracket][1] !== str[i]) {
            return false;
        }
    } else {
        return false
    }
  }
  if (bracketsStack.length > 0) {
      return false;
  }
  return true;
}
