import React from 'react';
import classes from './leftBar.module.css';
import { Img } from '../AllPng/AllPng.tsx'
import { Button } from '../Button/Button.tsx'
import Menu from './Menu/Menu.jsx'


//import logo from '../../../public/images/logo.png'

const LeftBar = () => {

	return (
		<div className={classes.leftBar}>
			<div className={classes.logo}>
				<Img id="Logo" />
			</div>

      <div className={classes.menu}>
			 <Menu /> 
			 </div>
      
	 <div className={classes.button_CreateTask}>
			 <Button id="button_CreateTask" />
			 </div>


			<div className={classes.button_LogOut}>
				<Button id="button_LogOut"/>
		 </div>
	
		

		</div>
	)
}


export default LeftBar;