import { Cryptography } from "./cryptography.js";

// @type {HTMLInputElement}
let textInput = document.querySelector("#plain-text");
let decryptOutput = document.querySelector("#decrypt-output-text");
let encryptButton = document.querySelector("#encrypt-button");
let decryptButton = document.querySelector("#decrypt-button");
let copyButton = document.querySelector("#copy-button");
let noneDecryptedContainer = document.querySelector(".none-decrypted");
let decryptContainer = document.querySelector(".decrypt-output");
let validationMessage = document.querySelector(".alert");

//
encryptButton.addEventListener("click", handleEncrypt);
decryptButton.addEventListener("click", handleDecrypt);
copyButton.addEventListener("click", handleCopy);

//
function handleEncrypt() {
  let text = textInput.value;
  if (!text) return;

  if (text.match(/[^a-z0-9 !?]/g)) {
    validationMessage.style.display = "flex";
    alert("Apenas letras minúsculas e sem acento");
    return;
  }
  validationMessage.style.display = "none";
  text = text.toLowerCase();
  let decryptedText = Cryptography.encrypt(text);
  decryptContainer.style.display = "flex";
  noneDecryptedContainer.style.display = "none";
  document.querySelector(".decrypt-output-text").value = decryptedText;
}

function handleDecrypt() {
  let text = textInput.value;
  if (!text) return;
  if (text.match(/[^a-z0-9 !?]/g)) {
    validationMessage.style.display = "flex";
    alert("Apenas letras minúsculas e sem acento");
    return;
  }
  validationMessage.style.display = "none";
  let decryptedText = Cryptography.decrypt(text);
  decryptOutput.value = decryptedText;
  decryptContainer.style.display = "flex";
  noneDecryptedContainer.style.display = "none";
}

function handleCopy() {
  decryptOutput.select();
  decryptOutput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(decryptOutput.value);
  document.getSelection().removeAllRanges();
}
