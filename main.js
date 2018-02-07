var count = 0;
var total = 0;

function add(){
	count = document.getElementById("TEXTBOX_ID").value;
	count++;
	document.getElementById("TEXTBOX_ID").value = count;
}

function minus(){
	if(count > 0){
		count = document.getElementById("TEXTBOX_ID").value;
		count--;
		document.getElementById("TEXTBOX_ID").value = count;
	}else{
		count = 0;
	}
}

function Final(){
	total = document.getElementById("TEXTBOX_ID").value;
    alert("您點的數量為: " + total);
}
