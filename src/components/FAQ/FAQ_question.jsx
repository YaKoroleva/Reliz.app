import React from 'react';
import classes from './FAQ_question.module.css'
import questions from './FAQ_Data.js'
import { HashLink } from 'react-router-hash-link';
import {FAQ_SvgSelector} from './FAQ_SvgSelector.tsx'




const FAQ_question = () => {

	const FAQ_nav = questions.map( (item) => 
	<div className = {classes.wrapper_question} key = {item.id} id= {item.id}>
			<div className={classes.wrapper}>
			  <p className={classes.question}><div className={classes.svg}>
				 <FAQ_SvgSelector id="!_icon"  /></div>{item.title}</p>
				 <HashLink smooth to={`/answer#${item.id}`} >
				<button className={classes.button}>See answer</button>
				</HashLink>
  	  </div>
			
	</div>
	)

return(
	<div className={classes.FAQ}>
	 {FAQ_nav}
	</div>
)
}
export default FAQ_question;
