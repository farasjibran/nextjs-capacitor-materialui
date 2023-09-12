import { useQuery } from '@tanstack/react-query';

import { courseQueries } from './course.queries';

export const useCourseList = () => {
	const { data: courseData, isLoading: isLoadingCourseData } = useQuery({
		...courseQueries.all({
			rows: 10,
		}),
	});

	const courseList = courseData ?? [];

	const noData = !isLoadingCourseData && courseList.length === 0;

	return {
		courseList,
		noData,
		isLoadingCourseData,
	};
};

export const useCourseDetail = ({ id }: { id?: number }) => {
	return useQuery({
		...courseQueries.details({
			id: id,
		}),
	});
};
