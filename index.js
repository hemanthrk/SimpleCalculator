
$(document).ready(function(){

	var grid = document.getElementById("grid");
	var display = document.getElementsByClassName("displayBox");


var arr=[123,12,123,3423,12,323];
//console.log(arr.toString());

function add(a,b){return a+b;}

function multiply(a,b){ return a*b;}

function divide(a,b){ return a/b; }

function subtract(a,b) { return a-b; }

function remainder(a,b){ return a%b; }

var aval = [], bval=[], sign;
grid.addEventListener('click',function(e){
	console.log(e.target);
	if(e.path[0].id != "grid"){
		var inp = e.target.innerHTML;
	
	if(inp != " " && inp != 'x' && inp != '/' && inp != '+' && inp != '-' && inp !== '%' && inp != '=' && !sign)
	{
		aval.push(inp);
		var temp = parseFloat(aval.join(""));
		display[0].value = temp;
	}else if(inp === '+' || inp === 'x'|| inp === '/' || inp === '-' || inp === '%' && aval.length >0){
		
		sign = inp;
		display[0].value="";
	}else if( inp != " " && inp != '*'&& inp != '/' && inp != '+' && inp != '-' && inp != '%' && inp != '=' && inp !== "AC" ){
		bval.push(inp);

		var temp = parseFloat(bval.join(""));
		display[0].value = temp;
	}else if( inp === '=' && aval.length >0 && bval.length >0 && sign){
		display[0].value = "";
		if(sign === '+'){
			//console.log(add(parseFloat(aval.join("")),parseFloat(bval.join(""))));
			display[0].value = add(parseFloat(aval.join("")),parseFloat(bval.join("")));
		}
		else if(sign === '-'){
			//console.log(subtract(parseFloat(aval.join("")),parseFloat(bval.join(""))));
			display[0].value = subtract(parseFloat(aval.join("")),parseFloat(bval.join("")));
		}
		else if(sign === 'x'){
			//console.log(multiply(parseFloat(aval.join("")),parseFloat(bval.join(""))));
			display[0].value = multiply(parseFloat(aval.join("")),parseFloat(bval.join("")));
		}
		else if(sign === '/'){
			//console.log(remainder(parseFloat(aval.join("")),parseFloat(bval.join(""))));
			display[0].value = divide(parseFloat(aval.join("")),parseFloat(bval.join("")));
		}else if(sign === '%'){
			//console.log(remainder(parseFloat(aval.join("")),parseFloat(bval.join(""))));
			display[0].value = remainder(parseFloat(aval.join("")),parseFloat(bval.join("")));
		}
	}else if (e.target.attributes['data-value'].value === "clear") {
		aval = [];
		bval=[];
		sign="";
		display[0].value="";
	}
	console.log("aval is",aval);
	console.log("sign is ",sign);
	console.log("bval is",bval);


	}//check if click is on 'grid' div and avoid
	
});






});
