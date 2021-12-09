import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyBgbmJ4_ECOdlgaBHCn5O-Lu716xDL9E3U",
    authDomain: "crwn-shop-01.firebaseapp.com",
    projectId: "crwn-shop-01",
    storageBucket: "crwn-shop-01.appspot.com",
    messagingSenderId: "679886882948",
    appId: "1:679886882948:web:3406d6f33a86eb7a5ddad1",
    measurementId: "G-V8V5TNNB7R"
}


export const createUserProfileDocument = async (userAuth,addtionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...addtionalData

            })
        }catch(error){
            console.log('Error Creating User!!!',error);
        }
    }

    return userRef;
}



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({'prompt':'select_account'});

export const signInWithGoogle = ()=>auth.signInWithPopup(provider);


export default firebase;