import { 
    auth,
    createUserDocumentFromAuthUser, 
    signInWithGooglePopup, 
    signInWithGoogleRedirect } from "../../utils/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";


const SignIn = () => {
    useEffect(() => {
        const fetchData = async () => {
            try { 
                const response = await getRedirectResult(auth);
                if(response) {
                    const {user} = response;
                    createUserDocumentFromAuthUser(user);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[]);

    const handleOnClick = async (event) => {
        const handlers = {
            signInWithGooglePopup,
            signInWithGoogleRedirect,
        };
        const targetName = event.target.name;
        console.log(targetName);
        const {user}  = await handlers[targetName]();
        createUserDocumentFromAuthUser(user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={handleOnClick} name="signInWithGooglePopup">Sign In With Google Popup</button> 
            <button onClick={handleOnClick} name="signInWithGoogleRedirect">Sign In With Google Redirect</button>       
        </div>
    )
}

export default SignIn