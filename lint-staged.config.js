/* eslint-disable import/no-anonymous-default-export */
module.exports = {
	'src/**/*.{js,jsx,ts,tsx}': ['eslint --max-warnings=0', 'prettier -w'],
	'src/**/*.{json,css,scss,md}': ['prettier -w'],
	'**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit --incremental false',
};
