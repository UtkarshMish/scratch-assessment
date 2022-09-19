export function nameValidation(name: string) {
	if (name && name.length > 0 && name.length < 20) {
		return true;
	}
	return false;
}

export function numberValidation(x: string | number) {
	if (typeof x == "string") {
		if (x === "" || !isNaN(parseInt(x))) return true;
		else return false;
	} else if (typeof x == "number") {
		return true;
	} else {
		return false;
	}
}

export function returnLimitValue(x: number, minLimit: number, maxLimit: number) {
	if (x < minLimit) return minLimit;
	else if (x > maxLimit) return maxLimit;
	else {
		return x;
	}
}
