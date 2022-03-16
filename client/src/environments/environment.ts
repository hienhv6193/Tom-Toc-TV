// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'tom-toc-tv',
    appId: '1:989177736207:web:b33c9f5da9f60cade2877a',
    storageBucket: 'tom-toc-tv.appspot.com',
    locationId: 'asia-southeast1',
    apiKey: 'AIzaSyBfskHjLJgWYd8VoBHTOYO2nOWOSf9y2Tg',
    authDomain: 'tom-toc-tv.firebaseapp.com',
    messagingSenderId: '989177736207',
    measurementId: 'G-3KPG8FYQD7',
  },
  production: false,
  rtmpConnectionString:"http://192.168.1.8",
  nodejsConfig:"http://localhost:3000"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
