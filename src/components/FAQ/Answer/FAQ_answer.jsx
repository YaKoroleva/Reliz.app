import React from 'react';
import classes from './FAQ_answer.module.css'
import Answers from './answers'
import { Img } from '../../AllPng/AllPng.tsx'
import { FAQ_SvgSelector } from '../FAQ_SvgSelector.tsx'


const Answer = () => {

	return (
		<div className={classes.Answer}>
			<div className={classes.header}>
				<p className={classes.title}>Answer</p>
				{/* <Back/> */}
			</div>
			<div className={classes.wrapper}>
				<div className={classes.answers_wrapper}>

					<div className={classes.intro}>
						<strong className={classes.txt}>Добро пожаловать в ГУИД, Уважаемые!</strong>
						<br />
						<br />
						<p>В этом кратком (нет) гайде вы научитесь работе с креативами, их загрузке, поиску материалов и постановке задач в ASANA.
						</p>
						<br />
						<br />
						<p className={classes.frame}>BUY</p> — инфо для Байеров,<p className={classes.frame}> DES</p>  — инфо для дизайнеров,  <p className={classes.frame}>BUY&DES</p> — инфо для байеров и дизайнеров
						<br />

					<div>
						<div className={classes.creo}>
							<Img id="creo_folder" className={classes.img} width={362} />
							<p>Общая папка, куда собраны креативы для приложений, исходники проектов.</p>
							<span className={classes.svg}><FAQ_SvgSelector id="arrow_answer" />
							</span>
							</div>
							
              <p className={classes.txt}>Все задачи ставятся и курируются на досках в ASANA</p>
							<Img id="agensy" className={classes.img} width={362} />
							<div className={classes.img_wrap}>
							<Img id="playABC" className={classes.img} />
							</div>
						</div>
					</div>

					<Answers />

				</div>
			</div>
		</div>

	);
}


export default Answer;

