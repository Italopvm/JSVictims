function victimExercise(){
	var numLoop = prompt('how many victims are you going to enter');

	var vicName = [];
	var vicNum = [];
	var vicAddress = [];

	for(var i = 1; i <= numLoop; i++){
	// i is the counter, starts at 0 and counts until it hit the number of victims user enters
		var name = prompt('please enter the name of victim number '+ i);
		vicName.push(name);

		var number =prompt('please enter number of victim number '+ i);
		vicNum.push(number);

		var address = prompt('please enter address of victim number '+ i);
		vicAddress.push(address);
	}

	
	var volName = [];
	var volNum   = [];

	var volNum = prompt('how many volunteers');
	for(var j = 1; j <= volNum; j++ ){

		var name2 = prompt('please enter the name of volunteer number ' + j);
		volName.push(name2);

		var number2 =prompt('please enter phone number of volunteer number ' + j);
		volNum.push(number2);
	}
	
	alert('Number of victims: ' + numLoop + '\nNumber of volunteers: '+ volNum +
       '\nAll victims: ' + vicName + '\nAll volunteers: ' + volName)
}
victimExercise();




















