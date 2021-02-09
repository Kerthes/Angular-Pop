// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import * as firebase from "firebase";

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyDa_uCgFbLozEXFUAeuTYxA12Pboz8cy6Y",
    authDomain: "angular-pop-4dce9.firebaseapp.com",
    projectId: "angular-pop-4dce9",
    storageBucket: "angular-pop-4dce9.appspot.com",
    messagingSenderId: "436800194957",
    appId: "1:436800194957:web:ace2d4c4b8b88b6a3155c4"
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
