import React from 'react';
import { BrandsSvgSelector } from '../BrandsSvgSelector.tsx'
import  { useState } from 'react';
import classes from './ShowMore.module.css';




const ShowMore = ({ setSelected }) => {

 


	const Btn_ShowMore = () => {

		return (
			<div className={classes.button}>
         gfgjgkf
			</div>

		)
	}

		
	}



	const [isActive, setIsActive] = useState(false);
	const options = Btn_ShowMore 


	return (
		<div className={classes.button}>

			<div className={classes.dropdown_btn} onClick={() =>
				setIsActive(!isActive)}>

				Show More<span className={classes.fas_caret_down}><div className={classes.svg}><BrandsSvgSelector  id="arrow_icon" /></div></span></div>
			{isActive && (
				<div className={classes.ShowMore_content}>
					{options(option => (
						<div onClick={item => {
							setSelected(option)
							setIsActive(false)
						}}>

					  {option} 



						</div>
					))}
				</div>
			)}



		</div>

	)

}



export default ShowMore;