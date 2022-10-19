import React from 'react';
import classes from './Button.module.css'
//import { SvgButton } from './svgButton'

// import { SvgButton } from './Button/svgButton.tsx';



interface Props {
	id: string;
}


export const Button = ({ id }: Props) => {

	switch (id) {
		case 'button_CreateTask':
			return (

				<button className={classes.button} name="Create_Task" value="clicked" type="button"><a href='https://form.asana.com/?k=3ZXzQdLy1Dinsdc3XrnDJw&d=931633599820594' className={classes.link}>CREATE TASK</a></button>
			)


			case 'button_LogOut':
				return (
					<button className={classes.button} name="Log_Out" value="clicked" type="button">LOG OUT</button>
				)
	



			default:
				return <button></button>;
	
	
		}
	}
	
	

	// <SvgButton className={classes.svg} id="logout_icon" />