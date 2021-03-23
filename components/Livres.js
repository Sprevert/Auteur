import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Title from './Title';

const columns = [
	{ field: 'ean', headerName: 'EAN',flex:0.5 },
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

export default function DataTable() {
	return (
		<React.Fragment>
			<Title>Mes Titres</Title>
			<div style={{ height: 400, flexGrow: 1 }}>
				<DataGrid rows={rows} columns={columns} pageSize={5} density="compact" disableColumnMenu />
			</div>

		</React.Fragment>
	);
}