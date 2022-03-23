import { createContext, useState } from "react";
import axios from 'axios';

const LoginContext = createContext()

const LoginProvider = (props) => {
  const [user, setUser] = useState({
    email: '',
    password:'',
  })
  const [alert, setAlert] = useState(false)
  const [auth, setAuth] = useState(false)
  const [userLog, setUserLog] = useState(null)
  const [input, setInput] = useState(false)

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUser(prev => ({
      ...prev,
      [name]:value
    }))
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    setInput(false);
    const {email, password } = user
    if (!email || !password){
      setInput(true)
      return
    }
    axios.post('/login', user)
    .then((res) => {
      if(res.status === 403){
        setAlert(true)
      } else if(res.status === 200){
        
        console.log(res.data.name)
        setUserLog(res.data.name);
        console.log(userLog)
        setAuth(true);
        console.log(auth)
      }
    })
    .catch(err => console.log(err))
  }
  console.log('ici:',userLog)
  const handleLogout = (e) =>{
    e.preventDefault();
    axios.post('/logout', user)
    .then((res) => {
        setUserLog(null)
        setAuth(false)
      })

  }

  return (
    <>
    <LoginContext.Provider 
    value={{
      ...user,
      loginHandleSubmit:handleSubmit,
      loginHandleChange:handleChange,
      handleLogout:handleLogout,
      auth:auth,
      alert:alert,
      input:input,
      userLog:userLog,
    }}
    >
      {props.children}
    </LoginContext.Provider>

    </>
  )
}
// const UserConsumer = UserContext.Consumer
export { LoginContext, LoginProvider }