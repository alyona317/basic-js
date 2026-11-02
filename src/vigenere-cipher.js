const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    return this.process(message, key, 1);
  }

  decrypt(encryptedMessage, key) {
    return this.process(encryptedMessage, key, -1);
  }

  process(text, key, direction) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    const CODE_A = 65;
    const ALPHABET_SIZE = 26;
    const upperKey = key.toUpperCase();
    let keyIndex = 0;

    // The key only moves forward on latin letters, other symbols stay as they are
    const result = text.toUpperCase().replace(/[A-Z]/g, (letter) => {
      const letterShift = letter.charCodeAt(0) - CODE_A;
      const keyShift = upperKey.charCodeAt(keyIndex % upperKey.length) - CODE_A;
      keyIndex++;

      const shifted = (letterShift + direction * keyShift + ALPHABET_SIZE) % ALPHABET_SIZE;
      return String.fromCharCode(CODE_A + shifted);
    });

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
