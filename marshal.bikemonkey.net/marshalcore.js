////////////////////
// MARSHALCORE.JS //
////////////////////
/// Dependencies
/// --------------------------
/// https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.9/vue.min.js
/// https://cdnjs.cloudflare.com/ajax/libs/vue-router/3.0.1/vue-router.min.js
/// https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.3.4/vue-resource.min.js
/// https://unpkg.com/vuetify/dist/vuetify.min.js
/// https://www.gstatic.com/firebasejs/4.2.0/firebase.js


//////////////
// FIREBASE //
//////////////
const firebaseConfig = {
  apiKey: 'AIzaSyACYJ2gQFAaOIQHUQKGuChJy_uJjpUtW8o',
  authDomain: 'routr-acd70.firebaseapp.com',
  databaseURL: 'https://routr-acd70.firebaseio.com',
  projectId: 'routr-acd70',
  storageBucket: 'routr-acd70.appspot.com',
  messagingSenderId: '705237275855'
};
firebase.initializeApp(firebaseConfig);
const googleAuth = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();

console.log("HEY! MARHSALCORE IS UP VIA RAWGIT.");
