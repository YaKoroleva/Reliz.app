
 import React from 'react';

 interface Props {
 	id: string;
 }

 export const FAQ_SvgSelector = ({ id }: Props) => {

 	switch (id) {
		case '!_icon':
 			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="3" height="15" viewBox="0 0 3 15" fill="none">
<path d="M0.4 15V12.79H2.81V15H0.4ZM0.4 11.4V0.599999H2.81V11.4H0.4Z" fill="#FFB800"/>
</svg>
	);

	case 'arrow_answer':
		return (
			<svg xmlns="http://www.w3.org/2000/svg"  width="64" height="64" fill="none" viewBox="0 0 64 64"><title>arrow_answer</title><path 
			 d="M51.08,26.7c-.75-.31-2.62,2.19-3.62,2.94a42.32,42.32,0,0,1-16.88,5.93,22,22,0,0,1-14.19-3.12c-.25-.19,2.19-2.63,1.94-3S11.08,27.76,10.71,28s2.71,7.81,3,7.69a16.36,16.36,0,0,0,1.75-2.25,12.62,12.62,0,0,0,2.62,1.81c1.81,1,3.06,2.13,14.06,2.06s20.44-7.06,21.07-7.87S51.83,27,51.08,26.7ZM16.14,30.41c-.37.37-1.75,3-2.08,2.87a22.87,22.87,0,0,1-1.75-4C12.31,29.06,16.52,30,16.14,30.41Z" fill="#FFB800" /></svg>
);


 		default:
			return <svg></svg>;


 	}
 }

