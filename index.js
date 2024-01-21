import express from "express";
import http from "node:http";
import path from "path";
import ejs from "ejs";
import createBareServer from "@tomphttp/bare-server-node"

const port = process.env.PORT || 3000
const app = express();
const __dirname = process.cwd();
const server = http.createServer();
const bareServer = createBareServer("/bare/");

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/gxmes', (req, res) => {
  res.render('games');
});

app.get('/apps', (req, res) => {
  res.render('apps');
});

app.get('/settings', (req, res) => {
  res.render('setting');
});

app.get('/textbook', (req, res) => {
  res.render('loader');
});


server.on("request", (req, res) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeRequest(req, res);
  } else {
    app(req, res);
  }
});

server.on("upgrade", (req, socket, head) => {
  if (bareServer.shouldRoute(req)) {
    bareServer.routeUpgrade(req, socket, head);
  } else {
    socket.end();
  }
});

server.on("listening", () => {
  console.log(`kitty cat club listening on port ${port}`);
});

server.listen({
  port: 3000,
});


