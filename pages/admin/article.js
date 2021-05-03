import React from "react";
import classnames from "classnames";

import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
	Table,
	Nav,
	NavItem,
	NavLink,
	Card,
	Col,
	CardHeader,
	CardBody,
	Container,
	Row,
	UncontrolledTooltip,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import Header from "components/Headers/TitreHeader.js";
import {
	chartOptions,
	parseOptions,
	Stock1,
	chartVente1,
	chartVente2,
} from "variables/charts.js";

function Article() {
	const [activeNav, setActiveNav] = React.useState(1);
	const [activeStockNav, setActiveStockNav] = React.useState(1);
	const [chartVente1Data, setchartVente1Data] = React.useState("data1");
	const [chartStock1Data, setchartStock1Data] = React.useState("data1");
	if (window.Chart) {
		parseOptions(Chart, chartOptions());
	}

	const toggleNavs = (e, index) => {
		e.preventDefault();
		setActiveNav(index);
		setchartVente1Data("data" + index);
		document.getElementById('ventes_1').style.display = index == 1 ? 'block' : 'none';
		document.getElementById('ventes2020_1').style.display = index == 1 ? 'block' : 'none';
		document.getElementById('ventes_2').style.display = index == 2 ? 'block' : 'none';
		document.getElementById('ventes2020_2').style.display = index == 2 ? 'block' : 'none';
	};
	const toggleStockNavs = (e, index) => {
		e.preventDefault();
		setActiveStockNav(index);
		setchartStock1Data("data" + index);
	};
	return (
		<>
			<Header className="titres" />

			{/* Page content */}
			<Container className="titres" fluid>
				{/* Table */}
				<Row>
					<Col className="order-xl-2 mb-5 mb-xl-5" xl="6">
						<Card className="card-article shadow">
							<Row className="justify-content-center">
								<Col className="order-lg-2" lg="3">
									<div className="card-article-image">
										<a href="#pablo" onClick={(e) => e.preventDefault()}>
											<img
												alt="..."
												className=""
												src={require("assets/img/couverture/9782070146413.jpg")}
											/>
										</a>
									</div>
								</Col>
							</Row>
							<CardBody className="pt-4">
								<div className="text-center">
									<Row>
										<Col>
											<span class="h6 text-muted">EAN</span>
											<h3>9782070146413</h3>
										</Col>
										<Col>
											<span class="h6 text-muted">Titre</span>
											<h3>Check-Point</h3>
										</Col>
									</Row>
									<Row>
										<Col>
											<span class="h6 text-muted">Maison d'édition</span>
											<h4>GALLIMARD</h4>
										</Col>

										<Col>
											<span class="h6 text-muted">Collection</span>
											<h4>BLANCHE</h4>
										</Col>
									</Row>
									<Row>
										<Col>
											<span class="h6 text-muted">Date 1ere MEV</span>
											<h4>10 Avril 2015</h4>
										</Col>
										<Col>
											<span class="h6 text-muted">Prix public TTC</span>
											<h4>21,00 €</h4>
										</Col>
									</Row>
								</div>
							</CardBody>
						</Card>
					</Col>

					<Col className="order-xl-2 mb-5 mb-xl-5" xl="6">
						<Card className="bg-secondary  shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h2 className="text-uppercase ls-1 mb-1">Mes Ventes</h2>
									</div>
									<div className="col">
										<Nav className="justify-content-end toggle" pills>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeNav === 1,
													})}
													href="#m"
													onClick={(e) => toggleNavs(e, 1)}
												>
													<span className="d-none d-md-block">Papiers</span>
													<span className="d-md-none" title="Papiers">P</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeNav === 2,
													})}
													data-toggle="tab"
													href="#w"
													onClick={(e) => toggleNavs(e, 2)}
												>
													<span className="d-none d-md-block">Numériques</span>
													<span className="d-md-none" title="Numériques">N</span>
												</NavLink>
											</NavItem>
										</Nav>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								<h3 className="heading-small text-muted mb-0">Ventes cumulées</h3>
								<div className="text-center">
									<Row>
										<Col>
											<span class="h6">au dernier arrêté (décembre 2020)</span>
											<h3><span id="ventes2020_1">194 000</span><span id="ventes2020_2" style={{ display: 'none' }}>5606</span></h3>
										</Col>
										<Col>
											<span class="h6">depuis parution</span>
											<h3><span id="ventes_1">200 000</span><span id="ventes_2" style={{ display: 'none' }}>5656</span></h3>
										</Col>
									</Row>
									<div className="chart">
										<Bar
											data={chartVente1[chartVente1Data]}
											options={chartVente1.options}
											getDatasetAtEvent={(e) => console.log(e)}
										/>
									</div>

								</div>
							</CardBody>
						</Card>
					</Col>

					<Col className="order-xl-2 mb-5 mb-xl-5" xl="6">
						<Card className="bg-secondary  shadow mb-5">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h2 className="text-uppercase ls-1 mb-1">Mes Ventes GFK</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								<div className="text-center">
									<div className="chart">
										<Bar
											data={chartVente2.data}
											options={chartVente2.options}
										/>
									</div>

								</div>
							</CardBody>
						</Card>
						<Card className="bg-secondary  shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h2 className="text-uppercase ls-1 mb-1">Liste des réimpressions</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody className="p-0">

								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">EAN</th>
											<th scope="col">Maison</th>
											<th scope="col"><span class="fullTable">Nbre réimpression</span><span className="mobileTable">Nbre</span></th>
											<th scope="col">Date</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>9782070146413</td>
											<td>BLANCHE</td>
											<td align="right">1 750</td>
											<td>10 oct. 2017</td>
										</tr>
										<tr>
											<td>9782070146413</td>
											<td>BLANCHE</td>
											<td align="right">4 250</td>
											<td>26 mai 2016</td>
										</tr>
									</tbody>
								</Table>
							</CardBody>
						</Card>
					</Col>

					<Col className="order-xl-2 mb-5 mb-xl-5" xl="6">

						<Card className="bg-secondary shadow mb-5">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h2 className="text-uppercase ls-1 mb-1">Stocks</h2>
									</div>
								</Row>
							</CardHeader>
							<CardBody>
								<div className="text-center">
									<Row>
										<Col>
											<span class="h6">Disponible à la vente</span>
											<h3>7659</h3>
										</Col>
										<Col>
											<span class="h6">Stock en dépôt</span>
											<h3>2590</h3>
										</Col>
									</Row>
								</div>
							</CardBody>
						</Card>

						<Card className="bg-secondary  shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h2 className="text-uppercase ls-1 mb-1">évolution des stocks</h2>
									</div>
									<div className="col">
										<Nav className="justify-content-end toggle" pills>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeStockNav === 1,
													})}
													href="#m"
													onClick={(e) => toggleStockNavs(e, 1)}
												>
													<span className="d-none d-md-block">Mois</span>
													<span className="d-md-none" title="Papiers">M</span>
												</NavLink>
											</NavItem>
											<NavItem>
												<NavLink
													className={classnames("py-2 px-3", {
														active: activeStockNav === 2,
													})}
													data-toggle="tab"
													href="#w"
													onClick={(e) => toggleStockNavs(e, 2)}
												>
													<span className="d-none d-md-block">Semaines</span>
													<span className="d-md-none" title="Numériques">S</span>
												</NavLink>
											</NavItem>
										</Nav>
									</div>
								</Row>
							</CardHeader>
							<CardBody>

								<div className="text-center">
									<div className="chart">
										<Line
											data={Stock1[chartStock1Data]}
											options={Stock1.options}
											getDatasetAtEvent={(e) => console.log(e)}
										/>
									</div>
								</div>
							</CardBody>
						</Card>
					</Col>


				</Row>

			</Container>
		</>
	);
}

Article.layout = Admin;

export default Article;
