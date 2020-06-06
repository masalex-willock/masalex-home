// JavaScript Document

//alert('alex is really cool at his stuff that he does on his computer')
function clicked(){
	alert('you really just clicked it')
	let weight = Number(prompt('Enter your weight in kilos', 40)), BMI;
	let height = Number(prompt('enter your in metres eg 1.65', 1.65));
	BMI = weight / (height * height);
	if(BMI < 18) return alert(`your BMI is ${Math.round(BMI)} \n need to begin eating enough because that BMI is low`);
	else if(BMI >= 18 && BMI < 27) return alert(`your BMI is ${Math.round(BMI, 2)}, \n congratulations bacause your within normal ranges, keep-up`);
	else return alert(`your BMI is ${Math.round(BMI, 2)} ☁ \nNo offence but your really fat\n cut down on the carbohydrate that you eat then for christ\'s sake do some exercise'`)
}