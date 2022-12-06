const { randomBytes } = await import('node:crypto');
global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};

export const generateUsername = (name) => {
	const id = randomBytes(2).toString('hex');
	return `${name.slice(0, 5)}${id}`;
};