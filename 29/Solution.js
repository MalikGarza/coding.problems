function encodeString(value) {
  let currentChar = value.charAt(0);
  let index = 1;
  let count = 1;
  let shortenedCharacters = [];
  while(index < value.length) {
    if(currentChar !== value.charAt(index)) {
      shortenedCharacters.push(count.toString() + currentChar);
      count = 1;
      currentChar = value.charAt(index);
    } else {
      count++
    }
    index++;
  }
  shortenedCharacters.push(count.toString() + currentChar);

  return shortenedCharacters.join('');
}

function decodeString(value) {
  let decodedCharacters = [];
  let index = 0;
  while(index < value.length) {
    let characterCount = parseInt(value.charAt(index));
    let character = value.charAt(index + 1);
    decodedCharacters.push(...(new Array(characterCount)).fill(character));
    index += 2;
  }
  return decodedCharacters.join('');
}


function Test() {
  console.log(encodeString('AAAABBBCCDAA'));
  console.log(decodeString('4A3B2C1D2A'));
}

Test();