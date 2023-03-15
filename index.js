const salary = (wage,hours,days) => {
	return Math.round(wage * hours * days);
}

const taxed = (salary, taxPercentage) => {
	return Math.round(salary*((100 - taxPercentage)/100));
}

const wage = 125
const hours = 8
const days = 21
const beforeTaxation = salary(wage, hours, days)
const afterTaxation = taxed(beforeTaxation, 15)

document.body.innerHTML = `
	<p>Wage: ${wage} Kč</p>
	<p>Hours: ${hours}</p>
	<p>Days: ${days}</p>
	<p>Before taxation: ${beforeTaxation} Kč</p>
	<p>After taxation: ${afterTaxation} Kč</p>
`;


let zadani = {
	number1:prompt('Zadej cislo: '),
	operation:prompt('Zadej operator: '),
	number2:prompt('Zadej druhe cislo: '),
}


const calculate = (number1,operation,number2) => {
	if (operation === '+') {
		return number1 + number2;
	} else if (operation === '-') {
        return number1 - number2;
    } else if (operation === '*') {
        return number1 * number2;
    } else if (operation === '/') {
        return number1 * number2;
    } else {
        return false;
	}
}

calculate(zadani);
console.log(calculate);
