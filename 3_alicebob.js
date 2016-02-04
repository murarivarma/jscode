process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter you name: ");
function main(input){
  if ((input.toLowerCase() == "alice") || (input.toLowerCase() == "bob"))
    console.log("Hello "+input.charAt(0).toUpperCase()+input.slice(1));
  else {
    console.log("Sorry you are not invited");
  }
}
