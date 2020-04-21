	// get the component that has id=file1 which is <input type="file" id="file1" ...>
var fileUpload1 = document.getElementById("file1");
console.log(fileUpload1.value);
var fileUpload2 = document.getElementById("file2");

// get the component with id =nameOfFile1 which is <p id="nameOfFile1">innerHTML</p>
var file1Tag= document.getElementById("nameOfFile1");
console.log(file1Tag);
var file2Tag= document.getElementById("nameOfFile2");
var uploadBtn1 = document.getElementById("uploadFileBtn1");
var uploadBtn2 = document.getElementById("uploadFileBtn2");

var content1=document.getElementById("content1");
var content2=document.getElementById("content2");
var temp;
const MAX_SIZE_ALLOWED = 2*1024;//2KB

// validate selected file's type
function validateFileType(fileName){
	var allowed_types = [ 'txt' ];
	// get the extenstion, split the file into an array, pop the last element from the array. 
	var ext=fileName.split('.').pop();

	if(allowed_types.indexOf(ext) == -1) {
		alert('Error : Incorrect file type');
		return 0;
	}
	return 1;
}

//validate uploaded file's size
function validateFileSize(fileSize){
	if(fileSize > MAX_SIZE_ALLOWED) {
	alert('Error : Exceeded size ' + MAX_SIZE_ALLOWED + " max bytes");
	return 0;
	}
	return 1;
}


// if UPLOAD1 Button is clicked, the click on the component with id=fileUpload1.
uploadBtn1.onclick = function () {
	fileUpload1.click();
};
uploadBtn2.onclick = function() {
	fileUpload2.click();
}
fileUpload1.onchange = function () {  
	// get fileName from file1

	var fileName=getFileName();
	//validate the uploaded file
	if(validateFileType(fileName) && validateFileSize(event.target.files[0].size)){
			//display selected fileName
			file1Tag.innerHTML = "<b>Selected File: </b>" + fileName;
			//clear TextArea1 when new file is loaded
			clearContents(content1);
			//load content of uploaded file to textArea1
			const reader= new FileReader();
			reader.addEventListener('load',function() {
				confirm(event.target.result);
				content1.value=event.target.result;
			});
			reader.readAsText(event.target.files[0]);
	}
};




	// need to remove redundant code here. using validateAndLoadContentFunction
fileUpload2.onchange = function () {
	var fileName = getFileName();
	//validate the uploaded file
	if(validateFileType(fileName) && validateFileSize(event.target.files[0].size)){
			 file2Tag.innerHTML = "<b>Selected File: </b>" + fileName;
			 const reader= new FileReader();
			 clearContents(content2);
			reader.addEventListener('load',function() {
				content2.value=event.target.result;
			});
			reader.readAsText(event.target.files[0]);
	}


};   

//**************** get uploaded file's name ****************
function getFileName(){
	console.log(fileUpload1.value.split('\\')[1]); //split the whole path into subelements and store it into an array. The last element in the array is the fileName
	return event.target.value.split('\\')[event.target.value.split('\\').length - 1];//split the last element of the file pathy
}

//**************** clear TextArea ****************
function clearContents(element) {
	 element.value = '';
}
function validateAndLoadContent(event, elementId){
	if(validateFileType(fileName) && validateFileSize(event.target.files[0].size)){
			 file1Tag.innerHTML = "<b>Selected File: </b>" + fileName;
			 const reader= new FileReader();
			reader.addEventListener('load',function() {
				document.getElementById(elementId).textContent=event.target.result;
			});
			reader.readAsText(event.target.files[0]);
	}
}

function compareFiles(){
   if(checkValidComparision()){
		var str1="<p>";
		var str2="<p>";
		var misMatch=0;
		var minLen=content1.value.length;
		var i;

		if(content1.value.length < content2.value.length){
			document.getElementById("length1").innerHTML = "<h2 style=\"color:red\">String 1 is shorter than String 2</h3>";
		}
		else if (content1.value.length > content2.value.length){
			minLen=content2.value.length;
			document.getElementById("length2").innerHTML = "<h2 style=\"color:red\">String 2 is greater than String 1</p>";
		}
		
		for(i=0; i < minLen;i++){
			if(content1.value[i] != content2.value[i]){
				str1=str1+"<strong style=\"color:red\">"+content1.value[i]+"</strong>";
				str2=str2+"<strong style=\"color:orange\">"+content2.value[i]+"</strong>";
				misMatch++;
			}
			else{
				str1=str1+content1.value[i];
				str2=str2+content2.value[i];
			}
			
		}
		if(content1.value.length -1 >i){
			while(i<content1.value.length){
				str1=str1+"<strong style=\"color:red\">"+content1.value[i]+"</strong>"; 
				i++;
			}
		}
		if(content2.value.length -1 >i){
			while(i<content2.value.length){
				str2=str2+"<strong style=\"color:red\">"+content2.value[i]+"</strong>"; 
				i++;
			}
		}
		str1=str1+"</p>";
		str2=str2+"</p>";
		document.getElementById("str1").innerHTML=str1;
		document.getElementById("str2").innerHTML=str2;
   }

}

function compareLength(){
	if(content1.value.length != content2.value.length){
		   confirm("Length of these files are not equal");
		   return 0;
	}
}

function checkValidComparision(){
	if(content1.value == ""){
		alert("Please provide the first content!");
		return 0;
	}
	if(content2.value == ""){
		alert("Please provide the second content!");
		return 0;
	}
	console.log(content1.value.length);
	confirm("valid");
	return 1;
}
