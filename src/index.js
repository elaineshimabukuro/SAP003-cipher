function btEncode (){
  let MessageCd = document.getElementById('MessageC').value.toUpperCase();
  let OffsetCd = Number(document.getElementById('offsetcd').value);
  let valcrypt = window.cipher.cipherEncode(MessageCd, OffsetCd)

  document.getElementById("MessageCd").value = valcrypt
}

function btDecode (){
  let MessageDc = document.getElementById('MessageD').value.toUpperCase();
  let OffsetDc = Number(document.getElementById('offsetdc').value);
  let valDcrypt = window.cipher.cipherDecode(MessageDc, OffsetDc)


  document.getElementById("MessageDc").value = valDcrypt
}
