import React, { Component } from "react";
import "../../styles/home.css";

export const Footer = () => (
	<footer className="footer d-flex justify-content-end px-5">
		<p className="">
			<strong>
				<a className="enlacefooter" style={{ cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				>Return to top</a> | Dev by <a className="enlacefooter" href="https://www.linkedin.com/in/joansimonutti/" target="_blank">Joan Simonutti</a> | © 2025
			</strong>
		</p>
	</footer>
);

