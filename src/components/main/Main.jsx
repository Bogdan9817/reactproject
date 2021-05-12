import React,{Suspense} from 'react'
import {Route} from 'react-router-dom'
import LoginForm from './login/LoginForm'
import SignUpForm from './signup/SignUpForm'
const  ProductItemLong = React.lazy(()=> import('./productPage/ProductItemLong')) 
const  ProductList = React.lazy(()=>import('./productPage/ProductList')) 


function Main() {
    return (
        <main>
         <Suspense fallback={<div>Loading...</div>}>
          <Route  exact path="/itemsMen"><ProductList/></Route>
          <Route path='/itemsMen/:id'><ProductItemLong/></Route>
          </Suspense> 
          <Route path="/signup"><SignUpForm/></Route>
          <Route path="/login"><LoginForm/></Route>
        </main>
    )
}

export default Main

