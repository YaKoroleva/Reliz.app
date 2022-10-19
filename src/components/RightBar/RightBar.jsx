import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, selected , } from 'react';
import classes from './RightBar.module.css';
import Dropdown from './Dropdown.jsx';






const RightBar = (props) => {

const [selected, setSelected] = useState ("brandbooks");



	return (
		<div className={classes.RightBar}>
			<div className={classes.menu}>
			 <div className={classes.title}><p>Useful information</p></div>
				<div className={classes.item}>
					<NavLink to='/offers' className={classes.punkt} activeClassName={classes.active} >offers</NavLink>
        </div>
		   <div>
			
			 <Dropdown selected={selected}  setSelected={setSelected}/>

			 </div>		 
				<div className={classes.item}>
					<a href='https://www.deepl.com/translator' className={classes.punkt} activeClassName={classes.active} >translator</a>
        </div>
				<div className={classes.item}>
					<NavLink to='/offers' className={classes.punkt} activeClassName={classes.active} >stok</NavLink>
        </div>
				<div className={classes.item}>
					<a href='https://drive.google.com/drive/u/0/folders/1K1jK8Msqp44Bjx73K0SdtMtXA1cuRUqi' className={classes.punkt} activeClassName={classes.active} >advertising marking</a>
        </div>
				<div className={classes.item}>
					<NavLink to='/offers' className={classes.punkt} activeClassName={classes.active} >
          language codes</NavLink>
        </div>

			
				</div>
			</div>
	



	)
}


export default RightBar;



// const [selected, setSelected] = useState("brandbooks");
{/* <Dropdown selected={selected} setSelected={setSelected}/>  */}