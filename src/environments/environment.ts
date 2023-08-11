// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

export const environment = {
  firebase: {
    apiKey: 'AIzaSyDUmw1iCEWyWkGRxxdKvsz4TD3BPUYmi1E',
    authDomain: 'recept-10ea1.firebaseapp.com',
    projectId: 'recept-10ea1',
    storageBucket: 'recept-10ea1.appspot.com',
    messagingSenderId: '338085119421',
    appId: '1:338085119421:web:73d228d4f396c003c6bed4',
  },

  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// Initialize Firebase
export const app = initializeApp(environment.firebase);
export const auth = getAuth(app);
