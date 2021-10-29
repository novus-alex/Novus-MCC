const logout = document.getElementById('logout')
logout.addEventListener("submit", async (event) => {
	event.preventDefault()

	console.log("ok")
	window.location.replace('index.html')
})