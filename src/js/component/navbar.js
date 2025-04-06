import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="nav d-flex align-items-center justify-content-between px-5">
			<div className="d-flex justify-content-start gap-2">
				<span className="navbar-brand"><img /*src="https://img.icons8.com/color/512/star-wars.png"*/ src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254" alt="Star Wars" width="184.56" height="80" /></span>
			</div>
			<div className="d-flex justify-content-start gap-3">
				<Link to="/">
					<button className="btn button-starwars">Home</button>
				</Link>
				<Link to="/favorites">
					<button className="btn button-starwars">Favorites</button>
				</Link>
				<a className="btn button-starwars" href="https://github.com/JoanSimonutti" target="_blank">about me</a>
			</div>
		</nav>
	);
};