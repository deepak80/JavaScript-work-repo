// JavaScript Upload funtionality coding..

/*function uploadNow(getEvent) {
	//Also can be work same with this funtion.
}
*/

var uploadNow = function(getEvent){
	"use strict";
	var getObjectOfInputElement = getEvent.target;
	//alert(getObjectOfInputElement); return object reference of HTML element 
	var fileReaderObject = new FileReader();
	//  alert(fileReaderObject); return object reference value of file reader.
	fileReaderObject.onload = function(){
		var videoFileName = fileReaderObject.result;
		//alert(videoFileName); return nothing
		document.getElementById('videoId').src = videoFileName;
	};

	fileReaderObject.readAsDataURL(getObjectOfInputElement.files[0]); //return complete Data about video.
};