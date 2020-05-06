// JavaScript Document

//alert('alex is really cool at his stuff that he does on his computer')
function clicked(){
	alert('you really just clicked it')
	let weight = Number(prompt('Enter your weight in kilos', 40)), BMI;
	let height = Number(prompt('enter your in metres eg 1.65', 1.65));
	BMI = weight / (height * height);
	
	return alert(`your BMI is ${Math.floor(BMI, 2)}`)
}