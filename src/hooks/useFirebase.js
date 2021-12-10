import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const auth = getAuth();
    const GoogleProvider = new GoogleAuthProvider();

    useEffect(()=> {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log('inside the user' , user)
              setUser(user)
            } else {
              // User is signed out
              // ...
            }
          });
    },[])

    const googleSignIn = () => {
        return signInWithPopup(auth, GoogleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user)
        }).catch((error) => {
            const errorMessage = error.message;
        });
    }

    const logout = () =>{
        signOut(auth).then(() => {
          setUser({})
        }).catch((error) => {
          // An error happened.
        });
    }

    return {
        user,
        auth,
        googleSignIn,
        logout
    };
};

export default useFirebase;