import Layout from '../components/Layout'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

export default function Home() {
	const classes = useStyles();
	return (
		<Layout home>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image="Consul.jpg"
						title="Les trois femmes du consul"
						height="500"/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">Les trois femmes du consul</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						consulter
        </Button>
				</CardActions>
			</Card>
		</Layout>
	)
}

