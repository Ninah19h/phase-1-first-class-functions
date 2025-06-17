
function receivesAFunction(callback) {
  callback();
}


function returnsANamedFunction() {
  function namedFunction() {
    console.log("I'm a named function!");
  }
  return namedFunction;
}


function returnsAnAnonymousFunction() {
  return function () {
    console.log("I'm an anonymous function!");
  };
}


receivesAFunction(() => console.log("Callback called!"));

const namedFn = returnsANamedFunction();
namedFn();

const anonFn = returnsAnAnonymousFunction();
anonFn();
