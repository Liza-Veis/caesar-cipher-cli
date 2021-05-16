const { ALPHABET } = require('./constants');

const alphabetLength = ALPHABET.length;

const getNewAlphabetChar = (char, shift) => {
  const charIndex = ALPHABET.indexOf(char);
  let newCharIndex = charIndex + shift;

  if (newCharIndex > alphabetLength - 1) {
    newCharIndex = shift - (alphabetLength - charIndex);
  } else if (newCharIndex < 0) {
    newCharIndex += alphabetLength;
  }

  return ALPHABET[newCharIndex];
};

const applyCipher = (data, shift) => {
  let actualShift = shift;

  if (Math.abs(shift) > alphabetLength) {
    actualShift = shift % alphabetLength;
  }

  return data
    .split('')
    .map((char) => {
      const lowerChar = char.toLowerCase();

      if (ALPHABET.includes(lowerChar)) {
        const newChar = getNewAlphabetChar(lowerChar, actualShift);

        return char === lowerChar ? newChar : newChar.toUpperCase();
      }

      return char;
    })
    .join('');
};

module.exports = {
  applyCipher,
};
