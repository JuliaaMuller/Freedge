import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import Cookies from "js-cookie";
const UserContext = createContext()

const ContextProvider = (props) => {
  const [userLog, setUserLog] = useState("")
  const [userId, setUserId] = useState('1')

  useEffect(() => {
    const myCookie = Cookies.get['session']
    
    if(myCookie){
      const res = axios.post('/user/:id')
      .then(user => user.JSON());
      setUserLog(res.name)
      // setUserId(res.id)
      setUserId(1)
    }
  }, [])
  
  
  

  return (
    <>
    <UserContext.Provider 
    value={{
      userLog:userLog,
      userId:userId,
    }}
    >
      {props.children}
    </UserContext.Provider>

    </>)
  
}

// const UserConsumer = UserContext.Consumer
export { UserContext, ContextProvider }