import React, { useState } from 'react';
import classes from './Dropdown.module.css';
import { brands } from '../Offers/OffersData.js';
import { BrandsSvgSelector } from '../Offers/Brands/BrandsSvgSelector.tsx'
import { HashLink } from 'react-router-hash-link';





const Dropdown = ({ setSelected }) => {




	const BrandsNav = brands.map((item) => {
		return (
			<div key={item.id} className={classes.dropdown_item}>
				<HashLink smooth to={`/offers#${item.id}`} >
					{item.label}<div className={classes.svg} ><BrandsSvgSelector id="arrow_right_icon" /></div>
				</HashLink>
			</div>

		)
	})



	const [isActive, setIsActive] = useState(false);
	const options = BrandsNav


	return (
		<div className={classes.dropdown}>

			<div className={classes.dropdown_btn} onClick={(item) =>
				setIsActive(!isActive)}>

				Brandbooks<span className={classes.fas_caret_down}></span></div>
			{isActive && (
				<div className={classes.dropdown_content}>
					{options.map(option => (
						<div onClick={item => {
							setSelected(option)
							setIsActive(false)
						}}>

							<div className={classes.item}>{option}</div>



						</div>
					))}
				</div>
			)}



		</div>

	)

}



export default Dropdown;

// <Routes>
// 			<Route path=" /offers/:{id*}" element={<Offers/>}/>
// 			</Routes>




// const BrandsNav = brands.map((item) =>{
// 	return (
// 	 <div  key={item.id} className={classes.dropdown_item}>
// 		<a href='zoo.html'><div>{item.label}</div></a>
// 	 </div>

// 	)
// })
