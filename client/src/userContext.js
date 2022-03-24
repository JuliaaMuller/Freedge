import { createContext, useState, useEffect } from "react";
import axios from 'axios';
const UserContext = createContext()

const ContextProvider = (props) => {
  const [userLog, setUserLog] = useState("")
  const [userId, setUserId] = useState('')
  const [isLoggedIn, setIsLoggedIn]= useState(false)

  useEffect(() => {
    
      return axios.post('/user/')
      .then(res => {console.log(res)
      console.log('res.data.name:', res.data.name)
      console.log('res.data.id:', res.data.id)
      setUserLog(res.data.name)
      setUserId(res.data.id)
      });
      
  }, [])
  
  
  

  return (
    <>
    <UserContext.Provider 
    value={{
      userLog,
      userId,
      isLoggedIn,
      setUserId,
      setIsLoggedIn,
      setUserLog

    }}
    >
      {props.children}
    </UserContext.Provider>

    </>)
  
}

// const UserConsumer = UserContext.Consumer
export { UserContext, ContextProvider }