process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter a string: ");
function main(input){
  for (var i = 0; i < input.length; i++) {
    console.log(input[i]);
  }
}
