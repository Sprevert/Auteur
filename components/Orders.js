import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, ean, titre, maison, dateparution, format, ventes2020, ventes) {
	return { id, ean, titre, maison, dateparution, format, ventes2020, ventes };
}

const rows = [
	createData(0, '9782070146413', 'Check - point', 'BLANCHE', '10/04/2015', 'LIVRE', 1000, 200000),
	createData(1, '9782070455379', 'Immortelle randonnée - Compostelle malgré moi', 'FOLIO', '02/10/2014', 'LIVRE', 8000, 180000),
	createData(2, '9782081420250', 'Les trois femmes du consul', 'FLAMMARION', '09/10/2019', 'LIVRE', 5000, 100000),
	createData(3, '9782290005569', 'Le parfum d\'Adam', 'J\'AI LU', '10/01/2007', 'LIVRE', 500, 10000),
];

function preventDefault(event) {
	event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
	seeMore: {
		marginTop: theme.spacing(3),
	},
}));

export default function Orders() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Title>Mes Titres</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>EAN</TableCell>
						<TableCell>Titre</TableCell>
						<TableCell>Maison</TableCell>
						<TableCell>Date de parution</TableCell>
						<TableCell>format</TableCell>
						<TableCell>Ventes 2020</TableCell>
						<TableCell>Ventes depuis parution</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow key={row.id}>
							<TableCell>{row.ean}</TableCell>
							<TableCell>{row.titre}</TableCell>
							<TableCell>{row.maison}</TableCell>
							<TableCell>{row.dateparution}</TableCell>
							<TableCell>{row.format}</TableCell>
							<TableCell align="right">{row.ventes2020}</TableCell>
							<TableCell align="right">{row.ventes}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className={classes.seeMore}>
				<Link color="primary" href="#" onClick={preventDefault}>
					See more orders
        </Link>
			</div>
		</React.Fragment>
	);
}