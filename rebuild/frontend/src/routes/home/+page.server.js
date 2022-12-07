import { error, redirect } from '@sveltejs/kit';
import { serializeNonPOJOs } from '$lib/jshelpers/utils'

export const load = ({ locals }) => {
    if (!locals.pb.authStore.isValid) {
        throw redirect(303, '/login')
    }

    const getUsersProjects = async (userId) => {
		try {
			const projects = serializeNonPOJOs(
				await locals.pb.collection('events').getFullList(undefined, {
					filter: `owningUser = "${userId}"`
				})
			);
			return projects;
		} catch (err) {
			console.log('Error: ', err);
			throw error(err.status, err.message);
		}
	};

	return {
		home: getUsersProjects(locals.user.id)
	};
}

export const actions = {
    addEvent: async ({ request, locals }) => {
        const formData = await request.formData()
        const owningUser = locals.user.id
        const newEvent = Object.fromEntries(formData)
        const userData = JSON.stringify(await locals.pb.collection('users').getOne(locals.user.id))
        try {
            await locals.pb.collection('events').create({ owningUser, ...newEvent });
        }
        catch (err) {
            console.log('Error: ', err);
            throw error(500, 'Something went wrong');
        }
        console.log(projects)
    }
};
