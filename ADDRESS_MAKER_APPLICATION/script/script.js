// first task function start
function show(){

	var firstValue = document.getElementById("first").value;
	var lastValue = document.getElementById("last").value;
	document.write("Your name is:" + firstValue +" "+ lastValue);
}
// first task function end

function make_address(){
	var getTextFiledValue = document.getElementById("text").value;
	var getNameFiledValue = document.getElementById("name_2").value;
	var getNum1FiledValue = document.getElementById("number_1").value;
	var getNum2FiledValue = document.getElementById("number_2").value;
	var getEmaiTextFiledValue = document.getElementById("email").value;
	var getAddressFiledValue = document.getElementById("address").value;
	document.getElementById("inner_h2").innerHTML = getTextFiledValue; 
	document.getElementById("inner_parent_para").innerHTML = getNameFiledValue;
	document.getElementById("inner_right_one_para").innerHTML  = getNum1FiledValue;
	document.getElementById("inner_right_two_para").innerHTML = getNum2FiledValue;
	document.getElementById("inner_email_para").innerHTML = getEmaiTextFiledValue;
	document.getElementById("inner_info_para").innerHTML = getAddressFiledValue;
}

function bold(){
	var getInfoPara = document.getElementById("inner_info_para");
	var getEmailPara = document.getElementById("inner_email_para");
	var getParentPara = document.getElementById("inner_parent_para");
	getInfoPara.style.fontWeight="bold";
	getEmailPara.style.fontWeight="bold";
	getParentPara.style.fontWeight="bold";
}

function italic(){
	var getInfoPara = document.getElementById("inner_info_para");
	var getEmailPara = document.getElementById("inner_email_para");
	var getParentPara = document.getElementById("inner_parent_para");
	getInfoPara.style.fontStyle="italic";
	getEmailPara.style.fontStyle="italic";
	getParentPara.style.fontStyle="italic";
	
}

function undo(){
	var getInfoPara = document.getElementById("inner_info_para");
	var getEmailPara = document.getElementById("inner_email_para");
	var getParentPara = document.getElementById("inner_parent_para");
	getInfoPara.style.fontWeight="normal";
	getInfoPara.style.fontStyle="normal";
	getEmailPara.style.fontWeight="normal";
	getEmailPara.style.fontStyle="normal";
	getParentPara.style.fontWeight="normal";
	getParentPara.style.fontStyle="normal";
}



