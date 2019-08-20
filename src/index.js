function btEncode (){
  let MessageCd = document.getElementById('MessageC').value;
  let OffsetCd = document.getElementById('offsetcd').value;

  // ...

  document.getElementById("MessageCd").innerHTML = cipherEncode;
}

function btnDecode (){
  let MessageDc = document.getElementById('MessageD').value;
  let OffsetDc = document.getElementById('offsetdc').value;

  // ...

  document.getElementById("MessageDc").innerHTML = cipherDecode;
}
