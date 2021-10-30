$(document).ready(function() {
	document.getElementById('content').src = "dashboard/overview.html";
	startTime();
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

function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =  "GMT+2 - " + h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
