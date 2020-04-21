BinToDec = (StringOfNums) => parseInt(StringOfNums, 2).toString(10);
BinToHex = (StringOfNums) => parseInt(StringOfNums, 2).toString(16);
DecToBin = (StringOfNums) => parseInt(StringOfNums, 10).toString(2);
DecToHex = (StringOfNums) => parseInt(StringOfNums, 10).toString(16);
HexToBin = (StringOfNums) => parseInt(StringOfNums, 16).toString(2);
HexToDec = (StringOfNums) => parseInt(StringOfNums, 16).toString(10);
resetForm = (className) => {
  document.querySelector("."+className+" input").value="";

  document.querySelectorAll("."+className+ " textarea").forEach(element => element.innerHTML="");
};
switchingConverter = (element) => {
  // get all button and remove the active state
  document.querySelectorAll("section button").forEach(eachButton => eachButton.classList.remove("selected"));

  // add active state to the current element (this)
  element.classList.add("class","selected");

  // .slice(-1): Get the last character
  let formClassName = "form-"+element.id.slice(-1);

  // get all form and hide all
  document.querySelectorAll(".form-submit").forEach(eachForm => eachForm.classList.add("hide"));

  // get the right form and display it
  document.getElementsByClassName(formClassName)[0].classList.remove("hide");

}


// ***************************** BIN ONCLICK *****************************
document.getElementById("convertBin").onclick = ()=> 
{
  let bin=document.getElementById("inputBinary").value;
  if(bin.search(/^[10]+$/) != -1)
  {

	document.getElementById("BinToHexOutput").innerHTML = BinToHex(bin);
	document.getElementById("BinToDecOutput").innerHTML = BinToDec(bin);
  }
  else alert("The number is not a binary number");
};



// ***************************** DEC ONCLICK *****************************
document.getElementById("convertDec").onclick = ()=> 
{
  let dec=parseInt(document.getElementById("inputDecimal").value);
  if(Number.isInteger(dec))
  {
	document.getElementById("DecToHexOutput").innerHTML = DecToHex(dec);
	document.getElementById("DecToBinOutput").innerHTML = DecToBin(dec);
  }
  else alert("The number is not a decimal number");
};



// ***************************** HEX ONCLICK *****************************
document.getElementById("convertHex").onclick = ()=> 
{
  let hex=document.getElementById("inputHexadecimal").value;
  if(parseInt(hex,16).toString(16) === hex.toLowerCase())
  {

	document.getElementById("HexToBinOutput").innerHTML = HexToBin(hex);
	document.getElementById("HexToDecOutput").innerHTML = HexToDec(hex);
  }
  else alert("The number is not a hexadecimal number");
};