import { error, redirect } from '@sveltejs/kit';

export const actions = {
	addEvent: async ({ request, locals }) => {
        const body = Object.fromEntries(await request.formData());
        // try {
        //     await locals.pb.collection('events').create({...body});
        // }
        // catch(err) {
        //     console.log('Error: ', err);
        //     throw error(500, 'Something went wrong')
        // }

        console.log(body);
	},
    editEvent: async ({request, locals}) => {
        const body = Object.fromEntries(await request. formData());
        
    },
    removeEvent: async ({request, locals}) => {
    }
};