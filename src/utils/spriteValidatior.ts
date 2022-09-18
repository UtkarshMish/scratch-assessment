export function nameValidation(name: string) {
	if (name && name.length > 0 && name.length < 20) {
		return true;
	}
	return false;
}
