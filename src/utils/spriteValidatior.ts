export function nameValidation(name: string) {
	if (name && name.length > 0 && name.length < 20) {
		return true;
	}
	return false;
}

export function axisValidation(
	x: string | number,
	minLimit: number = -21,
	maxLimit: number = 301
) {
	if (typeof x == "string") {
		if (x === "") {
			return true;
		} else if (!isNaN(parseInt(x))) {
			x = parseInt(x);
		} else {
			return false;
		}
	}

	if (typeof x == "number" && x > minLimit && x < maxLimit) return true;
	else {
		return false;
	}
}
export function sizeValidation(x: string | number) {
	if (typeof x == "string") {
		if (x === "") {
			return true;
		} else if (!isNaN(parseInt(x))) {
			x = parseInt(x);
		} else {
			return false;
		}
	}

	if (typeof x == "number" && x >= 0 && x < 350) return true;
	else {
		return false;
	}
}
