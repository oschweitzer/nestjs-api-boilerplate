/* tslint:disable:no-magic-numbers */
export const environment = {
  httpPort:  process.env.hasOwnProperty('HTTP_PORT') ? Number(process.env.APP_PORT) : 3000,
};
