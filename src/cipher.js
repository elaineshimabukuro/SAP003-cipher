window.cipher = {
  cipherEncode :function (MessageC, offsetcd) {
    let valcrypt = ""

    for(let i=0; i<MessageC.length; i++){
      let iLetter = MessageC[i].charCodeAt();
      let newILetter = (iLetter - 65 + offsetcd) % 26 + 65;
      let crpty =  String.fromCharCode(newILetter);

/*concatenação das letras percorridas*/
      valcrypt = valcrypt + crpty;

    }

    return valcrypt
  },

  cipherDecode:function (MessageD, offsetdc){
    let valDcrypt = ""

    for(let i=0; i<MessageD.length; i++){
      let iLetter = MessageD[i].charCodeAt();
      console.log(iLetter)
      let newILetter = (iLetter - 90 - offsetdc) %26 + 90;
      let decrpty =  String.fromCharCode(newILetter);

/*concatenação das letras percorridas*/
      valDcrypt = valDcrypt + decrpty;
  }

    return valDcrypt;
}
}
