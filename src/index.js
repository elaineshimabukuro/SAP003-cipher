function btEncode (){
  let MessageCd = document.getElementById('MessageC').value.toUpperCase();
  let OffsetCd = Number(document.getElementById('offsetcd').value);
  let valcrypt = window.cipher.cipherEncode(MessageCd, OffsetCd)

  document.getElementById("MessageCd").value = valcrypt;
}

function btnDecode (){
  let MessageDc = document.getElementById('MessageD').value;
  let OffsetDc = document.getElementById('offsetdc').value;

  // ...

  document.getElementById("MessageDc").innerHTML = cipherDecode;
}
