function getBracketType(bracket) {
  switch(bracket) {
    case "(":
    case ")":
      return "round";
    case "{":
    case "}":
      return "curly";
    case "[":
    case "]":
      return "square";
    default:
      throw Error(`Could not parse bracket: ${bracket}`)
  }
}

function getAdditive(bracket) {
  switch(bracket) {
    case "(":
      return 1;
    case ")":
      return -1;
    case "{":
      return 1;
    case "}":
      return -1;
    case "[":
      return 1;
    case "]":
      return -1;
    default:
      throw Error(`Could not parse bracket: ${bracket}`)
  }
}

function hasEnding(bracketString) {
  let dictionary = {
    "round": 0,
    "curly": 0,
    "square": 0
  }

  for(let bracket of bracketString){
    dictionary[getBracketType(bracket)] += getAdditive(bracket);
  }

  for(let value in dictionary) {
    if(dictionary[value] != 0) return false;
  }
  return true;
}


function validString(bracketString) {
  let stack = [];
  for(let bracket of bracketString) {
    let operation = getAdditive(bracket);
    let type = getBracketType(bracket);
    if(operation > 0){
      stack.push(type);
    } else {
      let previousType = stack.pop();
      if (previousType != type) return false;
    }
  }

  if(stack.length > 0) {
    return false;
  }

  return true;
}

function printTest(expected, actual) {
  if(expected === actual) console.log('PASS');
  else console.log(`FAIL -- Expected: ${expected} -- Received ${actual}`);
}

function test() { 
  printTest(true, validString("([])[]({})"));
  printTest(true, validString("([{}])[{[()]}]({})"));
  printTest(false, validString("([{}])[{[()}]]({})"));
  printTest(false, validString("([)]"));
  printTest(false, validString("((()"));
}

test();