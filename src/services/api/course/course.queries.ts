import { createQueryKeys } from '@lukemorales/query-key-factory';

import { getCourse, getCourseById } from './course.service';

export const courseQueries = createQueryKeys('course', {
	all: (parameters: Parameters<typeof getCourse>[0]) => {
		const { rows } = parameters;

		return {
			queryFn: () => getCourse(parameters),
			queryKey: ['all', rows],
		};
	},

	details: ({ id }: { id?: number }) => ({
		queryFn: () => getCourseById({ id: id }),
		queryKey: ['details', id],
	}),
});
