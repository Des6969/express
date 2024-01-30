//callback
const getResult = (result) => {
  return result;
};
const main = (sentence) => {
  return getResult(sentence);
};
const result = main("I am awesome");
console.log(result);

//promise

const printHello = (hello) => {
  return new Promise((resolve, reject) => {
    resolve(hello);
  });
};

printHello("Namaste")
  .then((result) => {
    return result;
  })
  .then((result) => {
    console.log(result + "DES");
  });
//async await
const hello = async (name) => {
  return "hello" + name;
};
