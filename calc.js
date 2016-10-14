var clearResult, numberZero, numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight, numberNine,
addOp, subOp, mulOp;

var functionResult = function() {
  clearResult = document.getElementById("result");
}

function functionC() {
	if(clearResult !== undefined) {
		clearResult.value = "";
	}
}

function function0() {
	numberZero = document.getElementById("zero").value;
	if(clearResult !== undefined) {
  	   clearResult.value += numberZero;
	} else {
	   functionResult();
	   clearResult.value = numberZero;
	}
}

function function1() {
	numberOne = document.getElementById("one").value;
	if(clearResult !== undefined) {
		clearResult.value += numberOne;
	} else {
		functionResult();
		clearResult.value = numberOne;
	}
}

function function2() {
	numberTwo = document.getElementById("two").value;
	if(clearResult !== undefined) {
		clearResult.value += numberTwo;
	} else {
		functionResult();
		clearResult.value = numberTwo;
	}
}

function function3() {
	numberThree = document.getElementById("three").value;
	if(clearResult !== undefined) {
		clearResult.value += numberThree;
	} else {
		functionResult();
		clearResult.value = numberThree;
	}
}

function function4() {
	numberFour = document.getElementById("four").value;
	if(clearResult !== undefined) {
		clearResult.value += numberFour;
	} else {
		functionResult();
		clearResult.value = numberFour;
	}
}

function function5() {
	numberFive = document.getElementById("five").value;
	if(clearResult !== undefined) {
		clearResult.value += numberFive;
	} else {
		functionResult();
		clearResult.value = numberFive;
	}
}

function function6() {
	numberSix = document.getElementById("six").value;
	if(clearResult !== undefined) {
		clearResult.value += numberSix;
	} else {
		functionResult();
		clearResult.value = numberSix;
	}
}

function function7() {
	numberSeven = document.getElementById("seven").value;
	if(clearResult !== undefined) {
		clearResult.value += numberSeven;
	} else {
		functionResult();
		clearResult.value = numberSeven;
	}
}

function function8() {
	numberEight = document.getElementById("eight").value;
	if(clearResult !== undefined) {
		clearResult.value += numberEight;
	} else {
		functionResult();
		clearResult.value = numberEight;
	}
}

function function9() {
	numberNine = document.getElementById("nine").value;
	if(clearResult !== undefined) {
		clearResult.value += numberNine;
	} else {
		functionResult();
		clearResult.value = numberNine;
	}
}

function functionAddition() {
	addOp = document.getElementById("add").value;
	if(clearResult !== undefined) {
		clearResult.value += addOp;
	} else {
		functionResult();
		clearResult.value = addOp;
	}
}

function functionMultiple() {
	mulOp = document.getElementById("mul").value;
	if(clearResult !== undefined) {
		clearResult.value += mulOp;
	} else {
		functionResult();
		clearResult.value = mulOp;
	}
}

function functionSubstract() {
	subOp = document.getElementById("sub").value;
	if(clearResult !== undefined) {
		clearResult.value += subOp;
	} else {
		functionResult();
		clearResult.value = subOp;
	}
}

function functionEqual() {
	if(clearResult !== undefined) {
	  clearResult.value = eval(clearResult.value);
	}
}