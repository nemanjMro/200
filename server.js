// verzija sa proxy-em
// const { createServer } = require("http");
// const { parse } = require("url");
// const next = require("next");
// const { createProxyMiddleware } = require("http-proxy-middleware");

// const dev = process.env.NODE_ENV !== "production";
// const hostname = "localhost";
// const port = process.env.PORT || 3000;
// const app = next({ dev, hostname, port });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = createServer((req, res) => {
//     // Postavljanje proxy middleware za API zahteve
//     if (req.url.startsWith("/api")) {
//       createProxyMiddleware({
//         target: "https://api.eternalslots.com/game/get-active-games", // Promenite ovo na vaš API URL
//         changeOrigin: true,
//         pathRewrite: {
//           "^/api": "", // Uklanja "/api" iz URL-a
//         },
//       })(req, res, () => {});
//     } else {
//       // Be sure to pass `true` as the second argument to `url.parse`.
//       // This tells it to parse the query portion of the URL.
//       const parsedUrl = parse(req.url, true);
//       const { pathname, query } = parsedUrl;

//       if (pathname === "/a") {
//         app.render(req, res, "/a", query);
//       } else if (pathname === "/b") {
//         app.render(req, res, "/b", query);
//       } else {
//         handle(req, res, parsedUrl);
//       }
//     }
//   });

//   server.on("error", (err) => {
//     console.error(err);
//     process.exit(1);
//   });

//   server.listen(port, () => {
//     console.log(`> Ready on http://${hostname}:${port}`);
//   });
// });

//ovo je prva verzija (bez proxi-a) servera za pokretanje node app tokom builda na cPanel
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
// const hostname = "localhost";
const hostname = "spinlogicslots.com";
// const port = 3000
const port = process.env.PORT || 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === "/a") {
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});

////////// osnovna verzija z acPanel buil
// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var message = 'It works!\n',
//         version = 'NodeJS ' + process.versions.node + '\n',
//         response = [message, version].join('\n');
//     res.end(response);
// });
// server.listen();

// const { createServer } = require("http");
// const { parse } = require("url");
// const next = require("next");

// const dev = process.env.NODE_ENV !== "production";
// const hostname = "localhost";
// const port = process.env.PORT || 3000;

// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = createServer((req, res) => {
//     try {
//       const parsedUrl = parse(req.url, true);
//       const { pathname, query } = parsedUrl;

//       if (pathname === "/a") {
//         app.render(req, res, "/a", query);
//       } else if (pathname === "/b") {
//         app.render(req, res, "/b", query);
//       } else {
//         handle(req, res, parsedUrl);
//       }
//     } catch (err) {
//       console.error("Error occurred handling", req.url, err);
//       res.statusCode = 500;
//       res.end("internal server error");
//     }
//   });

//   server.listen(port, hostname, () => {
//     console.log(`> Ready on http://${hostname}:${port}`);
//   });
// });
