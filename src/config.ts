import * as dotenv from 'dotenv';

const environmentEnvVar = process.env.NODE_ENV;
export const environment = typeof environmentEnvVar === 'undefined' ? 'development' : environmentEnvVar;

if (environment === 'development') {
  try {
    const result = dotenv.config();
    if (result.error) { throw new Error('Failed parsing .dotenv'); }
  } catch {
    // tslint:disable-next-line:max-line-length
    console.error(`Create a ".env" file to use in development mode. At minimum, it must contain the following environment variables:
    HOST
    PORT
    `);
    process.exit(1);
  }
}

const portEnvVar = process.env.PORT;
if (typeof portEnvVar === 'undefined') {
  throw new Error('Port must be specified');
}
export const PORT = parseInt(portEnvVar, 10);

const hostEnvVar = process.env.HOST;
export const HOST = typeof hostEnvVar === 'undefined' ? 'localhost' : hostEnvVar;
