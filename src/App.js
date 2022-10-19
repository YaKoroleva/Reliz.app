import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LeftBar  from './components/LeftBar/leftBar'
import Profile  from './components/Profile/Profile'
import RightBar from './components/RightBar/RightBar';
import Offers from './components/Offers/Offers';
import FAQ_preview from './components/FAQ/FAQ_preview';
import Answer from './components/FAQ/Answer/FAQ_answer';
import Register from './components/Authorization/Register'
import Login from './components/Authorization/Login'
import Passrest from './components/Authorization/PassRest'




const App = (props) => {
	  
	





	return (
		<BrowserRouter>
			<div className='full-screen-wrapper'>
			<Routes>
			<Route path="/register" element={<Register />} />
			<Route path="/login" element=
			{<Login />} />
				<Route path="/rest" element=
			{<Passrest  />} />
			</Routes>
				<div className='app-wrapper'>
					<div className='wrapper-leftBar'>
					<LeftBar />
					</div> 
					 <div className='wrapper-rightBar'>
					 <RightBar />
					</div>
					
					<div class='app-wrapper-content'>
					<Routes>
					<Route path="/" element={<Profile />} />
							<Route path="/profile" element={<Profile />} />
		          <Route path="/offers" element={<Offers />} />
							 {/* <Route path="/offers/:id" element={<Offers />} />  */}
							<Route path="/creatives" element={<creatives />} />
							<Route path="/playable" element={<playable />} />
							<Route path="/freelance" element={<freelance />} />
							<Route path="/answer" element={<Answer />} />
							<Route path="/questions" element={<FAQ_preview />} /> 
						</Routes> 
					</div>
				</div> 
			</div>
		</BrowserRouter>

	);
}

export default App;


//element={ <Profile post = {props.post} 
//element={<Dialogs  dialog={props.dialog} message={props.message}/>}
//element={<News />}
//element={<Music />}
//element={<Settings />}

{/* <Route path="/offers/:id" element={<Offers />} /> */}