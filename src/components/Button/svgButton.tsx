import React from 'react';


interface Props {
	id: string;
}


export const SvgButton = ({ id }: Props) => {

	switch (id) {
	case 'logout_icon':

			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
				<path d="M2.55233 10.6683H13.9938V9.33489H2.55233L5.67954 6.20768V6.20764L4.73671 5.26489L0 10.0016L4.16438e-05 10.0016H0L4.73671 14.7383L5.67954 13.7955V13.7955L2.55233 10.6683Z" fill="black"/>
				<path d="M6.0047 0V1.33333H18.6714V18.6667H6.0047V20H20.0047V0H6.0047Z" fill="black"/>
				</svg>

			);

			
		default:
			return <svg></svg>;
	}
}