import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import Cookies from "js-cookie";
const UserContext = createContext()

const ContextProvider = (props) => {
  const [userLog, setUserLog] = useState(null)

  useEffect(() => {
    const myCookie = Cookies.get['session']
    
    if(myCookie){
      const res = axios.post('/user/:id')
      .then(user => user.JSON());
      setUserLog(res.name)
    }
  }, [])
  
  
  

  return (
    <>
    <UserContext.Provider 
    value={{
      userLog:userLog,
    }}
    >
      {props.children}
    </UserContext.Provider>

    </>)
  
}

// const UserConsumer = UserContext.Consumer
export { UserContext, ContextProvider }