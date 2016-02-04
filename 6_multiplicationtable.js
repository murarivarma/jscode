process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter a number: ");
function main(input){
  value = parseInt(input);
  i = 1;
  while (i <= value) {
    console.log(value+" * "+i+" = "+multiply(value, i));
    i++;
  }
}
function multiply(a, b) {
  return a*b;
}
