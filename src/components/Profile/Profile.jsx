import React from 'react';
import classes from './Profile.module.css';
import { ProfileSvgSelector } from './ProfileSvgSelector.tsx';




const Profile = () => {

	return (
		<div className={classes.Profile}>
			<div className={classes.header}>
       <p className={classes.title}>My profile</p> 
			 {/* <Back/> */}
			</div>
			
		 <div className={classes.info}> 
			<div className={classes.avatar}></div>
	   <div className={classes.nameJob}>
			<p className={classes.userName}>Yana Speranskaya</p>
			<p className={classes.jobTitle}>Designer</p>
			<div><ProfileSvgSelector className={classes.svg} id="telegram_icon" /></div>
			</div>
			</div>
			</div>
	)
}


export default Profile;


