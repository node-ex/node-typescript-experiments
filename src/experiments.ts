import http from 'http';

export function experiment() {
  rawHttpServer();
}

function typescriptCheckTest() {
  const add = (a: number, b: number) => {
    return a + b;
  };

  // Change one number to a string
  console.log(add(1, 2));
}

function nodeGlobalObjects() {
  const globals = {
    Buffer,
    console,
    global,
    process,
    setImmediate,
    setInterval,
    setTimeout,
    url: new URL('/foo', 'https://example.org/'),
  };
  console.log({ globals, });

  const moduleGlobals = {
    __dirname,
    __filename,
    exports,
    module,
    require,
  };

  console.log({ moduleGlobals, });
}

function rawHttpServer() {
  const hostname = '127.0.0.1';
  const port = 3000;

  const server = http.createServer(
    (request: http.IncomingMessage, response: http.ServerResponse) => {
      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/plain');
      response.write('Hello, World!\n');
      response.end();
    });

  server.listen(
    port,
    hostname,
    () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    }
  );
}

function helloWorld() {
  console.log('Hello, World!');
}

if (typeof require !== 'undefined' && require.main === module) {
  console.log('experiments module');
}
