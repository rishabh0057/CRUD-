import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<NavLink className="navbar-brand" exact to="/">
					CRUD operations
				</NavLink>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink
								className="nav-link "
								aria-current="page"
								exact="true"
								to="/home"
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								exact="true"
								to="/about"
							>
								About
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className="nav-link"
								exact="true"
								to="/contact"
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
				<Link
					className="btn btn-primary border-light"
					exact="true"
					to="/adduser"
				>
					Add User
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
