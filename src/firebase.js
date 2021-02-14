import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCJpUh6p3A-uvUT0epmfWGG_j2qhDOF9Gc',
	authDomain: 'whatsapp-clone-37474.firebaseapp.com',
	projectId: 'whatsapp-clone-37474',
	storageBucket: 'whatsapp-clone-37474.appspot.com',
	messagingSenderId: '57803338220',
	appId: '1:57803338220:web:4fb828345472b0dca5d0c9',
	measurementId: 'G-VCG6MJPZMR'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
