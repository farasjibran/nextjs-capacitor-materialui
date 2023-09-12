// eslint-disable-next-line @typescript-eslint/no-var-requires
const { clientSchema } = require('./schema.environment');

const clientEnvironment = clientSchema.parse({
	API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

module.exports = {
	clientEnv: clientEnvironment,
};
