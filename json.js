const http = require("http");

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
	res.setHeader("Content-Type", "application/json");
	res.setHeader("Access-Control-Allow-Origin", "http://localhost:63353");
	res.writeHead(200);
    	res.end(`{"message": "This is a JSON response2"}`);
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});