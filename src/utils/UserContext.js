import { createContext } from "react";

// Create a context for user information
const UserContext = createContext({
    loggedInUser: "Default User",
    userGender: "Male",
});

export default UserContext;
