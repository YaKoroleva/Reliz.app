import React from 'react';
import classes from './FAQ_preview.module.css'
import {questions} from './FAQ_Data'
import { HashLink } from 'react-router-hash-link';
import FAQ_question from './FAQ_question'
import { NavLink } from 'react-router-dom';


const FAQ_preview = () => {

return(
	<div className={classes.FAQ}>
   <div className={classes.header}>
   <p className={classes.title}>FAQ</p> 
		{/* <Back/> */}
		</div>
	<div className={classes.wrapper}>
	 <div className={classes.question_wrapper}>	
  <FAQ_question/>

	
  <NavLink to='/answer' activeClassName={classes.active}>
  <div className={classes.button}><p className={classes.btn_txt}>All answer</p></div>
	</NavLink> 
	</div>
	</div>
	</div>
)
}



export default FAQ_preview;
