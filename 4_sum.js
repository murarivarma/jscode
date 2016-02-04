process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter a number: ");
function main(input){
  sum = 0;
  i = 0;
  while (i <= parseInt(input)) {
    sum = add(sum, i);
    i++;
  }
  console.log("Sum is: "+sum);
}
function add(a, b) {
  return a+b;
}
