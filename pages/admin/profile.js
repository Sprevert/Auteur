import React from "react";

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	Container,
	Row,
	Col,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import Header from "components/Headers/Header.js";

function Profile() {
	return (
		<>
			<Header className="compte">
				<div><h1><img src={require("assets/img/plumeo/Picto-compte-blanc.svg")} /><span className="underline">Mon</span> compte<span className="fullTable"> auteur</span></h1></div>
			</Header>
			{/* Page content */}
			<Container className="compte" fluid>
				<Row>
					<Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
						<Card className="card-profile shadow">
							<Row className="justify-content-center">
								<Col className="order-lg-2" lg="3">
									<div className="card-profile-image">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className="rounded-circle"
												src={require("assets/img/theme/Rufin-195x195.jpg")}
											/>
										</a>
									</div>
								</Col>
							</Row>
							<CardBody className="pt-0">
								<div className="text-center">
									<h3>Jean Christophe Rufin</h3>
									<div className="font-weight-300"><i className="ni location_pin mr-2">Paris, France</i></div>
								</div>
								<Row>
									<div className="col">
										<div className="card-profile-stats d-flex justify-content-center m-0 p-0">
											<div className="">
												<span className="heading">4</span>
												<span className="description">Titres</span>
											</div>
										</div>
									</div>
								</Row>
							</CardBody>
						</Card>
					</Col>

					<Col className="order-xl-1" xl="8">
						<Card className="bg-secondary shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<Col xs="8">
										<h3 className="mb-0">Mon compte</h3>
									</Col>

								</Row>
							</CardHeader>
							<CardBody>
								<Form>
									<h6 className="heading-small text-muted mb-4">
										Information auteur
                  </h6>
									<div className="pl-lg-4">
										<Row>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-username"
													>
														Identifiant
                          </label>
													<Input
														className="form-control-alternative"
														defaultValue="JCRufin"
														id="input-username"
														placeholder="Username"
														type="text"
													/>
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-email"
													>
														Email
                          </label>
													<Input
														className="form-control-alternative"
														id="input-email"
														defaultValue="jcrufin@example.com"
														placeholder="jcrufin@example.com"
														type="email"
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-first-name"
													>
														Prénom
                          </label>
													<Input
														className="form-control-alternative"
														defaultValue="Jean Christophe"
														id="input-first-name"
														placeholder="First name"
														type="text"
													/>
												</FormGroup>
											</Col>
											<Col lg="6">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-last-name"
													>
														Nom
                          </label>
													<Input
														className="form-control-alternative"
														defaultValue="Rufin"
														id="input-last-name"
														placeholder="Last name"
														type="text"
													/>
												</FormGroup>
											</Col>
										</Row>
									</div>
									<hr className="my-4" />
									{/* Address */}
									<div className="pl-lg-4">
										<Row>
											<Col md="12">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-address"
													>
														Adresse
                          </label>
													<Input
														className="form-control-alternative"
														defaultValue="Adresse"
														id="input-address"
														placeholder="Adresse"
														type="text"
													/>
												</FormGroup>
											</Col>
										</Row>
										<Row>
											<Col lg="4">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-country"
													>
														Code postal
                          </label>
													<Input
														className="form-control-alternative"
														id="input-postal-code"
														placeholder="Code postal"
														type="number"
													/>
												</FormGroup>
											</Col>

											<Col lg="4">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-city"
													>
														Ville
                          </label>
													<Input
														className="form-control-alternative"
														defaultValue=""
														id="input-city"
														placeholder="Ville"
														type="text"
													/>
												</FormGroup>
											</Col>

											<Col lg="4">
												<FormGroup>
													<label
														className="form-control-label"
														htmlFor="input-country"
													>
														Pays
                          </label>
													<Input
														className="form-control-alternative"
														id="input-country"
														placeholder="Pays"
														type="text"
													/>
												</FormGroup>
											</Col>
										</Row>
									</div>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

Profile.layout = Admin;

export default Profile;
