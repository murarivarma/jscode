process.stdin.setEncoding('ascii');
process.stdin.on('data', function (data) {
  parameterArr = data.split('\n');
  inputData=parameterArr[0];
  main(inputData);
});

console.log("Enter a number: ");
function main(input){
  input = input.replace(/^0+/, '');
  var niw = " ";
  var t = ['thousand','million'];
  if(input.length <= 3) {
    niw = toWords(input);
  } else if(input.length <= 6) {
    no = " ";
    zero = false;
    if(input.length == 6) {
      if (input.substr(0,3) == 000) {
        zero = true;
      } else {
        no = input.substr(0,3);
      }
    } else if(input.length == 5) {
      if (input.substr(0,3) == 00) {
        zero = true;
      } else {
        no = input.substr(0,2);
      }
    } else {
      if (input.substr(0,1)==0) {
        zero = true;
      } else {
        no = input.substr(0,1);
      }
    }
    if (zero) {
      niw = toWords(input.slice(-3));
    } else {
      niw = toWords(no) + " thousand " + toWords(input.slice(-3));
    }
  } else if(input.length <= 9) {
    no = " "
    if(input.length == 9) {
      no = input.substr(0,3);
    } else if(input.length == 8) {
      no = input.substr(0,2);
    } else {
      no = input.substr(0,1);
    }
    niw = toWords(no) + " million " + toWords(input.slice(-6,-3)) + " thousand " + toWords(input.slice(-3));
  } else {
    console.log("Exceeded limit : Not more than 10 digits please");
    process.exit();
  }
  console.log("the number is : "+niw);
}

function toWords(str) {
  var th = ['hundred','thousand','million','billion','trillion'];
  var dg = ['','one','two','three','four','five','six','seven','eight','nine'];
  var tn = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  var tw = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];

  n = parseInt(str);
  nlen = str.length;

  if (nlen == 1) {
    return dg[n];
  }
  if (nlen == 2) {
    if (str[0] == 1) {
      return tn[str[1]];
    }
    else {
      return tw[str[0]-2]+" "+dg[str[1]];
    }
  }
  if (nlen == 3) {
    value = dg[str[0]];
    if(str[0]== 0 && str[1] == 0) {
      value = dg[str[2]];
    } else if(str[0]== 0 && str[1] == 1) {
      value = tn[str[2]];
    } else if(str[0]== 0 && str[1] != 1) {
      value = tw[str[1]-2] + " " + dg[str[2]];
    } else if (str[1]== 0 && str[2] == 0) {
      value = value + " " + th[0];
    } else if (str[1]== 1) {
      value = value + " " + th[0] +" and "+ tn[str[2]];
    } else if (str[1]== 0) {
      value = value + " " + th[0] +" and "+ dg[str[2]];
    } else {
      value = value + " " + th[0] +" and "+ tw[str[1]-2]+" "+dg[str[2]];
    }
    //value =  dg[str[0]] + " " + th[0] + " " + 'and' + " " + tw[str[1]-2]+" "+dg[str[2]];
    return value;
  }
}
