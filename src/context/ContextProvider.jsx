import React, {createContext, useEffect, useState} from 'react'
import { auth, db } from '../Config';
import firebase from "firebase/app";
import "firebase/auth";
export const ContextProvider = createContext();

const ContextFun = (props) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [allMsg, setAllMsg] = useState([]);

    const register = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                firebase.auth().signInWithRedirect(provider);
        });
    };

    const logout = () => {
        auth.signOut().then(()=>{
            setUser(null);
        });
    };

    const sendMessage = (msg) =>{
        //console.log(msg);
        db.collection("messages").add({
            msg,
            profile: user.photoURL,
            username: user.displayName,
            email: user.email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoader(false);
        });

        db.collection("messages")
            .orderBy("createdAt", "asc")
            .onSnapshot((snp) => {
                //console.log("all msg", snp.docs)
                setAllMsg(snp.docs.map(doc => (
                    {
                        id: doc.id,
                        ...doc.data(),
                    }
                )))
            })
            

    }, []);
    //console.log(allMsg);

    return <ContextProvider.Provider value={{register, user, loader, logout, sendMessage, allMsg}}>
        {props.children}
    </ContextProvider.Provider>
}

export default ContextFun;