const http = require("http");
const { PORT = 8000 } = process.env;

const fs = require("fs");
const path = require("path");
const PUBLIC_DIRECTORY = path.join(process.cwd(), "public");

function checkExt(file) {
  let contentType;
  const ext = path.extname(file).substring(1).toLowerCase();

  switch (ext) {
    case "html":
      return (contentType = "text/html; charset=UTF-8");
    case "css":
      return (contentType = "text/css");
    case "js":
      return (contentType = "application/javascript; charset=UTF-8");
    case "png":
      return (contentType = "image/png");
    case "jpg":
      return (contentType = "image/jpg");
    case "svg":
      return (contentType = "image/svg+xml");
    default:
      return (contentType = "application/octet-stream");
  }
}

function loadFile(file) {
  const filePath = path.join(PUBLIC_DIRECTORY, file);
  const ext = checkExt(file);
  const fileSync = fs.readFileSync(filePath);

  return { ext, fileSync };
}

function onRequest(req, res) {
  if (req.url === "/") {
    req.url = "/index.html";
  } else if (req.url === "/example") {
    req.url = "/index.example.html";
  } else if (req.url === "/car") {
    req.url = "/filter-car.html";
  }

  const file = loadFile(req.url);
  res.setHeader("Content-Type", file.ext);
  res.writeHead(200);
  res.end(file.fileSync);
}

const server = http.createServer(onRequest);

server.listen(PORT, "localhost", () => {
  console.log("Server sudah berjalan, silahkan buka http://localhost:%d", PORT);
});
