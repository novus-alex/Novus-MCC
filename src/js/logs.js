$(document).ready(function() {
	loadLogs();
})

function loadLogs() {
	setInterval(function() {
		document.getElementById('logs_txt').src = "../../logs/logs.txt";
	}, 60000);
}