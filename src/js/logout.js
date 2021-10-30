$(document).ready(function() {
	const logout = document.getElementById('logout');
	logout.addEventListener("submit", async (event) => {
		event.preventDefault();
		window.location.replace('index.html');
	})
})