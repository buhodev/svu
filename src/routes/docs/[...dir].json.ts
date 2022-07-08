import { ls } from '$lib/server';
import type { RequestEvent } from '@sveltejs/kit';

export const get = async ({ params }: RequestEvent) => {
	const dir = params.dir.split('/')[0];
	const chapters = await ls(`./src/routes/docs/${dir}/`, 'dirs');

	return {
		body: {
			chapters
		}
	};
};