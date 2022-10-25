

function button(a) {

		document.getElementById("display").value += a;
	

	
}



function buttonclear() {
	document.getElementById('display').value = " ";
	temp = []
}
var temp = [];

function calculate() {


	var answer = 0;

	if (document.getElementById("display").value.includes("+")) {
		temp = document.getElementById("display").value.split('+');
		console.log(temp);
		for (let i in temp) {
			answer += parseFloat(temp[i])

		}

		return answer
	}

	else if (document.getElementById("display").value.includes("-")) {
		temp = document.getElementById("display").value.split('-');
		     
		const subtract = (accumulator, number )=> accumulator - number;
		answer = temp.reduce(subtract)
		return answer  
	}

	else if (document.getElementById("display").value.includes("/")) {
		temp = document.getElementById("display").value.split('/');
		return answer = parseFloat(temp[0]) / parseFloat(temp[1]);
	}

	else {
		temp = document.getElementById("display").value.split('*');

		answer = 1
		for (let i in temp) {

			answer *= parseFloat(temp[i])

		}
		return answer
	} 


}



function sol() {
	// console.log(temp);
	// if(!temp[0]){
	// 	document.getElementById('display').value = 0;
	// 	setTimeout(()=>{
	// 		document.getElementById('display').value = "";
			
	// 	},500)
	// 	temp=[]
	// }
	// else{
		
	// }
	var a = calculate()
	document.getElementById('display').value = a;
	temp.push(a);

}




