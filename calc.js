var result, numberZero, numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight, numberNine, addOp, subOp, mulOp;

function getResultBox() {
	result = document.getElementById("result"); 
	return result;
}

function setResultBoxValue(number) {
	result.value = number;
}

function getResultBoxValue() {
	return getResultBox().value;
}

function isResultBoxEmpty() {
	if(getResultBoxValue() === undefined) {
		return true;
	}
	return false;
}

function functionC() {
	if(getResultBoxValue() !== undefined) {
		setResultBoxValue("");
	}
}

function function0() {
	numberZero = document.getElementById("zero").value;
	if(isResultBoxEmpty()) {
		getResultBox().value = numberZero;
	} else {
		getResultBox().value += numberZero;
	}
}

function function1() {
	numberOne = document.getElementById("one").value;
	if(isResultBoxEmpty()) {
		getResultBox().value = numberOne;
	} else {
		getResultBox().value += numberOne;
	}
}

function function2() {
	numberTwo = document.getElementById("two").value;
	if(isResultBoxEmpty()) {
		getResultBox().value = numberTwo;
	} else {
		getResultBox().value += numberTwo;
	}
}

function function3() {
	numberThree = document.getElementById("three").value;
	if(isResultBoxEmpty()) {
		getResultBox().value = numberThree;
	} else {
		getResultBox().value += numberThree;
	}
}

function function4() {
	numberFour = document.getElementById("four").value;
	if(isResultBoxEmpty()) {
		getResultBox().value = numberFour;
	} else {
		getResultBox().value += numberFour;
	}
}

function function5() {
	numberFive = document.getElementById("five").value;
	if(isResultBoxEmpty()) {
		getResultBox().value = numberFive;
	} else {
		getResultBox().value += numberFive;
	}
}

function function6() {
	numberSix = document.getElementById("six").value;
	if(isResultBoxEmpty()) {
		getResultBox().value = numberSix;
	} else {
		getResultBox().value += numberSix;
	}
}

function function7() {
	numberSeven = document.getElementById("seven").value;
	if(isResultBoxEmpty()) {
		getResultBox().value = numberSeven;
	} else {
		getResultBox().value += numberSeven;
	}
}

function function8() {
	numberEight = document.getElementById("eight").value;
	if(isResultBoxEmpty()) {
		getResultBox().value = numberEight;
	} else {
		getResultBox().value += numberEight;
	}
}

function function9() {
	numberNine = document.getElementById("nine").value;
	if(isResultBoxEmpty()) {
		getResultBox().value = numberNine;
	} else {
		getResultBox().value += numberNine;
	}
}

function functionAddition() {
	addOp = document.getElementById("add").value;
	if(isResultBoxEmpty()) {
		getResultBox().value = addOp;
	} else {
		getResultBox().value += addOp;
	}
}

function functionMultiple() {
	mulOp = document.getElementById("mul").value;
	if(isResultBoxEmpty()) {
		getResultBox().value = mulOp;
	} else {
		getResultBox().value += mulOp;
	}
}

function functionSubstract() {
	subOp = document.getElementById("sub").value;
	if(isResultBoxEmpty()) {
		getResultBox().value = subOp;
	} else {
		getResultBox().value += subOp;
	}
}

function functionEqual() {
	if(!isResultBoxEmpty()) {
	  setResultBoxValue(eval(getResultBox().value));
	}
}