import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider=new GoogleAuthProvider();
const githubProvider=new GithubAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading]=useState(true);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
   
    const updateInfo=(displayName,photoURL)=>{
        
        return updateProfile(auth.currentUser,{ displayName,photoURL
        })
    }
    
    // login user
    const logIn= (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // log in with google
    const logInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    // log in with github
    const logInWithGithub=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }

    // logout
    const logOut= () =>{
        setLoading(true);
        return signOut(auth);
    }
      // state change
      useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }

    },[user])

   

    const authInfo = {
        user,
        loading,
        createUser,
        updateInfo,
        logIn,
        logInWithGoogle,
        logInWithGithub,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;