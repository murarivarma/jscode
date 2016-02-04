process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter a number: ");
function main(input){
  year = parseInt(input);
  i = 1;
  console.log("Next 100 leap years");
  while (i <= 100) {
    if (year%4 == 0) {
      console.log(year);
    }
    i++;
    year++;
  }
}
