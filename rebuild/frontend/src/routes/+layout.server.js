export const load = ({ locals }) => {
	if (locals.user) {
		return {
			user: locals.users,
		};
	}

	return {
		user: undefined
	};
};