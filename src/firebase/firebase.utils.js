import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {

    apiKey: "AIzaSyCdTE4YeBFSYYtGH7UlrVYisFaNsOo61Qg",
    authDomain: "crwn-db-6a514.firebaseapp.com",
    databaseURL: "https://crwn-db-6a514.firebaseio.com",
    projectId: "crwn-db-6a514",
    storageBucket: "",
    messagingSenderId: "693469760669",
    appId: "1:693469760669:web:206a24bba12f05c90b5874",
    measurementId: "G-1RBCTB9RJK"
    
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    // new documentRef
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //snapShot of the documentRef
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            })
        } catch (error) {
            console.log('Error creating user',error);
        }
    }
    
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
