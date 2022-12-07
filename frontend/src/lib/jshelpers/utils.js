const { randomBytes } = await import('node:crypto');
global.structuredClone = (val) => JSON.parse(JSON.stringify(val));

export const serializeNonPOJOs = (obj) => {
	return structuredClone(obj);
};
