function analyze(){
	var sub1 = parseInt(document.getElementById('inputMath').value);
	var sub2 = parseInt(document.getElementById('inputSci').value);
	var sub3 = parseInt(document.getElementById('inputSS').value);
	var avg = (sub1+sub2+sub3)/3;
	var avg2 = avg.toFixed(2);

	if (avg>=70 && avg<=74.99){
		
		window.alert("Your average is " + avg2 + " - Poor");
	
	} else if (avg>=75 && avg<=79.99){

		window.alert("Your average is " + avg2 + " - Needs Improvement");
	
	} else if (avg>=80 && avg<=86.99){

		window.alert("Your average is " + avg2 + " - Satisfactory");

	} else if (avg>=87 && avg<=93.99){

		window.alert("Your average is " + avg2 + " - Above Satisfactory");
	
	} else if (avg>=94 && avg<=100){

		window.alert("Your average is " + avg2 + " - Excellent");
	}
}

window.alert("📖 LOADING 📖")