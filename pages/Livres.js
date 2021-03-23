import Layout from '../components/layout'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Livres from '../components/Livres'; 


export default function Home() {
	return (
		<Layout home>
			<Grid item xs={12}>
				<Paper>
					<Livres />
				</Paper>
			</Grid>
		</Layout>
	)
}
