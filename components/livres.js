import React from 'react';
import Table from 'react-bootstrap/Table';
import Link from 'next/link';
const columns = [
	{ field: 'ean', headerName: 'EAN', flex: 0.5 },
	{ field: 'titre', headerName: 'Titre', flex: 1 },
	{ field: 'maison', headerName: 'Maison' },
	{ field: 'parution', headerName: 'Date de parution', type: 'date' },
	{ field: 'format', headerName: 'Format' },
	{ field: 'ventes2020', headerName: 'Ventes 2020', type: 'number' },
	{ field: 'ventes', headerName: 'Ventes depuis parution', type: 'number' },
];

const rows = [
	{ id: 0, ean: '9782070146413', titre: 'Check - point', maison: 'BLANCHE', parution: '10/04/2015', format: 'LIVRE', ventes2020: 1000, ventes: 200000 },
	{ id: 1, ean: '9782070455379', titre: 'Immortelle randonnée - Compostelle malgré moi', maison: 'FOLIO', parution: '02/10/2014', format: 'LIVRE', ventes2020: 8000, ventes: 180000 },
	{ id: 2, ean: '9782081420250', titre: 'Les trois femmes du consul', maison: 'FLAMMARION', parution: '09/10/2019', format: 'LIVRE', ventes2020: 5000, ventes: 100000 },
	{ id: 3, ean: '9782290005569', titre: 'Le parfum d\'Adam', maison: 'J\'AI LU', parution: '10/01/2007', format: 'LIVRE', ventes2020: 500, ventes: 10000 },
];

function numberWithSpaces(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function DataTable() {
	return (
		<React.Fragment>
			<Table hover responsive className="titres">
				<thead className="thead-light">
					<tr>
						<th className="fullTable">{ }</th>
						<th className="fullTable">TITRE</th>
						<th className="fullTable">EAN</th>
						<th className="fullTable">MAISON</th>
						<th className="fullTable">DATE DE PARUTION</th>
						<th className="fullTable">FORMAT</th>
						<th className="text-right fullTable">VENTES 2020</th>
						<th className="text-right fullTable">VENTES DEPUIS PARUTION</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<Link href="article" key={row.ean}>
							<tr>
								<td className="p-1" align="center"><img
									alt="..."
									src={require("assets/img/couverture/" + row.ean + ".jpg")}
								/></td>
								<td><div className="titresh1">{row.titre}</div><div className="mobileTable">{row.maison} - {row.parution}</div><div className="mobileTable">Ventes 2020 : {numberWithSpaces(row.ventes2020)}</div></td>
								<td className="fullTable">{row.ean}</td>
								<td className="fullTable">{row.maison}</td>
								<td className="fullTable">{row.parution}</td>
								<td className="fullTable">{row.format}</td>
								<td className="fullTable" align="right">{numberWithSpaces(row.ventes2020)}</td>
								<td className="fullTable" align="right">{numberWithSpaces(row.ventes)}</td>
							</tr>
						</Link>
					))}
				</tbody>
			</Table>
		</React.Fragment>
	);
}