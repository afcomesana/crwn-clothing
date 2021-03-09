import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA3foafEgSkY-ksLf_CiQ9NgLKERAaUJqY",
    authDomain: "crwn-db-aeed5.firebaseapp.com",
    projectId: "crwn-db-aeed5",
    storageBucket: "crwn-db-aeed5.appspot.com",
    messagingSenderId: "823221800068",
    appId: "1:823221800068:web:814aaf290da004f4c006d1",
    measurementId: "G-B882LEF5YE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exits) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
/**
 * esto sirve para indicar que queremos que se inicialice el popup de google
 * cuando usemos el GoogleAuthProvider para autenticacion e inicio de sesion
 */

 export const signInWithGoogle = () => auth.signInWithPopup(provider);

 export default firebase;