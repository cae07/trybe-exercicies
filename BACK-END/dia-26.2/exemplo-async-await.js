function setTimeWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("dentro do set com promise");
        resolve();
    }, 3000);
  });
};

async function main() {
  console.log("começo da function main");

  await setTimeWithPromise();

  console.log("fim function main");
};

main();

console.log("depois de chamar a main");