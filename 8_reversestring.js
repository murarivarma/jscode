process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter a string: ");
function main(input){
  words = input.split(' ')
  wordsLength = words.length
  reversed = ''
  for (i = 0; i< wordsLength; i++) {
    reversed += words[i].split('').reverse().join('')+' ';
    //reversed += ' ';
  }
  console.log(reversed);
}
