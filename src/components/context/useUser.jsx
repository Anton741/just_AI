import { createContext, useContext, useState } from "react";
import { fetchUsers } from "../../services/http.service";


const userContext = createContext()

export const UserProvider = ({children}) => {
  const [users, setUsers] = useState();

  async function  getUsers(){
        const data = await fetchUsers();
        const users  = data.results
        if (users) {
            setUsers(users);
        } else {
            setUsers([]);
        }
        // setIsLoad(false);
    }
  return(
    <userContext.Provider value = {{users, getUsers}}>
      {children}
    </userContext.Provider>
  )
}
export const useUser = () => {
  return useContext(userContext)
}