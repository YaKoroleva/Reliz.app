import React from 'react';
import classes from './Login.module.css'
import { Img } from '../AllPng/AllPng.tsx'
import { NavLink } from 'react-router-dom';


const Login = () => {

	return (

		<div className={classes.Register}>

		<div className={classes.regBg}>
		<Img id='register'/>
		</div>

		<div className={classes.right}>
    <div className={classes.logo}>
    <Img id="Logo" />
		</div>

		<p className={classes.title}>Welcome, login to your account!</p>
		<form className={classes.from}>
			
			<input placeholder="Login" className={classes.login}/><br/>
			<input placeholder="Password" className={classes.password}/><br/>
		
			<button className={classes.button}>Login now</button>

			<p className={classes.sub_title}>You already have an account?  <NavLink className={classes.log}> Log in!</NavLink></p>

		</form>
		</div> 

		</div>

	)
 
 }




export default Login;