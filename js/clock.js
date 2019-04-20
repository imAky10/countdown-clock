setInterval(clock,1000)

function clock(){
	var now = new Date().getTime();
	var birthday = new Date("January 1, 2020, 00:00:00").getTime();
	var difference = birthday - now;

	var seconds = Math.floor(difference/1000);
	var minutes = Math.floor(seconds/60);
	var hours = Math.floor(minutes/60);
	var days = Math.floor(hours/24);

	hours%=24;
	minutes%=60;
	seconds%=60;




	if(hours<10){
		hours = "0"+hours;
	}
	if(minutes<10){
		minutes = "0"+minutes;
	}
	if(seconds<10){
		seconds = "0"+seconds;
	}


		var d = document.getElementById('day').innerHTML = days;
		var h = document.getElementById('hour').innerHTML = hours;
		var mi = document.getElementById('minute').innerHTML = minutes;
		var s = document.getElementById('second').innerHTML = seconds;

	}

