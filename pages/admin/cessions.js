import React from "react";

// reactstrap components
import {
	Card,
	Col,
	CardHeader,
	CardBody,
	Table,
	Container,
	Row,
} from "reactstrap";
// layout for this page
import Admin from "layouts/Admin.js";
// core components
import Header from "components/Headers/Header.js";

function Cessions() {
	return (
		<>
			<Header className="cessions">
				<div><h1><img src={require("assets/img/plumeo/Picto-cessions-blanc.svg")} /><span className="underline">Mes</span> cessions</h1></div>
			</Header>
			{/* Page content */}
			<Container className="cessions" fluid>
				{/* Table */}
				<Row>
					<Col className="order-xl-2 mb-5 mb-xl-5" xl="6">
						<Card className="bg-secondary  shadow">
							<CardHeader className="bg-white border-0">
								<Row className="align-items-center">
									<div className="col">
										<h3 className="text-uppercase ls-1 mb-1">Mes cessions</h3>
									</div>
								</Row>
							</CardHeader>
							<CardBody className="p-0">
								<Table className="align-items-center table-flush" responsive>
									<thead className="thead-light">
										<tr>
											<th scope="col">Date</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>30 mai 2021</td>
										</tr>

										<tr>

											<td>15 juin 2021</td>
										</tr>
									</tbody>
								</Table>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Container>
		</>
	);
}

Cessions.layout = Admin;

export default Cessions;
