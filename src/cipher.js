window.cipher = {
  encode: cipherEncode,
  decode: cipherDecode
};

function cipherEncode(offsetcd, MessageC) {
  let valcrypt = "";

  for (let i=0; i<MessageC.length; i++) {
    let newChar = "";

    if (MessageC[i] === " ") {
      newChar = MessageC[i];
    }
    else {
      let iLetter = MessageC[i].charCodeAt();
      let newILetter = (iLetter - 32 + offsetcd) % 93 + 32;
      let crpty = String.fromCharCode(newILetter);

      newChar = crpty;
    }
    // concatenação das letras percorridas
    valcrypt = valcrypt + newChar;
  }

  return valcrypt;
}

function cipherDecode(offsetdc, MessageD) {
  let valDcrypt = "";

  for (let i=0; i<MessageD.length; i++) {
    let newCharD = "";

    if (MessageD[i] === " ") {
      newCharD = MessageD[i];
    }
    else {
      let iLetter = MessageD[i].charCodeAt();
      let newILetter = (iLetter - 126 - offsetdc) %93 + 126;
      let decrpty = String.fromCharCode(newILetter);

      newCharD = decrpty;
    }
    /*concatenação das letras percorridas*/
    valDcrypt = valDcrypt + newCharD;
  }

  return valDcrypt;

}
