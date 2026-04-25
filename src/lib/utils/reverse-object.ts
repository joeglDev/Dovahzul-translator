export const reverseObject = (obj: Record<string, unknown>) => {
	const reversedObject: Record<string, unknown> = {};

	for (const key in obj) {
		if (Array.isArray(obj[key])) {
			obj[key].forEach((value) => (reversedObject[value] = key));
		} else {
			reversedObject[`${obj[key]}`] = key;
		}
	}

	return reversedObject;
};
