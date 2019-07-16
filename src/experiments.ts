export function experiment() {
  nodeGlobalObjects();
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

function helloWorld() {
  console.log('Hello, World!');
}

if (typeof require !== 'undefined' && require.main === module) {
  console.log('experiments module');
}
