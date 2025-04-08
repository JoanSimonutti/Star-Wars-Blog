import React from "react";
import { Link } from "react-router-dom";
import starwars2 from "../../../docs/starwars2.png"

export const Navbar = () => {
	return (
		<nav className="nav d-flex align-items-center justify-content-between px-5">
			<div className="d-flex justify-content-start gap-2">
				<span className="navbar-brand"><img src={starwars2} alt="Star Wars" width="184.56" height="80" /></span>
			</div>
			<div className="d-flex justify-content-start gap-3">
				<Link to="/">
					<button className="btn button-starwars">Home</button>
				</Link>
				<Link to="/favorites">
					<button className="btn button-starwars">My Favorites</button>
				</Link>
				
				<a className="btn button-starwars" href="https://github.com/JoanSimonutti" target="_blank">about me</a>
			</div>
		</nav>
	);
};