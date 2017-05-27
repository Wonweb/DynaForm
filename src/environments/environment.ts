// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  // Must export the config
  firebaseConfig: {
    apiKey: 'AIzaSyAo0Dkxm25HPMWX1VhwOz3ymcjp1jfUQNk',
    authDomain: 'dynamic-form-54c5c.firebaseapp.com',
    databaseURL: 'https://dynamic-form-54c5c.firebaseio.com',
    projectId: 'dynamic-form-54c5c',
    storageBucket: 'dynamic-form-54c5c.appspot.com',
    messagingSenderId: '211640314449'
  }
};
