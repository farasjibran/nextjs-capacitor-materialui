const mockFetchApi = <T>(data: T): Promise<T> => {
	return new Promise((resolve) => {
		setTimeout(resolve, 2000);
	}).then(() => {
		return data;
	});
};

export default mockFetchApi;
