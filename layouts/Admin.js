import React from "react";
import { useRouter } from "next/router";
// reactstrap components
import { Container } from "react-bootstrap";
// core components
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import { useEffect } from 'react';

function Admin(props) {
	// used for checking current route
	const router = useRouter();
	let mainContentRef = React.createRef();
	React.useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		mainContentRef.current.scrollTop = 0;
	}, []);
	const getBrandText = () => {
		for (let i = 0; i < routes.length; i++) {
			if (router.route.indexOf(routes[i].layout + routes[i].path) !== -1) {
				return routes[i].name;
			}
		}
		if (router.route.indexOf('admin/article') != -1) return 'titres'
		return "Accueil";
	};
	const getID = () => {
		for (let i = 0; i < routes.length; i++) {
			if (router.route.indexOf(routes[i].layout + routes[i].path) !== -1) {
				return routes[i].id;
			}
		}
		if (router.route.indexOf('admin/article') != -1) return 'titres'
		return "home";
	};
	useEffect(() => {
		document.body.className = getID();
	});
	
	return (
		<>
			<Sidebar
				{...props}
				routes={routes}
				logo={{
					innerLink: "/admin/index",
					imgSrc: require("assets/img/plumeo/Logo-plumeo.svg"),
					imgAlt: "...",
				}}
			/>
			<div className={"main-content" + (getBrandText() == "Accueil" ? " home" : "")} ref={mainContentRef}>
				{props.children}
			</div>
			<Container fluid>
				<AdminFooter />
			</Container>
		</>
	);
}

export default Admin;
