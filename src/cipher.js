window.cipher = {
  encode: cipherEncode,
  decode: cipherDecode
};

function cipherEncode(offsetcd, MessageC) {
  let valcrypt = "";

  for (let i = 0; i < MessageC.length; i++) {
    let crypt = "";
    let newILetter = 0;
    let iLetter = MessageC[i].charCodeAt();

    if (iLetter === 32) {
      crypt = MessageC[i];
    }
    else if (64 >= iLetter && iLetter >= 33) {
      newILetter = (iLetter - 33 + offsetcd) % 32 + 33;
      crypt = String.fromCharCode(newILetter);
    }
    else if (90 >= iLetter && iLetter >= 65) {
      newILetter = (iLetter - 65 + offsetcd) % 26 + 65;
      crypt = String.fromCharCode(newILetter);
    }
    else if (96 >= iLetter && iLetter >= 91) { // sem cobertura de teste de unidade
      newILetter = (iLetter - 91 + offsetcd) % 6 + 91;
      crypt = String.fromCharCode(newILetter);
    }
    else if (122 >= iLetter && iLetter >= 97) {
      newILetter = (iLetter - 97 + offsetcd) % 26 + 97;
      crypt = String.fromCharCode(newILetter);
    }
    else if (126 >= iLetter && iLetter >= 123) { // sem cobertura de teste de unidade
      newILetter = (iLetter - 123 + offsetcd) % 4 + 123;
      crypt = String.fromCharCode(newILetter);
    }
    else { // sem cobertura de teste de unidade
      continue;
    }

    // concatenação das letras percorridas
    valcrypt = valcrypt + crypt;
  }

  return valcrypt;
}

function cipherDecode(offsetdc, MessageD) {
  let valDcrypt = "";

  for (let i = 0; i < MessageD.length; i++) {
    let Dcrypt = "";
    let newILetter = 0;
    let iLetter = MessageD[i].charCodeAt();

    if (MessageD[i] === " ") {
      Dcrypt = MessageD[i];
    }
    else if (64 >= iLetter && iLetter >= 33) {
      newILetter = (iLetter - 64 - offsetdc) % 32 + 64;
      Dcrypt = String.fromCharCode(newILetter);
    }
    else if (90 >= iLetter && iLetter >= 65) {
      newILetter = (iLetter - 90 - offsetdc) % 26 + 90;
      Dcrypt = String.fromCharCode(newILetter);
    }
    else if (96 >= iLetter && iLetter >= 91) { // sem cobertura de teste de unidade
      newILetter = (iLetter - 96 - offsetdc) % 6 + 96;
      Dcrypt = String.fromCharCode(newILetter);
    }
    else if (122 >= iLetter && iLetter >= 97) {
      newILetter = (iLetter - 122 - offsetdc) % 26 + 122;
      Dcrypt = String.fromCharCode(newILetter);
    }
    else if (126 >= iLetter && iLetter >= 123) { // sem cobertura de teste de unidade
      newILetter = (iLetter - 126 - offsetdc) % 4 + 126;
      Dcrypt = String.fromCharCode(newILetter);
    }
    else { // sem cobertura de teste de unidade
      continue;
    }

    // concatenação das letras percorridas
    valDcrypt = valDcrypt + Dcrypt;
  }

  return valDcrypt;
}
