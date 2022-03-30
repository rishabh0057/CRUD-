import React from "react";
import { Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./component/layout/Navbar";
import About from "./component/pages/about";
import AddUser from "./component/pages/AddUser";
import Contact from "./component/pages/contact";
import Home from "./component/pages/home";
import Edit from './component/pages/Edit';

const App = () => {
	return (
		<>
			<Navbar />
			<Routes> 
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/adduser" element={<AddUser />} />
				<Route path="/edit/:id" element={<Edit/>} />
			</Routes>
		</>
	);
};

export default App;
