import React from 'react';
import logo from '../../Icons/logo.png'
import creo from '../../Icons/creatives.png'
import agensy from '../../Icons/agensy.png'
import playABC from '../../Icons/playABC.png'
import chat from '../../Icons/chat.png'
import addtask from '../../Icons/addtask.png'
import creofolder from '../../Icons/creofolder.png'
import sampleAbs from '../../Icons/sampleAbs.png'
import sample from '../../Icons/sample.png'
import savecreo from '../../Icons/savecreo.png'
import play from '../../Icons/play+.png'
import betting from '../../Icons/betting.png'
import register from '../../Icons/register.png'


interface Props {
	id: string;
}

export const Img = ({ id }: Props) => {

	switch (id) {
		case 'Logo':
			return (
				
					<img src={logo} alt="Reliz-logo"  />
				
			)

			case 'register':
				return (
						<img src={register} alt="bgr"/>
				)



		case 'creo_folder':
			return (
					<img src={creo} alt="creo" height={50} />
			)

		case 'agensy':
			return (
					<img src={agensy} alt="agensy" height={50} />
			)

		case 'playABC':
			return (
					<img src={playABC} alt="playABC" height={50} />
			)

		case 'chat':
			return (
					<img src={chat} alt="chat" height={50} />
			)

		case 'addtask':
			return (
						<img src={addtask} alt="addtask" height={50} />
			)

		case 'creofolder':
			return (
						<img src={creofolder} alt="creofolder" width={515}  />
			)

		case 'sample':
			return (
						<img src={sample} alt="sample" />
			)

		case 'sampleAbs':
			return (
						<img src={sampleAbs} alt="sampleAbs" />
			)

		case 'savecreo':
			return (
						<img src={savecreo} alt="savecreo" />
			)
		
		case 'play':
			return (
						<img src={play} alt="play" height={50} />
			)


					
		case 'betting':
			return (
						<img src={betting} alt="betting" height={50} />
			)
	

			default:
				return <img></img>;
	


			}
	}

