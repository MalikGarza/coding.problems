const easy = false;

function easyRegex(source, regex) {
  regex = '^' + regex + '$';
  let re = new RegExp(regex);
  return re.test(source); 
}

function validateCharacter(source, regex) {
  regexCharacter = regex.charAt(0);
  return (source.length > 0 && regexCharacter === '.') || source.charAt(0) === regexCharacter;
}

function hardRegex(source, regex) {
  if(regex === '') return source === '';
  if(regex.length === 1 || regex.charAt(1) != '*') {
    if(validateCharacter(source, regex)) return hardRegex(source.substring(1), regex.substring(1));
    return false;
  }
  if(hardRegex(source, regex.substring(2))) return true;
  let index = 0;
  while(validateCharacter(source.substring(index), regex)) {
    if(hardRegex(source.substring(index + 1), regex.substring(2))) return true;
    index++;
  }
  return false;
}

function validateRegex(source, regex) {
  return easy ? easyRegex(source, regex) : hardRegex(source, regex);
}

function printTest(expression, testString, expected) {
  let actual = validateRegex(testString, expression);
  let pass = expected === actual;
  if(pass) {
    console.log('PASS');
  } else {
    console.log(`\nExpression: ${expression}\tString: ${testString}\tExpected: ${expected}\tActual: ${actual}\nFAIL\n`);
  }
}


function Test() {
  printTest('ra.', 'ray', true);
  printTest('ra.', 'raymond', false);
  printTest('.*at', 'chat', true);
  printTest('.*.*at', 'chat', true);
  printTest('.*at', 'chats', false);
  printTest('.*at.*', 'chats', true);
  printTest('.*', '', true);
  printTest('a*b', 'a', false);
  printTest('a*b', 'b', true);
  printTest('a*b', 'ab', true);
  printTest('abb', 'ab', false);
  printTest('abc', 'ab', false);
  printTest('abc', 'abc', true);
}

Test();














// function hardRegex(source, regex) {
//   // if(regex === '.*') return true;
//   // let regexIndex = 0;
//   // let currentRegEx = regex.charAt(regexIndex);
//   // if(currentRegEx === '*') throw Error('Invalid Expression. Regex cannot begin with *');

//   // let nextRegEx = regex.charAt(regexIndex+1);
//   // let valid = true;
//   // let index = 0;
//   // while(valid && index <= source.length) {
//   //   let currentCharacter = source.charAt(index); //a
//   //   valid = validateCharacter(currentRegEx, nextRegEx, currentCharacter) //true
//   //   if(nextRegEx != '*') {
//   //     regexIndex++;
//   //     currentRegEx = regex.charAt(regexIndex);
//   //     nextRegEx = regex.charAt(regexIndex+1);
//   //   }
//   //   index++
//   // }

//   // return valid;
// }