export function experiment() {
  typescriptCheckTest();
}

function typescriptCheckTest() {
  const add = (a: number, b: number) => {
    return a + b;
  };

  // Change one number to a string
  console.log(add(1, 2));
}

function helloWorld() {
  console.log('Hello, World!');
}

if (typeof require !== 'undefined' && require.main === module) {
  console.log('experiments module');
}
