import { createContext, useState } from "react";
import axios from 'axios';

const RegisterContext = createContext()

const UserProvider = (props) => {
  const [user, setUser] = useState({
    email: '',
    password:'',
    first_name:'',
    last_name:'',
    address:'',
    city:'',
    phone_number:'',
  })
  const [alert, setAlert] = useState(false)
  const [auth, setAuth ] = useState(false)
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
    const {email, password, address, first_name, last_name, city, phone_number } = user
    if (!email || !password || !address || !first_name || !last_name || !city || !phone_number){
      setInput(true)
      return
    }
      axios.post('/register', user)
      .then(res => {  
        if (res.status === 200) {
        setUserLog(user.email)
        setAuth(true)
        }else if (res.status === 409) {
        setAlert(true)
        }
      })
      .catch(err => console.warn(err));
    }

  return (
    <>
    <RegisterContext.Provider 
    value={{
      ...user,
      handleSubmit:handleSubmit,
      handleChange:handleChange,
      auth:auth,
      alert:alert,
      input:input,
      userLog:userLog,
    }}
    >
      {props.children}
    </RegisterContext.Provider>

    </>
  )
}
const UserConsumer = RegisterContext.Consumer
export { RegisterContext, UserProvider, UserConsumer }