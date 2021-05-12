import {useState,useContext} from 'react'
import {Redirect} from 'react-router-dom'
import ErrorMessage from '../../../messages/ErrorMessage'
import {UserContexts} from '../../../contexts/UserContexts'

function LoginForm() {
    const [login, setLogin] = useState({})
    const [error, setError] = useState({})
    const {setLogged} = useContext(UserContexts)
    const registered = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):{}
    const handleChange = (e) => {
        setLogin({...login, [e.target.name]:e.target.value})
        setError({...error, [e.target.name]: ''})
    }
    const validate = (login) => {
        const error = {}
        if(!login.email) error.email = 'please insert your email';
        if(!login.password) error.password = 'please insert your password';
        if(login.email&& login.email !== registered.email) error.email = 'this email doesnt registered';
        if(login.password&& login.password !== registered.password) error.password = 'wrong password';
        return error
    }
    const handleSubmit = () => {
        const errors = validate(login)
        if(login.email === registered.email && login.password === registered.password ){
            localStorage.setItem('role', 'user')
            setLogged(true)
            reset()
        } else {
            setError(errors)
        }
    }
    const reset = ()=>{
        setLogin({})
        setError({})
    }
    
    return (
        <div className="container">
            <form className="form">
                Insert email
                <input type="text" name="email" value={login.email? login.email:''} onChange ={(e)=>handleChange(e)}/>
                {error.email&& <ErrorMessage error={error.email}/>}
                Insert password
                <input type="password" name="password" value={login.password?login.password:''} onChange ={(e)=>handleChange(e)}/>
                {error.password&& <ErrorMessage error={error.password}/>}
                <span onClick={handleSubmit}className="btn">Submit</span>
                {localStorage.role==="user"&&<Redirect to='/home'/> }
                <span onClick={reset} className="btn">Reset</span>
            </form>
            
        </div>
    )
}

export default LoginForm
