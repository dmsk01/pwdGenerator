const ALPHABET_IN_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const ALPHABET_IN_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SPECIAL_SYMBOLS = "!?#$%&+*_-/@";

export function generateSymbolsList(config) {
  let list = ALPHABET_IN_LOWERCASE;
  list = config.numbers ? list + NUMBERS : list;
  list = config.capitalLetters ? list + ALPHABET_IN_UPPERCASE : list;
  list = config.specialSymbols ? list + SPECIAL_SYMBOLS : list;
  return list;
}

export function generatePassword(chars, length) {
  let pwd = "";
  for (let i = 0; i <= length; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    pwd += chars.substring(randomNumber, randomNumber + 1);
  }
  return pwd;
}
