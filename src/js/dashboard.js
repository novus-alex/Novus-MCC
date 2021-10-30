$(document).ready(function() {
	document.getElementById('content').src = "dashboard/overview.html";
	dashboardHandler();
})

function dashboardHandler(e) {
	switch (e.innerText.trim()) {
		case ("Overview"):
			removeActive();
			e.classList.add("active");
			document.getElementById('content').src = "dashboard/overview.html";
			break;
		case ("RF Settings"):
			removeActive();
			e.classList.add("active");
			document.getElementById('content').src = "dashboard/rf_settings.html";
			break;
		case ("UART Settings"):
			removeActive();
			e.classList.add("active");
			document.getElementById('content').src = "dashboard/uart_settings.html";
			break;
		case ("Chart Settings"):
			removeActive();
			e.classList.add("active");
			document.getElementById('content').src = "dashboard/chart_settings.html";
			break;
		case ("Logs"):
			removeActive();
			e.classList.add("active");
			document.getElementById('content').src = "dashboard/logs.html";
			break;
		default:
			document.getElementById('content').src = "dashboard/overview.html";

		console.log(e.innerText.trim())
	}
}

function removeActive() {
	var links = document.querySelectorAll('.nav-link');
	for (var i = 0; i < links.length; i++) {
		links[i].classList.remove('active')
	}
}
