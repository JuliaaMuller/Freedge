import { createContext, useState } from "react";
import axios from 'axios';

const UserContext = createContext()

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

    // const target = event.target;
    const value = e.target.value;
    const name = e.target.name;
    setUser(prev => ({
      ...prev,
      [name]:value
    }))
    // this.setState({
    //   formData:{...this.state.formData,[name]: value}
    // });
    
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    setInput(false);
    const {email, password, address, first_name, last_name, city, phone_number } = user
    if (!email || !password || !address || !first_name || !last_name || !city || !phone_number){
      setInput(true)
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
    <UserContext.Provider 
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
    </UserContext.Provider>

    </>
  )
}
// const UserConsumer = UserContext.Consumer
export { UserContext, UserProvider }