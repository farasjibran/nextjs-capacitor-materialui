// eslint-disable-next-line @typescript-eslint/no-explicit-any
const buildFormData = (formData: FormData, data: any, parentKey?: any) => {
	if (
		data &&
		typeof data === 'object' &&
		!(data instanceof Date) &&
		!(data instanceof File)
	) {
		for (const key of Object.keys(data)) {
			buildFormData(
				formData,
				data[key],
				parentKey ? `${parentKey}[${key}]` : key
			);
		}
	} else {
		if (data !== undefined && data !== null) {
			formData.append(parentKey, data);
		}
	}
};

export { buildFormData };
