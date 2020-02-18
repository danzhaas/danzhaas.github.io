//SELECTOR

document.querySelector("#etch-selector").addEventListener("click", () => {
  document.querySelector("#etch-a-sketch").style.display="block";
  document.querySelector("#js-slideshow").style.display="none";
});
document.querySelector("#exercises-selector").addEventListener("click", () => {
    document.querySelector("#etch-a-sketch").style.display="none";
    document.querySelector("#js-slideshow").style.display="block";
});

//JAVASCRIPT EXERCISES
//calculator
function add (n,m) {
	return n+m
}

function subtract (n,m) {
	return n-m
}

function sum (n) {
	let x = 0;
	for (i=0;i<n.length;i++) {
		x+=n[i];
	};
	return x;
}

function multiply (n) {
	let x = 1;
	for (i=0;i<n.length;i++) {
		x*=n[i];
	};
	return x;
}

function power(n,m) {
	return Math.pow(n, m);
}

function factorial(n) {
	let x = 1;
	for (i=n;i>0;i--) {
		x*=i;
	};
	return x;
}


//leapYears
const leapYears = function(year) {
  if (year % 400 == 0 ) {
      return true;
  }
  else {
      if (year %100 == 0) {
          return false;
      }
      else if (year % 4 == 0) {
          return true;
      }
      else {
          return false;
      }         
  }
}

document.querySelector("#leapYears-call").addEventListener("click", () => {
  var year = document.querySelector("#leapYears-input").value;
  let leapYearsAnswer= (
    (leapYears(year))? "yes" : "no"
  )
  document.querySelector("#leapYears-result").innerText=leapYearsAnswer;
})

//Palindromes

const palindromes = function(n) {
  let validString = function (n) {
      let x="";
      n = n.toLowerCase(); //to lower case 
      for (i=0;i<n.length;i++) { //to remove all invalid chars            
          if (n.charCodeAt(i) >=97 && n.charCodeAt(i) <= 122) {
              x=x.concat(n.charAt(i));
          } 
      }
      return x;
  }
  
  let reverseString = function (n) {
      x = "";
      for (i=n.length-1;i>=0;i--) { // create reverse of string
          x=x.concat(n.charAt(i));
      }
      return x;
  }
  
  //compare valid string to reversed string
  return validString(n)==reverseString(validString(n));
}

document.querySelector("#palindromes-call").addEventListener("click", () =>
  document.querySelector("#palindromes-result").innerText=
  (palindromes(document.querySelector("#palindromes-input").value)?"Yes":"No")
)


//removeFromArray

const removeFromArray = function(inputArray) {
  var topLvlArgs=Array.from(arguments), i=1, indexPosition;

  do {
      let confirmMatch = function(inputArrayValues) {
          return inputArrayValues == topLvlArgs[i];
      }
      indexPosition = inputArray.findIndex(confirmMatch);
      if (indexPosition!==-1) {
          inputArray.splice(indexPosition, 1);
      }
      i++;
  }
  while (i<arguments[1].length);
  return inputArray;
}

document.querySelector("#rFA-call").addEventListener("click", () => {
  var inputArray=document.querySelector("#rFA-input1").value;  
  var tempArray=inputArray.split(",").map(function(num) {return parseInt(num,10)});
  var args=document.querySelector("#rFA-input2").value;
  var tempArgs=args.split(",").map(function(num) {return parseInt(num,10)});
  document.querySelector("#rFA-result").innerText=removeFromArray(tempArray,tempArgs);
})

//repeatString

const repeatString = function(inputString,repetitions) {
  let builderString='';
  if (repetitions < 0) {
      inputString="ERROR", repetitions=1;
  }
  for(let loopIteration=0; loopIteration < repetitions; loopIteration++) {
  builderString=builderString+inputString;
  }
  return builderString;
}


//reverseString

const reverseString = function(inputString) {
  let builderString='', flipPosition; 
  flipPosition = inputString.length-1;
  while(flipPosition>=0) {
      builderString=builderString+inputString.charAt(flipPosition);
      flipPosition--;
  }
  return builderString;
}


//sumAll

const sumAll = function(firstArg, secondArg) {
  let highest, lowest;
  if ((firstArg <0 || secondArg <0) || (typeof(firstArg)!=="number" || 
  typeof(secondArg)!== "number")) {
      return "ERROR";
  } else {       
      if (firstArg>secondArg) {
          highest=firstArg, lowest=secondArg;
      } else {
          highest=secondArg, lowest=firstArg;
      }
      let range=highest-lowest, sum=0, i=0;
      do {
          sum += lowest+i;
          i++;
      }
      while (i<=range);
      return sum;
  }
}


//tempConversion

const ftoc = function(fInput) {
  let cUnrounded = (fInput-32)*5/9;
  let cOutput = Math.round(10*cUnrounded)/10;
  return cOutput;
}

const ctof = function(cInput) {
  let fUnrounded = (cInput*9/5)+32;
  let fOutput = Math.round(10*fUnrounded)/10;
  return fOutput;
}


//ETCH-A-SKETCH is it's own .js file