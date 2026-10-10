const { NotImplementedError } = require("../lib");

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
  constructor(isDirect) {
    this.isDirect = isDirect !== false;
  }
  encrypt(message, key) {
    if (arguments.length < 2 || message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const msgUpper = String(message).toUpperCase();
    const keyUpper = String(key).toUpperCase();

    if (keyUpper.length === 0) return msgUpper;

    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < msgUpper.length; i++) {
      const charCode = msgUpper.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const msgIdx = charCode - 65;

        const keyCharIdx = keyIndex % keyUpper.length;
        const keyIdx = keyUpper.charCodeAt(keyCharIdx) - 65;

        const encryptedIdx = (msgIdx + keyIdx) % 26;

        result.push(String.fromCharCode(encryptedIdx + 65));
        keyIndex++;
      } else {
        result.push(msgUpper[i]);
      }
    }

    const finalString = result.join("");
    return this.isDirect
      ? finalString
      : finalString.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (arguments.length < 2 || message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    const msgUpper = String(message).toUpperCase();
    const keyUpper = String(key).toUpperCase();

    if (keyUpper.length === 0) return msgUpper;

    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < msgUpper.length; i++) {
      const charCode = msgUpper.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
        const msgIdx = charCode - 65;

        const keyCharIdx = keyIndex % keyUpper.length;
        const keyIdx = keyUpper.charCodeAt(keyCharIdx) - 65;

        const decryptedIdx = (msgIdx - keyIdx + 26) % 26;

        result.push(String.fromCharCode(decryptedIdx + 65));
        keyIndex++;
      } else {
        result.push(msgUpper[i]);
      }
    }

    const finalString = result.join("");
    return this.isDirect
      ? finalString
      : finalString.split("").reverse().join("");
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
