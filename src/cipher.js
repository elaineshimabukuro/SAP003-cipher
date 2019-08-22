window.cipher = {
  cipherEncode:function (MessageC, offsetcd){
    let valcrypt = ""

    for(let i=0; i<MessageC.length; i++){
      let iLetter = MessageC[i].charCodeAt();
      let newILetter = (iLetter - 65 + offsetcd) % 26 + 65;
      let crpty =  String.fromCharCode(newILetter)


      valcrypt = valcrypt + crpty;

    }

    return valcrypt
  },
  cipherDecode:function (MessageD, offsetdc){

  }
}
