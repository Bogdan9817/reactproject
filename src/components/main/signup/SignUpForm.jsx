import React, {useState} from 'react'

import ErrorMessage from '../../../messages/ErrorMessage'


function SignUpForm() {
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const [pass, setShowPass] = useState(false)
    const handleChange = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
        setError({...error, [e.target.name]: ''})
    }
    const validate = (user) => {
        const error = {}
        if(!user.email) error.email='wrong format email';
        if(!user.name) error.name='name cannot be blank';
        if(!user.password) error.password='password cannot be blank';
        if(!user.confirm) error.confirm='please confirm your password';
        if(user.password !== user.confirm  ) error.password='password is not equals to password confirmation';
        return error
    }
    const handleSubmit = () => {
        const errors = validate(user)
        if(Object.keys(errors).length === 0){
            localStorage.setItem('user', JSON.stringify(user))
            return setUser({})
        } else {
            setError(errors)
        }
    }
    const reset = ()=>{
        setUser({})
        setError({})
    }
    
    

    return (
        <div  className="container">
        <form className="form">
            Insert your Email here: <br/><br/>
            <input type="text" name="email" value={user.email?user.email:''} onChange={(e)=>handleChange(e)} /><br/>
            {error.email&& <ErrorMessage error={error.email}/>}
            Insert name here:<br/>
            <input type="text" name="name" value={user.name?user.name:''} onChange={(e)=>handleChange(e)}/><br/>
            {error.name&& <ErrorMessage error={error.name}/>}
            Create password:<br/>
            <input type={pass===false?"password":"text"} name="password" value={user.password?user.password:''} onChange={(e)=>handleChange(e)}/><br/>
            {error.password&& <ErrorMessage error={error.password}/>}
            Confirm password:<br/>
            <input type={pass===false?"password":"text"} name="confirm" value={user.confirm?user.confirm:''} onChange={(e)=>handleChange(e)}/><br/>
            {error.confirm&& <ErrorMessage error={error.confirm}/>}
            <div>
                <label htmlFor="showpass" >show: </label><input checked={pass===true} onChange={()=>setShowPass(!pass)} type="checkbox" id="showpass"/>
            </div>
            <span onClick={handleSubmit}className="btn ">Submit</span>
            <span onClick={reset}className="btn ">Reset</span>
        </form>
        </div>
    )
}

export default SignUpForm
