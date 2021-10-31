import socket, sys, threading

def logs(msg, status, file=sys.stdout):
	if status == "infos":
		print(f"[*] {msg}" ,file=file)
	elif status == "warning":
		print(f"[?] {msg}" ,file=file)
	elif status == "error":
		print(f"[!] {msg}" ,file=file)
	elif status == "success":
		print(f"[-] {msg}" ,file=file)

class Server:
	def __init__(self, addr_port, name):
		self.name = name
		self.addr_port = addr_port
		self.running = True
		logs(f"starting {name} server on {addr_port}", "infos")
		try:
			self.s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
			self.s.bind(addr_port)
			self.s.listen()
			self.t = threading.Thread(target=self._handler)
			self.t.start()
		except Exception as e:
			logs(f"Error : {e}", "error")

	def _handler(self):
		while self.running:
			addr, conn = self.s.accept()

			print(addr)


def MCCServerHandler(addr, servers):
	all_s = {}
	for server in servers:
		all_s[server] = Server((addr, servers.get(server)), server)

def getServers():
	servers = {}
	with open("servers.txt", "r") as _f:
		for line in _f.readlines():
			if line != "":
				s = line.split(":")
				servers[s[0]] = int(s[1])
	return servers


if __name__ == "__main__":
	MCCServerHandler("", getServers())
