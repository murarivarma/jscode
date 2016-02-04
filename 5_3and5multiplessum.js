process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter a number: ");
function main(input){
  sum = 0;
  i = 1;
  while (i <= parseInt(input)) {
    sum = ((i%3 == 0 || i%5 ==0) ? add(sum, i) : sum);
    // sum = add(sum, i); if (i%3 == 0 || i%5 ==0) Not possible in JavaScript
    i++;
  }
  console.log("Sum is: "+sum);
}
function add(a, b) {
  return a+b;
}
