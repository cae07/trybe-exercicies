function setTimeWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("dentro do primeiro set time out");
        resolve();
    }, 3000);
  });
};

const setPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("dentro do segundo set time out");
      resolve();
    }, 1000);
  });
};

function main() {
  console.log("começo da function main");

  setTimeWithPromise();
  setPromise();

  console.log("fim function main");
};

main();

console.log("depois de chamar a main");