var loop = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var timeoutOutput;
var stopWatchActive = false;

function startStopWatch() {
	if (stopWatchActive == false) {
		StopWatchLoop();
	}
}

function StopWatchLoop() {

	stopWatchActive = true;
	loop = loop + 1;
	if (loop == 10) {
		seconds = seconds + 1;
		if (seconds != 60) {
			if (seconds.toString().length == 2) { document.querySelector('#seconds').textContent = seconds; }
			else { document.querySelector('#seconds').textContent = '0' + seconds; }
		} else {
			document.querySelector('#seconds').textContent = '00';
		}
		document.querySelector('#miliseconds').textContent = '00';
		loop = 0;
	} else {
		document.querySelector('#miliseconds').textContent = '0' + loop;
	}

	if (seconds == 60) {
		minutes = minutes + 1;
		if (minutes != 60) {
			if (minutes.toString().length == 2) { document.querySelector('#minutes').textContent = minutes; }
			else { document.querySelector('#minutes').textContent = '0' + minutes; }
		} else {
			document.querySelector('#minutes').textContent = '00';
		}
		seconds = 0;
	}

	if (minutes == 60) {
		hours = hours + 1;
		if (hours.toString().length == 2) { document.querySelector('#hours').textContent = hours; }
		else { document.querySelector('#hours').textContent = '0' + hours; }
		minutes = 0;
		document.querySelector('#minutes').textContent = '00';
	}

	timeoutOutput = setTimeout(() => { StopWatchLoop(); }, 100);

}

function pauseStopWatch() {
	clearTimeout(timeoutOutput);
	stopWatchActive = false;
}

function resetStopWatch() {
	loop = 0;
	seconds = 0;
	minutes = 0;
	hours = 0;
	document.querySelector('#hours').textContent = '00';
	document.querySelector('#minutes').textContent = '00';
	document.querySelector('#seconds').textContent = '00';
	document.querySelector('#miliseconds').textContent = '00';
}

function showStartInDlg() {

	pauseStopWatch();

	document.querySelector('#fadeEffect').style.display = 'block';

	setTimeout(() => {
		document.querySelector('#fadeEffect').style.opacity = '0.7';
	}, 1);

	setTimeout(() => {
		document.querySelector('#startFromBox').style.top = '50%';
	}, 50);

	document.querySelector('#hourInputId').value = "0";
	document.querySelector('#minuteInputId').value = "0";
	document.querySelector('#secondInputId').value = "0";
	document.querySelector('#milisecondsInputId').value = "0";

}

function startOnStopWatch() {

	// Set Variables
	// loop;
	// seconds;
	// minutes;
	// hours;

	if (parseInt(document.querySelector('#hourInputId').value) < 0 || parseInt(document.querySelector('#hourInputId').value) == NaN) {
		hours = 0;
	} else {
		hours = parseInt(document.querySelector('#hourInputId').value);
	}

	if (parseInt(document.querySelector('#minuteInputId').value) < 0 || parseInt(document.querySelector('#hourInputId').value) == NaN) {
		minutes = 0;
	} else if (parseInt(document.querySelector('#minuteInputId').value) > 59) {
		minutes = 59;
	} else {
		minutes = parseInt(document.querySelector('#minuteInputId').value);
	}

	if (parseInt(document.querySelector('#secondInputId').value) < 0 || parseInt(document.querySelector('#secondInputId').value) == NaN) {
		seconds = 0;
	} else if (parseInt(document.querySelector('#secondInputId').value) > 59) {
		seconds = 59;
	} else {
		seconds = parseInt(document.querySelector('#secondInputId').value);
	}

	if (parseInt(document.querySelector('#milisecondsInputId').value) < 0 || parseInt(document.querySelector('#milisecondsInputId').value) == NaN) {
		loop = 0;
	} else if (parseInt(document.querySelector('#milisecondsInputId').value) > 9) {
		loop = 9;
	} else {
		loop = parseInt(document.querySelector('#milisecondsInputId').value);
	}

	// Set Graphical Display of the Time in the stopwatch

	if (hours.toString().length == 2) { document.querySelector('#hours').textContent = hours; }
	else { document.querySelector('#hours').textContent = '0' + hours; }

	if (minutes.toString().length == 2) { document.querySelector('#minutes').textContent = minutes; }
	else { document.querySelector('#minutes').textContent = '0' + minutes; }

	if (seconds.toString().length == 2) { document.querySelector('#seconds').textContent = seconds; }
	else { document.querySelector('#seconds').textContent = '0' + seconds; }

	document.querySelector('#miliseconds').textContent = '0' + loop;

	// Hide Message

	document.querySelector('#fadeEffect').style.opacity = '0';

	setTimeout(() => {
		document.querySelector('#fadeEffect').style.display = 'none';
	}, 250);

	setTimeout(() => {
		document.querySelector('#startFromBox').style.top = '150%';
	}, 50);

	// Start Stopwatch After 280ms

	setTimeout(() => { StopWatchLoop(); }, 280);

}

function closeStartOnDlg() {

	document.querySelector('#fadeEffect').style.opacity = '0';

	setTimeout(() => {
		document.querySelector('#fadeEffect').style.display = 'none';
	}, 250);

	setTimeout(() => {
		document.querySelector('#startFromBox').style.top = '150%';
	}, 50);

	setTimeout(() => { StopWatchLoop(); }, 280);

}