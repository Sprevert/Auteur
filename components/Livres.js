import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Title from './Title';

/*
						<TableCell>EAN</TableCell>
						<TableCell>Titre</TableCell>
						<TableCell>Maison</TableCell>
						<TableCell>Date de parution</TableCell>
						<TableCell>format</TableCell>
						<TableCell>Ventes 2020</TableCell>
						<TableCell>Ventes depuis parution</TableCell>
createData(0, '9782070146413', 'Check - point', 'BLANCHE', '10/04/2015', 'LIVRE', 1000, 200000),
	createData(1, '9782070455379', 'Immortelle randonnée - Compostelle malgré moi', 'FOLIO', '02/10/2014', 'LIVRE', 8000, 180000),
	createData(2, '9782081420250', 'Les trois femmes du consul', 'FLAMMARION', '09/10/2019', 'LIVRE', 5000, 100000),
	createData(3, '9782290005569', 'Le parfum d\'Adam', 'J\'AI LU', '10/01/2007', 'LIVRE', 500, 10000),
];
						
						*/
const columns = [
	{ field: 'ean', headerName: 'EAN', width: 140 },
	{ field: 'titre', headerName: 'Titre', width: 200 },
	{ field: 'maison', headerName: 'Maison', width: 100 },
	{ field: 'parution', headerName: 'Date de parution', width: 150, type:'date' },
	{ field: 'format', headerName: 'Format', width: 90 },
	{ field: 'ventes2020', headerName: 'Ventes 2020', type: 'number', width: 140 },
	{ field: 'ventes', headerName: 'Ventes depuis parution', type: 'number', width: 140 },
];

const rows = [
	{ id: 0, ean: '9782070146413', titre: 'Check - point', maison: 'BLANCHE', parution: '10/04/2015', format: 'LIVRE', ventes2020: 1000, ventes: 200000 },
	{ id: 1, ean: '9782070455379', titre: 'Immortelle randonnée - Compostelle malgré moi', maison: 'FOLIO', parution: '02/10/2014', format: 'LIVRE', ventes2020: 8000, ventes: 180000 },
	{ id: 2, ean: '9782081420250', titre: 'Les trois femmes du consul', maison: 'FLAMMARION', parution: '09/10/2019', format: 'LIVRE', ventes2020: 5000, ventes: 100000 },
	{ id: 3, ean: '9782290005569', titre: 'Le parfum d\'Adam', maison: 'J\'AI LU', parution: '10/01/2007', format: 'LIVRE', ventes2020: 500, ventes: 10000 },
];

export default function DataTable() {
	return (
		<React.Fragment>
			<Title>Mes Titres</Title>
			<div style={{ height: 400, width: '100%' }}>
				<DataGrid rows={rows} columns={columns} pageSize={5} density="compact" />
			</div>

		</React.Fragment>
	);
}