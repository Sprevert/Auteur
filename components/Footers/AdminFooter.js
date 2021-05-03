/*eslint-disable*/
import React from "react";
import Image from 'next/image'

// reactstrap components
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

function Footer() {
	return (
		<footer className="footer">
			<Row className="align-items-center justify-content-xl-between pt-3">
				<Col xl="6">
					<div className="copyright text-center text-xl-left">
						<span className="m-2">Mentions légales</span>
						<span className="m-2">© Groupe Madrigall{" "} {new Date().getFullYear()}</span>
					</div>
				</Col>

				<Col xl="6">
					<Nav className="nav-footer justify-content-center justify-content-xl-end">

						<NavItem>
							<img src={require("assets/img/plumeo/GroupeMadrigall.webp")} alt="Groupe Madrigall" height={60} />
						</NavItem>

					</Nav>
				</Col>
			</Row>
		</footer>
	);
}

export default Footer;
