import React from "react";
import Link from 'next/link'
// layout for this page
import Admin from "layouts/Admin.js";

import { Card, Container, Carousel } from 'react-bootstrap'

import Header from "components/Headers/Header.js";
export default function Home(props) {
	function logoHover(show, id) {
		if (show) document.getElementById('link' + id).classList.add('active');
		if (!show) document.getElementById('link' + id).classList.remove('active');
	}

	return (
		<Admin isHome={true}>
			<Header />
			{/* Page content */}
			<Container className="pb-5" fluid>
				<div className="page">
					<div className="text-center">
						<h1>Bienvenue<br />sur votre portail auteur</h1>
						<p>Vous pouvez accéder à tout moment et facilement aux informations concernant votre relation éditeur pour vous faciliter la gestion de votre quotidien administratif.</p>
					</div>
					<div className="row home justify-content-md-center">
						<Link href="titres">
							<Card id="logotitres" className="logo titres" onMouseEnter={() => logoHover(true, 'titres')} onMouseLeave={() => logoHover(false, 'titres')}>
								<Card.Img variant="top" src={require("assets/img/plumeo/Picto-titres.svg")} />
								<Card.Body>
									<Card.Title>Mes titres</Card.Title>
								</Card.Body>
							</Card>
						</Link>
						<Link href="documents">
							<Card id="logodocuments"  className="logo documents" onMouseEnter={() => logoHover(true, 'documents')} onMouseLeave={() => logoHover(false, 'documents')}>
								<Card.Img variant="top" src={require("assets/img/plumeo/Picto-documents.svg")} />
								<Card.Body>
									<Card.Title>Mes documents</Card.Title>
								</Card.Body>
							</Card>
						</Link>
						<Link href="cessions">
							<Card id="logocessions"  className="logo cessions" onMouseEnter={() => logoHover(true, 'cessions')} onMouseLeave={() => logoHover(false, 'cessions')}>
								<Card.Img variant="top" src={require("assets/img/plumeo/Picto-cessions.svg")} />
								<Card.Body>
									<Card.Title>Mes cessions</Card.Title>
								</Card.Body>
							</Card>
						</Link>
						<Link href="profile">
							<Card id="logocompte"  className="logo compte" onMouseEnter={() => logoHover(true, 'compte')} onMouseLeave={() => logoHover(false, 'compte')}>
								<Card.Img variant="top" src={require("assets/img/plumeo/Picto-compte.svg")} />
								<Card.Body>
									<Card.Title>Mon compte</Card.Title>
								</Card.Body>
							</Card>
						</Link>
					</div>
				</div>
			</Container>

			<div className="editions p-3 bg-white">
				<Carousel indicators={false} interval={3000} controls={false}>
					<Carousel.Item className="text-center">
						<img src={require("assets/img/plumeo/Gallimard_logo.png")} alt="Gallimard" height={25} />
						<span >{" "}</span>
						<img src={require("assets/img/plumeo/Flammarion_logo.png")} alt="Flammarion" height={25} />
					</Carousel.Item>
					<Carousel.Item className="text-center">
						<img src={require("assets/img/plumeo/Folio.svg")} alt="Folio" height={25} />
						<span />
						<img src={require("assets/img/plumeo/Lu_logo.png")} alt="J'ai lu" height={40} />
					</Carousel.Item>
				</Carousel>
				<ul>
					<li><img src={require("assets/img/plumeo/Gallimard_logo.png")} alt="Gallimard" height={25} /></li>
					<li><img src={require("assets/img/plumeo/Flammarion_logo.png")} alt="Flammarion" height={25} /></li>
					<li><img src={require("assets/img/plumeo/Folio.svg")} alt="Folio" height={25} /></li>
					<li className="last"><img src={require("assets/img/plumeo/Lu_logo.png")} alt="J'ai lu" height={35} /></li>
				</ul>

			</div>
		</Admin>
	);
};
