// import { createContext, useContext, useState, useMemo } from 'react';
// import { tempUserProfile } from '../../data/tempUserProfile';

// const UserContext = createContext();

// export function UserProvider({ children }) {
//   const [user, setUser] = useState(tempUserProfile);

//   // Function to update the user data
//   const updateUser = newUserData => {
//     setUser(newUserData);
//   };

//   // Wrap the value creation with useMemo
//   const value = useMemo(() => ({ user, updateUser }), [user]);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// }

// export const useUser = () => useContext(UserContext);
