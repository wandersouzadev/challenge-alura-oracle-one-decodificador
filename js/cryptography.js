export class Cryptography {
  static #encryptRules = {
    a: "ai",
    e: "enter",
    i: "imes",
    o: "ober",
    u: "ufat",
  };

  static #decryptRules = {
    ai: "a",
    enter: "e",
    imes: "i",
    ober: "o",
    ufat: "u",
  };

  static encrypt(text) {
    return text.replaceAll(/[aeiou]/g, (letter) => this.#encryptRules[letter]);
  }

  static decrypt(text) {
    return text.replace(
      /ai|enter|imes|ober|ufat/g,
      (letter) => this.#decryptRules[letter]
    );
  }
}
