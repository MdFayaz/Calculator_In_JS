var result, numberZero, numberOne, numberTwo, numberThree, numberFour, numberFive, numberSix, numberSeven, numberEight, numberNine, addOp, subOp, mulOp, divOp;

function getResultBoxObject() {
	result = document.getElementById("result"); 
	return result;
}

function getValue() {
	return getResultBoxObject().value;
}

function isResultBoxEmpty() {
	if(getValue() === undefined || getValue() === "") {
		return true;
	}
	return false;
}

function setValue(valueToSet, makeEmpty){
	if(isResultBoxEmpty() || makeEmpty) {
		getResultBoxObject().value = valueToSet;
	} else {
		getResultBoxObject().value += valueToSet;
	}
}

function functionC() {
	if(getValue() !== undefined) {
		setValue("", true);
	}
}

function function0() {
	numberZero = document.getElementById("zero").value;
	setValue(numberZero, false);
}

function function1() {
	numberOne = document.getElementById("one").value;
	setValue(numberOne, false);
}

function function2() {
	numberTwo = document.getElementById("two").value;
	setValue(numberTwo, false);
}

function function3() {
	numberThree = document.getElementById("three").value;
	setValue(numberThree, false);
}

function function4() {
	numberFour = document.getElementById("four").value;
	setValue(numberFour, false);
}

function function5() {
	numberFive = document.getElementById("five").value;
	setValue(numberFive, false);
}

function function6() {
	numberSix = document.getElementById("six").value;
	setValue(numberSix, false);
}

function function7() {
	numberSeven = document.getElementById("seven").value;
	setValue(numberSeven, false);
}

function function8() {
	numberEight = document.getElementById("eight").value;
	setValue(numberEight, false);
}

function function9() {
	numberNine = document.getElementById("nine").value;
	setValue(numberNine, false);
}

function functionAddition() {
	addOp = document.getElementById("add").value;
	setValue(addOp, false);
}

function functionMultiple() {
	mulOp = document.getElementById("mul").value;
	setValue(mulOp, false);
}

function functionSubstract() {
	subOp = document.getElementById("sub").value;
	setValue(subOp, false);
}

function functionDivision() {
	divOp = document.getElementById("division").value;
	setValue(divOp, false);
}

function functionEqual() {
	if(!isResultBoxEmpty()) {
	  setValue(eval(getResultBoxObject().value), true);
	}
}

/* http://www.ibm.com/support/knowledgecenter/SSEPGG_9.7.0/com.ibm.db2.luw.qb.server.doc/doc/t0011930.html */