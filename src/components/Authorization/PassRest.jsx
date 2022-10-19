import React from 'react';
import classes from './PassRest.module.css'
import { Img } from '../AllPng/AllPng.tsx'
import { NavLink } from 'react-router-dom';


const Passrest = () => {

	return (

		<div className={classes.Register}>

		<div className={classes.regBg}>
		<Img id='register'/>
		</div>

		<div className={classes.right}>
    <div className={classes.logo}>
    <Img id="Logo" />
		</div>

		<p className={classes.title}>Reset your password</p>
		<form className={classes.from}>
			
			<input placeholder="Login" className={classes.login}/><br/>
			<input placeholder="E-mail" className={classes.mail}/><br/>
		
			<button className={classes.button}>rest</button>

			<p className={classes.sub_title}>Go back to  <NavLink className={classes.log}> login screen</NavLink></p>

		</form>
		</div> 

		</div>

	)
 
 }




export default Passrest;