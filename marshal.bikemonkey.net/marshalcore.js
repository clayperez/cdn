////////////////////
// MARSHALCORE.JS //
////////////////////
/// Overview
/// Marshalcore supports the web app built for the Bike Monkey Marshal program
///
/// Dependencies: Load in HEADER
/* --------------------------
<link rel="stylesheet" href="https://unpkg.com/buefy/lib/buefy.min.css">
<link rel="stylesheet" href="//cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css">

/// Dependencies: Load in FOOTER
/* --------------------------
<script src="https://unpkg.com/buefy"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.9/vue.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue-resource/1.3.4/vue-resource.min.js"></script>
<script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js"></script>
----------------------------- */

//////////////
// FIREBASE //
//////////////
let config = {
	apiKey: "AIzaSyDzsVMjDu-MI2j1-FbH3OPRZW6ei7m0BO8",
	authDomain: "marshal-program.firebaseapp.com",
	databaseURL: "https://marshal-program.firebaseio.com",
	projectId: "marshal-program",
	storageBucket: "marshal-program.appspot.com",
	messagingSenderId: "426786350308"
};
firebase.initializeApp(config);

const googleAuth = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();



/////////
// VUE //
/////////
Vue.use( Buefy.default );
let App = new Vue({
    el: '#app',
    data: {
        switchState: true,
        checkboxState: true
    },
    mounted: function(){
    	this.$dialog.alert('Welcome vua BUEFY');
    }
});

