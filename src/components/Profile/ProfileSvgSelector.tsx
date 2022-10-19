import React from 'react';

 interface Props {
 	id: string;
 }

 export const ProfileSvgSelector = ({ id }: Props) => {

 	switch (id) {
		case 'telegram_icon':
 			return (
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
				<path id="telegram" d="M1.57313 8.20798L1.581 8.20458L1.58874 8.20092C6.95813 5.6604 10.5341 3.98765 12.3206 3.18067C14.8798 2.02471 16.4129 1.35198 17.3912 0.966448C18.3793 0.577046 18.7452 0.504851 18.9942 0.500035L18.9846 0.000128455L18.9937 0.500046C19.0272 0.499435 19.105 0.504357 19.1902 0.526468C19.2774 0.549124 19.3364 0.580423 19.3676 0.607925C19.416 0.650562 19.4456 0.720498 19.4664 0.852245C19.4868 0.981488 19.5127 1.29339 19.493 1.51809C19.2179 4.65702 18.0223 12.3122 17.4119 15.8558C17.2891 16.5688 17.115 16.9894 16.9519 17.2249C16.7983 17.4469 16.6704 17.4862 16.5963 17.4936C15.9844 17.5547 15.4635 17.1835 14.6567 16.5589L14.6533 16.5562C14.4549 16.4026 14.2424 16.2381 14.0186 16.0788C13.1766 15.4794 12.5258 14.9981 11.8703 14.5133L11.8695 14.5127C11.2694 14.0689 10.665 13.6219 9.90977 13.0814C9.16473 12.5482 9.15562 12.2644 9.17817 12.1402C9.19648 12.0394 9.25825 11.9072 9.39775 11.7235C9.53708 11.5401 9.72043 11.3472 9.94407 11.1131L9.94673 11.1103C10.0865 10.964 10.239 10.8043 10.3896 10.6345C10.4419 10.5755 10.7405 10.2737 11.1949 9.81489L11.1962 9.8136C11.9084 9.09452 12.956 8.03681 13.8347 7.11807C14.2738 6.65896 14.6747 6.23045 14.9716 5.89442C15.1195 5.72712 15.2467 5.57695 15.3414 5.45446C15.3884 5.3937 15.4326 5.33293 15.4687 5.27606C15.4939 5.23624 15.5538 5.14073 15.5786 5.02567C15.5974 4.93889 15.6039 4.81772 15.5871 4.69489C15.5709 4.57574 15.5214 4.37074 15.3515 4.20677C15.1769 4.03827 14.9699 3.99816 14.8204 3.99689C14.6861 3.99575 14.5642 4.02587 14.508 4.03974L14.5033 4.04091L14.6229 4.52638L14.5033 4.04091C14.4437 4.0556 14.3963 4.07876 14.3811 4.08624L14.3809 4.08633C14.3574 4.0978 14.3348 4.11028 14.3151 4.12155C14.2754 4.14435 14.2288 4.17332 14.1778 4.20611C14.0748 4.27234 13.9355 4.36619 13.762 4.48587C13.4141 4.7259 12.9155 5.07906 12.2674 5.54423C10.9707 6.47505 9.06766 7.8602 6.55925 9.69905L6.55924 9.69904L6.55596 9.70148C5.86506 10.2167 5.3083 10.4139 4.86943 10.4036C4.60647 10.3974 4.17682 10.3116 3.66374 10.1719C3.16333 10.0356 2.62433 9.85968 2.16142 9.69627C2.0208 9.64663 1.88398 9.59991 1.75453 9.5557L1.75375 9.55544C1.25472 9.38503 0.903702 9.26209 0.676567 9.12176C0.569982 9.05591 0.528014 9.00761 0.51261 8.983C0.504426 8.96993 0.496453 8.95538 0.501547 8.91126C0.501466 8.91196 0.501413 8.91231 0.501433 8.91231C0.501728 8.91238 0.517778 8.83762 0.692429 8.69676C0.870686 8.553 1.15653 8.38789 1.57313 8.20798Z" stroke="white"/>
				</svg>

		);




 		default:
			return <svg></svg>;


 	}
 }