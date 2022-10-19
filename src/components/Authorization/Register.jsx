import React from 'react';
import classes from './Register.module.css'
import { Img } from '../AllPng/AllPng.tsx'
import { NavLink } from 'react-router-dom';


const Register = () => {

	return (

		<div className={classes.Register}>

		<div className={classes.regBg}>
		<Img id='register'/>
		</div>

		<div className={classes.right}>
    <div className={classes.logo}>
    <Img id="Logo" />
		</div>

		<p className={classes.title}>Basic information</p>
		<form className={classes.from}>
			
			<input placeholder="Login" className={classes.login}/><br/>
			<input placeholder="E-mail" className={classes.mail}/><br/>
			<input placeholder="Name" className={classes.name}/>
			<input placeholder="Surname" className={classes.surname}/><br/>
			<input placeholder="Password" className={classes.password}/><br/>
			<input placeholder="Job title" className={classes.job}/>
			<input placeholder="Telegram" className={classes.tg}/><br/>
		
			<button className={classes.button}>Sign up</button>

			<p className={classes.sub_title}>You already have an account?  <NavLink className={classes.log}> Log in!</NavLink></p>

		</form>
		</div> 

		</div>

	)
 
 }




export default Register;