import http from 'http';

import express from 'express';

import config from '@/config';

const expressApp = express();

expressApp.use((_request, _response, next) => {
  console.log('This is my custom Application-level middleware');
  next();
});

expressApp.use((_request, response, _next) => {
  response.send('<h1>Hello, Express!</h1>');
});

const httpServer = http.createServer(expressApp);

export function runServer() {
  const { serverPort, serverHostname, } = config;
  httpServer.listen(
    serverPort,
    serverHostname,
    () => {
      console.log(`Server running at http://${serverHostname}:${serverPort}/`);
    }
  );
}
