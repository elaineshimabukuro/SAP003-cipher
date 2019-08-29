window.cipher = {
  encode: cipherEncode,
  decode: cipherDecode
};

function cipherEncode(offsetcd, MessageC) {
  let valcrypt = "";

  for (let i=0; i<MessageC.length; i++) {
    let newChar = "";
    let iLetter = MessageC[i].charCodeAt();

    if (MessageC[i] === " ") {
      newChar = MessageC[i];
    }
     else if (64>=iLetter>=33) {
       let newILetter = (iLetter - 33 + offsetcd) % 32 + 33;
       let crpty = String.fromCharCode(newILetter);
     }
      else if (90>=iLetter>=65) {
         let newILetter = (iLetter - 65 + offsetcd) % 26 + 65;
         let crpty = String.fromCharCode(newILetter);
      }
        else if (96>=iLetter>=91) {
          let newILetter = (iLetter - 91 + offsetcd) % 6 + 91;
          let crpty = String.fromCharCode(newILetter);
        }
          else if (122>=iLetter>=97) {
            let newILetter = (iLetter - 97 + offsetcd) % 26 + 97;
            let crpty = String.fromCharCode(newILetter);
          }
          else (126>=iLetter>=123); {
            let newILetter = (iLetter - 123 + offsetcd) % 4 + 123;
            let crpty = String.fromCharCode(newILetter);
          }

      newChar = crpty;
    }
    // concatenação das letras percorridas
    valcrypt = valcrypt + newChar;
  }
  console.log(valcrypt);



    /*if (MessageC[i] === " ") {
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
}*/

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
