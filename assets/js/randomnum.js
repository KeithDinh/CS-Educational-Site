
randomWholeNumber = (min, max) => {return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));}
randomDecimal = (min, max) => {return (Math.random() * (max - min + 1) + min).toFixed(2);}
document.getElementById("submit").onclick = () => 
{
  let [amount,from,to] = [document.getElementById("num").value,
  parseInt(document.getElementById("from").value),
  parseInt(document.getElementById("to").value)]

  if(!amount || !from || !to)
	alert("Please input number")
  else if (to < from)
	alert("The start number must be less than the end number. Please re-input!");
  else if(amount > 10000 && amount <0)
	alert("The amount of number must be in range 0 to 10000");
  else if(to >  Math.pow(10,9) || from < -Math.pow(10,9))
	alert("The range is restricted within -10e+9 to 10e+9")
  else if (document.getElementById("whole_number").checked) 
  {
	document.getElementById("output").innerHTML = "";
	for (let i = 0; i < amount; i++) {
	  document.getElementById("output").append(randomWholeNumber(from, to) + ' ');
	}
  } 
  else if (document.getElementById("decimal").checked) 
  {
	document.getElementById("output").innerHTML = "";
	for (let i = 0; i < amount; i++) {
	  document.getElementById("output").append(randomDecimal(from, to) + ' ');
	}
  }
}
