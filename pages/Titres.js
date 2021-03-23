import Layout from '../components/Layout'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Livres from '../components/Livres'; 


export default function Home() {
	return (
		<Layout home>
			<Grid item xs={12}>
				<Paper style={{ padding: 20, display: 'flex', overflow: 'auto', flexDirection: 'column' }}>
					<Livres />
				</Paper>
			</Grid>
		</Layout>
	)
}
