import React from 'react';
import {brands} from  '../OffersData';
import classes from './Brands.module.css';
import  { useState } from 'react';
import { BrandsSvgSelector } from './BrandsSvgSelector.tsx'
// import 	ShowMore from './Btn_ShowMore/ShowMore.jsx';


const Brands = ({ setSelected }) => {

const BrandsNav = brands.map( (item) => 

<div className = {classes.brand} key = {item.id} id= {item.id}>
	
	  <div className={classes.wrapper}>
			<div className={classes.brend}>
			<img src={item.logo} alt='logo' height={50} ></img>
			<p className={classes.title}>{item.label}</p>
			</div>
		<div className={classes.buttons} >
		<button className={classes.button}>
		<a href={item.creatives} className={classes.link}>creatives</a>
	</button>
  <button className={classes.button}>
		<a href={item.googleplay} className={classes.link}>google</a>
	</button>
	<button className={classes.button}>
		<a href={item.appstor} className={classes.link}>appstor</a>
	</button>
	<button className={classes.button}>
		<a href={item.site} className={classes.link}>site</a>
	</button>
	</div>
	</div>	
</div>
)


	


 






return (
	 <div className={classes.wrapper_brand} >
   {BrandsNav} 
	 </div>
)

}




export default Brands;









// let dialogsElements = dialogsData.map(
// 	dialog =>	<Dialog className={classes.dialog} name={dialog.name} id={dialog.id} /> );




// const Brands = () => {

// 	const BrandsNav = brands.map( (item) => 
// 	<div className = {classes.brand} key = {item.id} id = {item.id}>
		
// 			<div className={classes.wrapper}>
// 				<div className={classes.img}>
// 				<img src={item.logo} alt='logo'></img>
// 				</div>
// 			<p className={classes.title}>{item.label}</p>
			
	
			
// 		 <ShowMore/> 
	
	
	
	
// 		</div>
// 	</div>
	
	
// 	)
	
	
	
// 	return (
// 		 <div className={classes.wrapper_brand} >
// 		 {BrandsNav}
	
	
		 
// 		 </div>
// 	)
	
// 	}
	
	
	
	
// 	export default Brands;