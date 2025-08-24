import { createContext } from "react";

// Create a context for user information
const UserContext = createContext({
    loggedInUser: "Default User",
});

// Create a context for user gender details
// const UserDetails = createContext({
//     userGender: "Male",
// });

export default UserContext;
