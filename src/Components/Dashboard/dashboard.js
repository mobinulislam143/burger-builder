import React from "react";
import { Button } from "reactstrap";
// import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
//   console.log("Sign-out successful.")
// }).catch((error) => {
//     console.log(error)
// });

const Dashboard = () => {
    return (
        <div className="container">
            <div className="flex d-flex-center">
                <h2>Thanks for Subscribing</h2>
                <Button >Log out</Button>
            </div>
        </div>
    )
}
export default Dashboard