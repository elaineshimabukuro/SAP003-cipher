/*função do botão de Codificar*/
document.getElementById("buttonCD").addEventListener("click", btEncode);

function btEncode() {
  let MessageCd = document.getElementById("MessageC").value.toUpperCase();
  let OffsetCd = Number(document.getElementById("offsetcd").value);
  let valcrypt = window.cipher.encode(OffsetCd, MessageCd);

  document.getElementById("valcrypt").innerHTML = valcrypt;
}

/*função do botão de Decodificar*/
document.getElementById("buttonDC").addEventListener("click", btDecode);

function btDecode() {
  let MessageDc = document.getElementById("MessageD").value.toUpperCase();
  let OffsetDc = Number(document.getElementById("offsetdc").value);
  let valDcrypt = window.cipher.decode(OffsetDc, MessageDc);

  document.getElementById("valDcrypt").innerHTML = valDcrypt;
}
