import React from 'react';
import classes from './Offers.module.css'
import Brands from './Brands/Brands';


const Offers = () => {

	return (

		<div className={classes.Offers}>
			<div className={classes.header}>
      <p className={classes.title}>Offers</p> 
			 {/* <Back/> */}
			</div>
        <div className={classes.wrapper}>
         <div className={classes.brands_wrapper}>
		     	<Brands />
			   </div>	 
			  </div>
			</div>
	)
 
 }




export default Offers;