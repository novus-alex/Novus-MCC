const login = document.getElementById('login')
login.addEventListener("submit", async (event) => {
	event.preventDefault()
	const email = document.getElementById("email")
	const passw = document.getElementById("password")

	if (email.value == 'admin@test.com' | passw.value == 'admin') {
		window.location.replace('dashboard.html')
	}
})