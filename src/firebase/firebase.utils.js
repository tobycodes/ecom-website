import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const config = {
    apiKey: "AIzaSyBG1X4y_S61teVYkX44oW1XiRbo4_-9cgU",
    authDomain: "tooshwear-cbd79.firebaseapp.com",
    databaseURL: "https://tooshwear-cbd79.firebaseio.com",
    projectId: "tooshwear-cbd79",
    storageBucket: "tooshwear-cbd79.appspot.com",
    messagingSenderId: "491830255495",
    appId: "1:491830255495:web:894a939bc65e78e2a5bd22"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const createUserProfile = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
           console.log('Error while creating user: ', error); 
        }
    } 
    
    return userRef
}

export const signInWithGoogle = () => auth.signInWithPopup(provider).catch(err => console.log(err));

export default firebase;
