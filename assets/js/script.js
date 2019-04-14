function submitAnswers() {
	var total = 5;
	var score = 0;
	// var count = 15;


	// Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	// Validation Questions
	for (i = 1; i <= total; i++) {
		if (eval('q' + i) == null || eval('q' + i) == '') {
			alert('You missed question ' + i);
			return false;
		}
	}

	// Quiz answers
	var answers = ["a", "d", "b", "d", "c"];

	// Check Quiz
	for (i = 1; i <= total; i++) {
		if (eval('q' + i) == answers[i - 1]) {
			score++;
		}
	}

	// Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3>You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	alert('You scored '+score+' out of ' +total);
	$("#results02").text(score);
	return false;

// Timer that did not work.  I tried to place the results with in 
// the timer function hoping to activate the results to display after the timer expired.

	// var sec = 15;
	// var time = setInterval(myTimer, 1000);

	// function myTimer() {
	// 	document.getElementById('timer').innerHTML = sec + "sec left";
	// 	sec--;
	// 	if (sec == -1) {

	// 		var results = document.getElementById('results');
	// 		results.innerHTML = '<h3>You scored <span>' + score + '</span> out of <span>' + total + '</span></h3>';
	// 		alert('You scored ' + score + ' out of ' + total);
	// 		$("#results02").text(score);
	// 		return false;
	// 	}
	// }

}

// I still added te timer but it does not afffecr the quiz unfortunately

var sec = 15;
var time = setInterval(myTimer, 1000);
function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time out!! :(");
    }
}