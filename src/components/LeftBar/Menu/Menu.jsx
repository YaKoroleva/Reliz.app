import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Menu.module.css';
import { LeftBarSvgSelector } from '../leftBarSvgSelector.tsx';




const Menu = () => {


	return (


<div className={classes.menu}>
<div className={classes.menu_nav}>

	<div className={classes.item}>
		<LeftBarSvgSelector className={classes.svg} id="profile_icon" />
		<NavLink to='/profile' activeClassName={classes.active}>Profile</NavLink>
	</div>

	<div className={classes.item}>
		<LeftBarSvgSelector className={classes.svg} id="offers_icon" />
		<NavLink to='/offers' activeClassName={classes.active}>Offers</NavLink>
	</div>

	<div className={classes.item}>
		<LeftBarSvgSelector className={classes.svg} id="creatives_icon" />
		<a href='https://drive.google.com/drive/folders/1Mq2PfLiLpLxGunxkPimQv_C1SRt4vE6r' activeClassName={classes.active}>Creative Packs</a>
	</div>

	<div className={classes.item}>
		<LeftBarSvgSelector className={classes.svg} id="play_icon" />
		<a href ='https://drive.google.com/drive/folders/1kKZInNzl7ZdVC1eG4FKROHz2Yczp0ldE?usp=sharing' activeClassName={classes.active}>Playable ABS</a>
	</div>

	<div className={classes.item}>
		<LeftBarSvgSelector className={classes.svg} id="freelance_icon" />
		<NavLink to='/freelance' activeClassName={classes.active}>Freelance</NavLink>
	</div>

	<div className={classes.item}>
	 <LeftBarSvgSelector className={classes.svg} id="question_icon" />
		<NavLink to='/questions' activeClassName={classes.active}>FAQ</NavLink>
	</div>

</div>
</div>

	)
}


export default Menu


{/* <LeftBarSvgSelector className={classes.svg} id="question_icon" /> */}