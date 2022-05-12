import { createContext } from "react";
const profileContext = createContext({});
const ProfileProvider = profileContext.Provider;

export { profileContext, ProfileProvider };
